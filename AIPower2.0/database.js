// database.js
// Optimalizovaná databáza informácií o spoločnosti AI Power s pokročilými funkciami

// Cache systém pre rýchle odpovede
const responseCache = new Map();
const maxCacheSize = 50;

// Hlavná databáza s vylepšenou štruktúrou
window.aiPowerData = {
  // Základné informácie o spoločnosti
  company: {
    name: "AI Power",
    founded: 2025,
    founders: ["Marcel Lehocky"],
    ceo: "Neuvedené",
    headquarters: "Bratislava, Slovensko",
    employees: "Neuvedené",
    description: "Slovenská agentúra špecializovaná na tvorbu AI chatbotov na mieru. Vytvára inteligentných asistentov, ktorí hovoria vaším jazykom a poznajú vaše podnikanie.",
    philosophy: "Ušetriť firmám čas a peniaze prostredníctvom inteligentných chatbotov a zlepšiť spokojnosť zákazníkov.",
    hasRnD: true,
    categories: ["AI Chatboty", "Automatizácia", "Digitálni asistenti"]
  },

  // Kontaktné informácie
  contact: {
    website: "https://www.aipower.site",
    email: "info@aipower.site",
    phone: "+421 904 603 171",
    booking: {
      calendly: "https://calendly.com/aipoweragency/new-meeting?month=2025-08"
    }
  },

  // Lokácie a pracovné hodiny
  locations: {
    headquarters: {
      city: "Bratislava",
      address: "Slovensko",
      workingHours: {
        monday: "8:00–17:00",
        tuesday: "8:00–17:00",
        wednesday: "8:00–17:00",
        thursday: "8:00–17:00",
        friday: "8:00–16:00",
        saturday: "zatvorené",
        sunday: "zatvorené"
      }
    }
  },

  // Služby s detailnejšou štruktúrou
  services: {
    main: [
      {
        id: "basic-chatbot",
        name: "AI Chatbot na mieru",
        price: {
          setup: 300,
          monthly: 50,
          currency: "EUR"
        },
        features: [
          "Odpovede na najčastejšie otázky",
          "24/7 dostupnosť",
          "Zber kontaktov", 
          "Údržba a drobné úpravy"
        ],
        description: "Základná verzia AI chatbota pre váš web",
        category: "basic"
      }
    ],
    premium: [
      {
        id: "premium-features",
        name: "Voliteľné prémiové funkcie",
        price: {
          perFeature: 50,
          currency: "EUR"
        },
        features: [
          "Vyhľadávanie vo vašej databáze",
          "Pokročilé integrácie (Google Sheets, CRM)",
          "Rezervačný systém",
          "Multijazyčný režim",
          "Ďalšie funkcie podľa potrieb"
        ],
        description: "Možnosti rozšírenia základného chatbota",
        category: "premium"
      }
    ]
  },

  // Partnerstvá a udržateľnosť
  partnerships: [],
  sustainability: {
    initiatives: [
      "Digitálne procesy – minimalizácia papierovej administratívy",
      "Cloudové riešenia s nízkou spotrebou energie"
    ]
  },

  // Compliance a certifikácie
  compliance: {
    gdpr: true,
    certifications: []
  }
};

// Validácia databázy
function validateDatabase() {
  const required = ['company', 'contact', 'services'];
  const missing = required.filter(key => !window.aiPowerData[key]);
  
  if (missing.length > 0) {
    console.error('Chýbajúce údaje v databáze:', missing);
    return false;
  }
  return true;
}

// Bezpečné získanie údajov s fallback
function safeGet(path, defaultValue = 'Informácia nie je dostupná') {
  try {
    return path.split('.').reduce((obj, key) => obj?.[key], window.aiPowerData) || defaultValue;
  } catch {
    return defaultValue;
  }
}

// Cache funkcie
function getCachedResponse(messageHash) {
  return responseCache.get(messageHash);
}

