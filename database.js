// database.js
// Kompletná databáza informácií o spoločnosti AI Power

window.aiPowerData = {
  meno: "AI Power",
  zalozena: 2025,
  zakladatelia: ["Marcel Lehocky"],
  vykonnyriaditel: ["Neuvedené"],
  sidlo: "Bratislava, Slovensko",
  pobočky: [
    { mesto: "Bratislava", adresa: "Slovensko" }
  ],
  segmenty: ["AI Chatboty", "Automatizácia", "Digitálni asistenti"],
  popis: "Slovenská agentúra špecializovaná na tvorbu AI chatbotov na mieru. Vytvára inteligentných asistentov, ktorí hovoria vaším jazykom a poznajú vaše podnikanie.",
  sluzby: [
    {
      nazov: "AI Chatbot na mieru",
      cena: "€300 jednorazovo + €50 / mesiac",
      popis: "Základná verzia AI chatbota pre váš web: odpovede na najčastejšie otázky, 24/7 dostupnosť, zber kontaktov, údržba a drobné úpravy."
    },
    {
      nazov: "Voliteľné prémiové funkcie",
      cena: "Jednorazovo €50 / funkcia",
      popis: "Možnosti rozšírenia: vyhľadávanie vo vašej databáze, pokročilé integrácie (Google Sheets, CRM, rezervačný systém), multijazyčný režim, ďalšie funkcie podľa potrieb."
    }
  ],
  kontakty: {
    web: "https://www.aipower.site",
    email: "info@aipower.site",
    telefon: "+421 904 603 171"
  },
  pracovne_hodiny: {
    pondelok: "8:00–17:00",
    utorok: "8:00–17:00",
    streda: "8:00–17:00",
    stvrtok: "8:00–17:00",
    piatok: "8:00–16:00",
    sobota: "zatvorené",
    nedela: "zatvorené"
  },
  booking: {
    calendly: "https://calendly.com/aipoweragency/new-meeting?month=2025-08"
  },
  partnerstvá: [],
  filozofia: "Ušetriť firmám čas a peniaze prostredníctvom inteligentných chatbotov a zlepšiť spokojnosť zákazníkov.",
  udržateľnosť: {
    opatrenia: [
      "Digitálne procesy – minimalizácia papierovej administratívy",
      "Cloudové riešenia s nízkou spotrebou energie"
    ]
  },
  GDPR: true,
  pocet_zamestnancov: "Neuvedené",
  r_and_d: true,
  
  // RAG Knowledge Base
  knowledgeBase: [
    {
      id: "chatbot-benefits",
      category: "benefits",
      title: "Výhody AI chatbotov",
      content: "AI chatboty poskytujú 24/7 dostupnosť, znižujú náklady na zákaznícky servis, zlepšujú spokojnosť zákazníkov a umožňujú automatizáciu rutinných úloh. Chatbot dokáže odpovedať na základné otázky okamžite, čím šetrí čas vašim zamestnancom aj zákazníkom.",
      keywords: ["výhody", "benefits", "prečo", "dôvody", "automatizácia", "úspora", "24/7", "dostupnosť", "spokojnosť"]
    },
    {
      id: "implementation-process",
      category: "process", 
      title: "Proces implementácie chatbota",
      content: "Implementácia prebieha v 5 krokoch: 1) Analýza vašich potrieb a častých otázok zákazníkov, 2) Návrh konverzačných tokov a scenárov, 3) Vývoj a testovanie chatbota, 4) Integrácia na váš web, 5) Školenie a priebežná údržba. Celý proces trvá 1-2 týždne.",
      keywords: ["proces", "implementácia", "kroky", "ako", "postup", "inštalácia", "nastavenie", "integrácia"]
    },
    {
      id: "pricing-details",
      category: "pricing",
      title: "Podrobnosti o cenách a balíkoch",
      content: "Základný balík za €300 jednorazovo + €50/mesiac zahŕňa: kompletné nastavenie chatbota, zapracovanie vašich FAQ, integráciu na web, mesačnú údržbu a drobné úpravy. Prémiové funkcie ako CRM integrácia, Google Sheets prepojenie, rezervačný systém alebo multijazyčnosť sú za €50/funkcia jednorazovo.",
      keywords: ["cena", "pricing", "koľko", "balík", "zahŕňa", "mesačne", "jednorazovo", "prémiové", "funkcie"]
    },
    {
      id: "technical-integration",
      category: "technical",
      title: "Technické možnosti integrácie",
      content: "Chatbot sa dá integrovať s Google Sheets pre správu dát, s CRM systémami pre lead management, s rezervačnými systémami pre objednávky termínov, a s e-mail marketingovými nástrojmi. Podporujeme aj multijazyčný režim a pokročilé vyhľadávanie vo vašej existujúcej databáze.",
      keywords: ["integrácia", "Google Sheets", "CRM", "rezervácie", "multijazyčný", "databáza", "technické", "možnosti"]
    },
    {
      id: "support-maintenance",
      category: "support",
      title: "Podpora a údržba",
      content: "Poskytujeme mesačnú údržbu, aktualizácie chatbota, pridávanie nových otázok a odpovedí, technickú podporu a monitoring výkonu. V prípade problémov sme dostupní počas pracovných hodín (Po-Pia 8:00-17:00, Pia do 16:00).",
      keywords: ["podpora", "údržba", "aktualizácie", "technická podpora", "monitoring", "problém", "pomoc"]
    },
    {
      id: "customization-options",
      category: "customization",
      title: "Možnosti prispôsobenia",
      content: "Každý chatbot vytvárame na mieru podľa vašich potrieb. Môžeme prispôsobiť dizajn, farby, správanie, typ odpovedí, integrácie a funkcionalitu. Chatbot bude hovoriť vaším jazykom a poznať vaše podnikanie.",
      keywords: ["prispôsobenie", "na mieru", "dizajn", "farby", "funkcionalita", "personalizácia", "vlastný"]
    },
    {
      id: "booking-consultation",
      category: "booking",
      title: "Rezervácia konzultácie",
      content: "Môžete si rezervovať bezplatnú konzultáciu cez náš Calendly systém na https://calendly.com/aipoweragency/new-meeting?month=2025-08. Počas konzultácie prediskutujeme vaše potreby, ukážeme demo a navrhneme riešenie presne pre vás.",
      keywords: ["rezervácia", "konzultácia", "Calendly", "stretnutie", "demo", "bezplatné", "poradenstvo"]
    }
  ]
};
