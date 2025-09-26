// analytics.js
// Pokročilé analytics a monitoring pre chatbot

// Analytics objekt
window.ChatbotAnalytics = {
  // Štatistiky
  stats: {
    totalMessages: 0,
    quickReplies: 0,
    apiCalls: 0,
    errors: 0,
    sessionsToday: 0,
    averageResponseTime: 0,
    popularQuestions: new Map(),
    userSatisfaction: []
  },

  // Inicializácia
  init() {
    this.loadStats();
    this.startSession();
    
    // Automatické uloženie každých 30 sekúnd
    setInterval(() => this.saveStats(), 30000);
    
    // Uloženie pri zatvorení stránky
    window.addEventListener('beforeunload', () => this.saveStats());
  },

  // Sledovanie správ
  trackMessage(type, message, responseTime = null) {
    this.stats.totalMessages++;
    
    if (type === 'quick-reply') {
      this.stats.quickReplies++;
    } else if (type === 'api-call') {
      this.stats.apiCalls++;
      if (responseTime) {
        this.updateAverageResponseTime(responseTime);
      }
    }

    // Sledovanie populárnych otázok
    const normalized = this.normalizeQuestion(message);
    const count = this.stats.popularQuestions.get(normalized) || 0;
    this.stats.popularQuestions.set(normalized, count + 1);

    // Obmedzenie veľkosti mapy
    if (this.stats.popularQuestions.size > 100) {
      const oldest = this.stats.popularQuestions.keys().next().value;
      this.stats.popularQuestions.delete(oldest);
    }
  },

  // Sledovanie chýb
  trackError(errorType, errorMessage) {
    this.stats.errors++;
    console.warn(`Chatbot Error [${errorType}]:`, errorMessage);
    
    // Môžete pridať externe error reporting
    if (window.Sentry) {
      Sentry.captureException(new Error(`${errorType}: ${errorMessage}`));
    }
  },

  // Sledovanie spokojnosti používateľov
  trackSatisfaction(rating, feedback = '') {
    this.stats.userSatisfaction.push({
      rating,
      feedback,
      timestamp: new Date().toISOString()
    });

    // Limit na posledných 50 hodnotení
    if (this.stats.userSatisfaction.length > 50) {
      this.stats.userSatisfaction.shift();
    }
  },

  // Normalizácia otázky pre analýzu
  normalizeQuestion(message) {
    return message.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, '')
      .trim()
      .substring(0, 50); // Obmedzenie na 50 znakov
  },

  // Aktualizácia priemerného času odpovede
  updateAverageResponseTime(newTime) {
    const currentAvg = this.stats.averageResponseTime;
    const totalCalls = this.stats.apiCalls;
    
    this.stats.averageResponseTime = 
      ((currentAvg * (totalCalls - 1)) + newTime) / totalCalls;
  },

  // Štart novej session
  startSession() {
    const today = new Date().toDateString();
    const lastSession = localStorage.getItem('chatbot-last-session');
    
    if (lastSession !== today) {
      this.stats.sessionsToday = 1;
      localStorage.setItem('chatbot-last-session', today);
    } else {
      this.stats.sessionsToday++;
    }
  },

  // Načítanie štatistík z localStorage
  loadStats() {
    try {
      const saved = localStorage.getItem('chatbot-analytics');
      if (saved) {
        const data = JSON.parse(saved);
        Object.assign(this.stats, data);
        
        // Konvertovať Map objekty
        if (data.popularQuestions) {
          this.stats.popularQuestions = new Map(Object.entries(data.popularQuestions));
        }
      }
    } catch (error) {
      console.warn('Nepodarilo sa načítať analytics:', error);
    }
  },

  // Uloženie štatistík do localStorage
  saveStats() {
    try {
      const data = {
        ...this.stats,
        popularQuestions: Object.fromEntries(this.stats.popularQuestions)
      };
      localStorage.setItem('chatbot-analytics', JSON.stringify(data));
    } catch (error) {
      console.warn('Nepodarilo sa uložiť analytics:', error);
    }
  },

  // Export štatistík
  exportStats() {
    const data = {
      ...this.stats,
      popularQuestions: Object.fromEntries(this.stats.popularQuestions),
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], 
      { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `chatbot-analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
  },

  // Získanie top otázok
  getTopQuestions(limit = 10) {
    return Array.from(this.stats.popularQuestions.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  },

  // Získanie priemerného hodnotenia
  getAverageRating() {
    if (this.stats.userSatisfaction.length === 0) return null;
    
    const sum = this.stats.userSatisfaction.reduce((acc, item) => acc + item.rating, 0);
    return (sum / this.stats.userSatisfaction.length).toFixed(1);
  },

  // Dashboard s kľúčovými metrikami
  getDashboard() {
    return {
      totalMessages: this.stats.totalMessages,
      quickRepliesRate: this.stats.totalMessages > 0 
        ? ((this.stats.quickReplies / this.stats.totalMessages) * 100).toFixed(1) + '%'
        : '0%',
      averageResponseTime: this.stats.averageResponseTime.toFixed(0) + 'ms',
      errorRate: this.stats.totalMessages > 0
        ? ((this.stats.errors / this.stats.totalMessages) * 100).toFixed(1) + '%'
        : '0%',
      sessionsToday: this.stats.sessionsToday,
      averageRating: this.getAverageRating(),
      topQuestions: this.getTopQuestions(5)
    };
  }
};

// Performance monitoring
window.ChatbotPerformance = {
  // Meranie výkonu funkcií
  measureFunction(fn, name) {
    return function(...args) {
      const start = performance.now();
      const result = fn.apply(this, args);
      const end = performance.now();
      
      console.log(`${name} trvalo: ${(end - start).toFixed(2)}ms`);
      
      // Sledovanie pomalých funkcií
      if (end - start > 100) {
        ChatbotAnalytics.trackError('performance', `Pomalá funkcia: ${name} (${(end - start).toFixed(2)}ms)`);
      }
      
      return result;
    };
  },

  // Memory monitoring
  checkMemory() {
    if (performance.memory) {
      const memory = {
        used: Math.round(performance.memory.usedJSHeapSize / 1048576),
        total: Math.round(performance.memory.totalJSHeapSize / 1048576),
        limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
      };
      
      console.log('Memory usage:', memory);
      
      // Upozornenie pri vysokom využití pamäte
      if (memory.used / memory.limit > 0.8) {
        ChatbotAnalytics.trackError('memory', `Vysoké využitie pamäte: ${memory.used}MB/${memory.limit}MB`);
      }
      
      return memory;
    }
    return null;
  }
};

// Inicializácia analytics
if (typeof window !== 'undefined') {
  ChatbotAnalytics.init();
  
  // Pravidelná kontrola pamäte (každých 5 minút)
  setInterval(() => ChatbotPerformance.checkMemory(), 300000);
}

// Global funkcia pre tracking (backward compatibility)
window.trackQuickReply = function(category, message) {
  ChatbotAnalytics.trackMessage('quick-reply', message);
};