function setCachedResponse(messageHash, response) {
  if (responseCache.size >= maxCacheSize) {
    const firstKey = responseCache.keys().next().value;
    responseCache.delete(firstKey);
  }
  responseCache.set(messageHash, response);
}

// Optimalizované vyhľadávanie s kategóriami
function getQuickReply(normalizedMessage) {
  // Vytvor hash pre cache
  const messageHash = btoa(normalizedMessage).substring(0, 10);
  
  // Skontroluj cache
  const cached = getCachedResponse(messageHash);
  if (cached) {
    return cached;
  }

  const categories = {
    pricing: {
      keywords: ['cena', 'kolko', 'stoji', 'cennik', 'ceny', 'sluzby', 'ponuka'],
      handler: () => {
        const mainServices = window.aiPowerData.services.main
          .map(s => `• ${s.name}: €${s.price.setup} jednorazovo + €${s.price.monthly}/mesiac`)
          .join('<br>');
        const premiumServices = window.aiPowerData.services.premium
          .map(s => `• ${s.name}: €${s.price.perFeature} za funkciu`)
          .join('<br>');
        return `Naše služby a ceny:<br>${mainServices}<br>${premiumServices}`;
      }
    },
    
    contact: {
      keywords: ['kontakt', 'telefon', 'email', 'mail', 'ciselko', 'tvoje', 'cislo'],
      handler: () => {
        const c = window.aiPowerData.contact;
        return `Kontakt na nás:<br>📞 ${c.phone}<br>📧 ${c.email}<br>🌐 ${c.website}`;
      }
    },
    
    address: {
      keywords: ['adresa', 'kde', 'ste', 'sa', 'nachadza', 'nachadzate', 'sidli', 'lokacia', 'mapa', 'najdem'],
      handler: () => {
        const hq = window.aiPowerData.locations.headquarters;
        return `Naša hlavná adresa je:<br>${hq.city}, ${hq.address}`;
      }
    },
    
    history: {
      keywords: ['zalozena', 'kedy', 'vznikla', 'rok', 'vzniku', 'historia', 'firmy'],
      handler: () => `Firma ${window.aiPowerData.company.name} bola založená v roku ${window.aiPowerData.company.founded}.`
    },
    
    management: {
      keywords: ['konatel', 'zakladatel', 'kto', 'zalozil', 'founder', 'riaditel'],
      handler: () => {
        if (normalizedMessage.includes('riaditel')) {
          return `Výkonný riaditeľ: ${window.aiPowerData.company.ceo}.`;
        }
        return `Zakladateľ: ${window.aiPowerData.company.founders.join(", ")}.`;
      }
    },
    
    hours: {
      keywords: ['pracovne', 'hodiny', 'otvorene', 'kedy', 'mozem', 'prist', 'mate', 'otvaracie'],
      handler: () => {
        const hours = window.aiPowerData.locations.headquarters.workingHours;
        const dayNames = {
          monday: 'Pondelok', tuesday: 'Utorok', wednesday: 'Streda',
          thursday: 'Štvrtok', friday: 'Piatok', saturday: 'Sobota', sunday: 'Nedeľa'
        };
        return "Pracovné hodiny:<br>" +
          Object.entries(hours)
            .map(([day, time]) => `${dayNames[day]}: ${time}`)
            .join('<br>');
      }
    },
    
    partners: {
      keywords: ['partner', 'spolupraca', 'kym', 'spolupracujete'],
      handler: () => {
        return window.aiPowerData.partnerships.length
          ? `Naši partneri:<br>• ${window.aiPowerData.partnerships.join('<br>• ')}`
          : "Momentálne nemáme oficiálne partnerstvá.";
      }
    },
    
    description: {
      keywords: ['popis', 'co', 'robi', 'zaobera', 'funkcia', 'profil', 'firmy'],
      handler: () => window.aiPowerData.company.description
    },
    
    philosophy: {
      keywords: ['filozofia', 'vizia', 'hodnoty', 'poslanie'],
      handler: () => window.aiPowerData.company.philosophy
    },
    
    sustainability: {
      keywords: ['udrzatelnost', 'ekologicke', 'zelene', 'csr'],
      handler: () => {
        const initiatives = window.aiPowerData.sustainability.initiatives;
        return `Opatrenia udržateľnosti:<br>• ${initiatives.join('<br>• ')}`;
      }
    },
    
    employees: {
      keywords: ['pocet', 'zamestnancov', 'kolko', 'vas', 'je', 'mate'],
      handler: () => `Počet zamestnancov: ${window.aiPowerData.company.employees}.`
    },
    
    booking: {
      keywords: ['stretnutie', 'meeting', 'rezervacia', 'calendly', 'zavolat', 'book', 'objednat', 'termin'],
      handler: () => {
        const link = window.aiPowerData.contact.booking.calendly;
        return `Tu si môžeš rezervovať stretnutie: <a href="${link}" target="_blank">Rezervovať cez Calendly</a>`;
      }
    },
    
    research: {
      keywords: ['r&d', 'vyskum', 'vyvoj', 'research', 'development'],
      handler: () => {
        return window.aiPowerData.company.hasRnD
          ? "Áno, venujeme sa aj výskumu a vývoju AI riešení."
          : "Nie, momentálne nemáme vlastné R&D oddelenie.";
      }
    }
  };

  // Efektívne vyhľadávanie
  for (const [category, config] of Object.entries(categories)) {
    if (config.keywords.some(keyword => normalizedMessage.includes(keyword))) {
      const response = config.handler();
      // Uložiť do cache
      setCachedResponse(messageHash, response);
      return response;
    }
  }
  
  return null;
}

