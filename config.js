// config.js
// Centrálne nastavenia pre chatbot

window.ChatbotConfig = {
  // API nastavenia
  api: {
    endpoint: "/api/chat",
    timeout: 10000, // 10 sekúnd
    retryAttempts: 2,
    retryDelay: 1000 // 1 sekunda
  },

  // UI nastavenia
  ui: {
    // Animácie
    animations: {
      messageDelay: 800,
      typingSpeed: 50,
      fadeInDuration: 300
    },
    
    // Správanie
    behavior: {
      autoScroll: true,
      showTypingIndicator: true,
      enableSoundEffects: false,
      maxMessagesDisplay: 100
    },
    
    // Responzívnosť
    responsive: {
      mobileBreakpoint: 768,
      smallMobileBreakpoint: 480
    }
  },

  // Cache nastavenia
  cache: {
    maxSize: 50,
    ttl: 3600000, // 1 hodina v ms
    enabled: true
  },

  // Analytics nastavenia
  analytics: {
    enabled: true,
    saveInterval: 30000, // 30 sekúnd
    maxPopularQuestions: 100,
    maxSatisfactionEntries: 50
  },

  // Performance monitoring
  performance: {
    enabled: true,
    slowFunctionThreshold: 100, // ms
    memoryCheckInterval: 300000, // 5 minút
    memoryWarningThreshold: 0.8 // 80%
  },

  // Bezpečnosť
  security: {
    allowedDomains: ["aipower.site", "localhost", "127.0.0.1"],
    sanitizeInput: true,
    maxMessageLength: 1000
  },

  // Lokalizácia
  messages: {
    sk: {
      greeting: "Dobrý deň! Ako vám môžem pomôcť? 👋",
      typing: "Píšem odpoveď...",
      error: "Ups, nastala chyba. Skúste to znova.",
      placeholder: "Napíšte správu...",
      offline: "Momentálne som nedostupný. Skúste to neskôr.",
      ratePlimitExceeded: "Príliš veľa požiadaviek. Počkajte chvíľu.",
      connectionError: "Problém s pripojením. Skontrolujte internetové pripojenie."
    },
    en: {
      greeting: "Hello! How can I help you? 👋",
      typing: "Typing...",
      error: "Oops, something went wrong. Please try again.",
      placeholder: "Type a message...",
      offline: "I'm currently unavailable. Please try again later.",
      ratePlimitExceeded: "Too many requests. Please wait a moment.",
      connectionError: "Connection problem. Please check your internet connection."
    }
  },

  // Aktuálny jazyk
  currentLanguage: 'sk',

  // Funkcie pre získanie lokalizovaných textov
  getMessage(key) {
    return this.messages[this.currentLanguage]?.[key] || 
           this.messages['sk'][key] || 
           `Missing translation: ${key}`;
  },

  // Validácia konfigurácie
  validate() {
    const errors = [];

    // Kontrola API nastavení
    if (!this.api.endpoint) {
      errors.push("API endpoint nie je nastavený");
    }

    if (this.api.timeout < 1000) {
      errors.push("API timeout je príliš nízky (minimum 1000ms)");
    }

    // Kontrola UI nastavení
    if (this.ui.animations.messageDelay < 100) {
      errors.push("Message delay je príliš nízky (minimum 100ms)");
    }

    // Kontrola cache nastavení
    if (this.cache.maxSize < 10) {
      errors.push("Cache max size je príliš nízky (minimum 10)");
    }

    if (errors.length > 0) {
      console.warn("Problémy s konfiguráciou:", errors);
      return false;
    }

    return true;
  },

  // Aktualizácia konfigurácie
  update(newConfig) {
    Object.assign(this, newConfig);
    this.validate();
  },

  // Reset na predvolené hodnoty
  reset() {
    // Implementácia resetu
    console.log("Konfigurácia resetovaná na predvolené hodnoty");
  },

  // Export konfigurácie
  export() {
    return JSON.stringify(this, null, 2);
  },

  // Import konfigurácie
  import(configString) {
    try {
      const config = JSON.parse(configString);
      this.update(config);
      return true;
    } catch (error) {
      console.error("Chyba pri importovaní konfigurácie:", error);
      return false;
    }
  }
};

// Validácia pri načítaní
if (typeof window !== 'undefined') {
  ChatbotConfig.validate();
}