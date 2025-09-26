// utils.js
// Pomocné utility funkcie pre chatbot

window.ChatbotUtils = {
  // Throttling funkcie
  throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function (...args) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  },

  // Debouncing funkcie
  debounce(func, delay) {
    let timeoutId;
    
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },

  // Sanitizácia vstupu
  sanitizeInput(input) {
    if (!input || typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Odstráni script tagy
      .replace(/<[^>]*>/g, '') // Odstráni HTML tagy
      .replace(/javascript:/gi, '') // Odstráni javascript protokol
      .substring(0, ChatbotConfig.security.maxMessageLength); // Limit dĺžky
  },

  // Generovanie hash pre cache
  generateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Konverzia na 32bit integer
    }
    return Math.abs(hash).toString(16);
  },

  // Formatovanie času
  formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('sk-SK', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  },

  // Formatovanie dátumu
  formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('sk-SK');
  },

  // Detekcia mobilného zariadenia
  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= ChatbotConfig.ui.responsive.mobileBreakpoint;
  },

  // Detekcia veľmi malého zariadenia
  isSmallMobile() {
    return window.innerWidth <= ChatbotConfig.ui.responsive.smallMobileBreakpoint;
  },

  // Kopírovanie do schránky
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fallback pre staršie prehliadače
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        return true;
      } catch (fallbackError) {
        console.error('Nepodarilo sa skopírovať text:', fallbackError);
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    }
  },

  // Escape HTML znakov
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  },

  // Unescape HTML znakov
  unescapeHtml(text) {
    const map = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#039;': "'"
    };
    
    return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function(m) { return map[m]; });
  },

  // Validácia emailu
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validácia telefónneho čísla (SK formát)
  isValidPhoneSK(phone) {
    const phoneRegex = /^(\+421|0)(9[0-9]{8}|[2-5][0-9]{7})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  // Formátovanie telefónneho čísla
  formatPhoneSK(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.startsWith('421')) {
      return `+421 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
    } else if (cleaned.startsWith('0')) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
    }
    
    return phone;
  },

  // Retry funkcia s exponenciálnym backoff
  async retry(fn, options = {}) {
    const {
      attempts = 3,
      delay = 1000,
      backoff = 2
    } = options;

    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === attempts - 1) {
          throw error;
        }
        
        const waitTime = delay * Math.pow(backoff, i);
        await this.sleep(waitTime);
      }
    }
  },

  // Sleep funkcia
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // Merge objektov (deep merge)
  deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  },

  // Kontrola prístupnosti API
  async healthCheck() {
    try {
      const response = await fetch('/api/health', {
        method: 'GET',
        timeout: 5000
      });
      
      return response.ok;
    } catch (error) {
      console.warn('API health check failed:', error);
      return false;
    }
  },

  // Lokálne úložisko s TTL
  localStorage: {
    set(key, value, ttl = null) {
      const item = {
        value: value,
        timestamp: Date.now(),
        ttl: ttl
      };
      
      try {
        window.localStorage.setItem(key, JSON.stringify(item));
      } catch (error) {
        console.warn('Nepodarilo sa uložiť do localStorage:', error);
      }
    },

    get(key) {
      try {
        const item = window.localStorage.getItem(key);
        if (!item) return null;

        const parsed = JSON.parse(item);
        
        // Kontrola TTL
        if (parsed.ttl && Date.now() - parsed.timestamp > parsed.ttl) {
          window.localStorage.removeItem(key);
          return null;
        }

        return parsed.value;
      } catch (error) {
        console.warn('Nepodarilo sa načítať z localStorage:', error);
        return null;
      }
    },

    remove(key) {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.warn('Nepodarilo sa odstrániť z localStorage:', error);
      }
    },

    clear() {
      try {
        window.localStorage.clear();
      } catch (error) {
        console.warn('Nepodarilo sa vyčistiť localStorage:', error);
      }
    }
  },

  // Event emitter pre komunikáciu medzi komponentmi
  EventEmitter: class {
    constructor() {
      this.events = {};
    }

    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }

    emit(event, data) {
      if (this.events[event]) {
        this.events[event].forEach(callback => {
          try {
            callback(data);
          } catch (error) {
            console.error(`Chyba v event handleri pre ${event}:`, error);
          }
        });
      }
    }

    off(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(cb => cb !== callback);
      }
    }
  }
};

// Globálny event emitter pre chatbot
window.chatbotEvents = new ChatbotUtils.EventEmitter();