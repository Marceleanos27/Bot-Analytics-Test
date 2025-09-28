// migration-template.js
// Template pre migráciu vlastných firemných dát do AI Power chatbot knowledge base

// INŠTRUKCIE:
// 1. Nahraďte údaje v company sekcii svojimi firemními údajmi
// 2. Upravte workingHours podľa svojich pracovných hodín  
// 3. Rozšírte knowledgeBase o svoje špecifické informácie
// 4. Prípadne upravte kategórie podľa svojich potrieb

window.aiPowerData = {
  // === ZÁKLADNÉ FIREMNÉ INFORMÁCIE ===
  // Nahraďte svojimi údajmi
  company: {
    name: "VAŠA FIRMA s.r.o.",                    // Názov firmy
    founded: 2020,                                // Rok založenia
    founder: "Ján Novák",                        // Zakladateľ/ka
    location: "Košice, Slovensko",              // Lokácia
    website: "https://www.vasafirma.sk",        // Webstránka
    email: "info@vasafirma.sk",                 // Email
    phone: "+421 902 123 456",                  // Telefón
    calendly: "https://calendly.com/vasafirma"  // Calendly odkaz (voliteľné)
  },
  
  // === PRACOVNÉ HODINY ===
  // Upravte podľa svojich pracovných hodín
  workingHours: {
    monday: "9:00–17:00",
    tuesday: "9:00–17:00", 
    wednesday: "9:00–17:00",
    thursday: "9:00–17:00",
    friday: "9:00–16:00",
    weekend: "zatvorené"
  },
  
  // === KNOWLEDGE BASE ===
  // Upravte/rozšírte o svoje služby a informácie
  knowledgeBase: [
    {
      id: "company-services",
      category: "services",
      title: "Naše hlavné služby",
      content: "Poskytujeme [OPÍŠTE SVOJE SLUŽBY]. Špecializujeme sa na [VAŠA ŠPECIALIZÁCIA]. Naši klienti oceňujú [VAŠE VÝHODY].",
      keywords: ["služby", "ponuka", "čo robíme", "špecializácia"]
    },
    {
      id: "pricing-info", 
      category: "pricing",
      title: "Cenník našich služieb",
      content: "Naše ceny: [SLUŽBA 1]: €[CENA], [SLUŽBA 2]: €[CENA]. Poskytujeme aj individuálne cenové ponuky na mieru.",
      keywords: ["cena", "cenník", "koľko stojí", "price"]
    },
    {
      id: "contact-info",
      category: "contact", 
      title: "Ako nás kontaktovať",
      content: "Kontaktovať nás môžete na telefóne +421 902 123 456, emailom info@vasafirma.sk alebo cez našu webstránku. Pracujeme Po-Pia 9:00-17:00.",
      keywords: ["kontakt", "telefón", "email", "ako", "kde"]
    },
    {
      id: "company-about",
      category: "company",
      title: "O našej firme", 
      content: "[VAŠA FIRMA] pôsobí na trhu od roku [ROK]. Naša vízia je [VAŠA VÍZIA]. Sídlime v [LOKÁCIA] a obsluhujem klientov [GEOGRAFICKÁ OBLASŤ].",
      keywords: ["o nás", "história", "vízia", "kto sme"]
    },
    {
      id: "booking-meeting",
      category: "booking",
      title: "Rezervácia stretnutia",
      content: "Stretnutie si môžete rezervovať telefonicky na +421 902 123 456, emailom, alebo cez náš online kalendár. Ponúkame aj online konzultácie.",
      keywords: ["stretnutie", "rezervácia", "meeting", "konzultácia"]
    }
    
    // PRIDAJTE ĎALŠIE KATEGÓRIE PODĽA POTREBY:
    // - "process" - ako prebieha spolupráca
    // - "technical" - technické informácie  
    // - "support" - podpora a údržba
    // - "advantages" - vaše konkurenčné výhody
    // - "clients" - pre koho sú vaše služby
    // - "portfolio" - referencie a úspechy
  ]
};

// === DOSTUPNÉ KATEGÓRIE ===
// Môžete použiť tieto kategórie pre lepšie triedenie:
// - "services" - služby a produkty
// - "pricing" - ceny a cenníky  
// - "contact" - kontaktné informácie
// - "company" - o firme, história
// - "booking" - rezervácie, stretnutia
// - "process" - ako prebieha spolupráca
// - "technical" - technické informácie
// - "support" - podpora, pomoc
// - "advantages" - výhody, prečo si vybrať vás
// - "clients" - cieľoví klienti 
// - "portfolio" - referencie, úspechy

// === TIPY PRE KEYWORDS ===
// Používajte rôzne formy slov, ktoré klienti môžu použiť:
// - "cena", "cenník", "koľko stojí", "price", "pricing"
// - "služby", "ponuka", "čo robíte", "služba"  
// - "kontakt", "telefón", "email", "ako vás kontaktovať"
// - "stretnutie", "rezervácia", "meeting", "schôdzka"