// Inicializácia - validuj databázu pri načítaní
if (typeof window !== 'undefined') {
  validateDatabase();
}

// Backward compatibility - zachováva staré názvy pre existujúci kód
Object.defineProperty(window.aiPowerData, 'sluzby', {
  get() {
    return this.services.main.map(s => ({
      nazov: s.name,
      cena: `€${s.price.setup} jednorazovo + €${s.price.monthly} / mesiac`,
      popis: s.description
    }));
  }
});

Object.defineProperty(window.aiPowerData, 'kontakty', {
  get() { return this.contact; }
});

Object.defineProperty(window.aiPowerData, 'pracovne_hodiny', {
  get() { return this.locations.headquarters.workingHours; }
});

Object.defineProperty(window.aiPowerData, 'zalozena', {
  get() { return this.company.founded; }
});

Object.defineProperty(window.aiPowerData, 'zakladatelia', {
  get() { return this.company.founders; }
});

Object.defineProperty(window.aiPowerData, 'vykonnyriaditel', {
  get() { return [this.company.ceo]; }
});

Object.defineProperty(window.aiPowerData, 'sidlo', {
  get() { return this.company.headquarters; }
});

Object.defineProperty(window.aiPowerData, 'pobočky', {
  get() { 
    return [{
      mesto: this.locations.headquarters.city,
      adresa: this.locations.headquarters.address
    }];
  }
});

Object.defineProperty(window.aiPowerData, 'popis', {
  get() { return this.company.description; }
});

Object.defineProperty(window.aiPowerData, 'filozofia', {
  get() { return this.company.philosophy; }
});

Object.defineProperty(window.aiPowerData, 'partnerstvá', {
  get() { return this.partnerships; }
});

Object.defineProperty(window.aiPowerData, 'udržateľnosť', {
  get() { return { opatrenia: this.sustainability.initiatives }; }
});

Object.defineProperty(window.aiPowerData, 'pocet_zamestnancov', {
  get() { return this.company.employees; }
});

Object.defineProperty(window.aiPowerData, 'r_and_d', {
  get() { return this.company.hasRnD; }
});

Object.defineProperty(window.aiPowerData, 'GDPR', {
  get() { return this.compliance.gdpr; }
});

Object.defineProperty(window.aiPowerData, 'booking', {
  get() { return this.contact.booking; }
});
