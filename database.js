// database.js
// AI Power Knowledge Base - Optimalizovaná databáza pre RAG systém

window.aiPowerData = {
  // Základné firemné informácie
  company: {
    name: "AI Power",
    founded: 2025,
    founder: "Marcel Lehocky",
    location: "Bratislava, Slovensko",
    website: "https://www.aipower.site",
    email: "info@aipower.site",
    phone: "+421 904 603 171",
    calendly: "https://calendly.com/aipoweragency/new-meeting?month=2025-08"
  },
  
  // Pracovné hodiny (zachované pre quick replies)
  workingHours: {
    monday: "8:00–17:00",
    tuesday: "8:00–17:00", 
    wednesday: "8:00–17:00",
    thursday: "8:00–17:00",
    friday: "8:00–16:00",
    weekend: "zatvorené"
  },
  
  // RAG Knowledge Base
  knowledgeBase: [
    {
      id: "chatbot-benefits",
      category: "benefits",
      title: "Výhody AI chatbotov",
      content: "AI chatbot vám poskytne 24+ hodín dostupnosti denne, dokáže generovať 100+ možných leadov a zabezpečiť 1k+ automatizovaných konverzií denne. Konkrétne výhody: Ušetríte čas a peniaze - zamestnanci sa môžu venovať dôležitejším úlohám. Spokojní zákazníci 24/7 - okamžité odpovede kedykoľvek. Menej práce pre tím. Viac predajov - rýchle odpovede = spokojní zákazníci = viac objednávok. Lepšia povesť firmy. Nižšie náklady - jeden chatbot zvládne prácu niekoľkých ľudí.",
      keywords: ["výhody", "benefits", "prečo", "24/7", "leady", "konverzie", "úspora", "spokojnosť", "predaje", "náklady"]
    },
    {
      id: "implementation-process",
      category: "process", 
      title: "Proces implementácie chatbota",
      content: "Celý proces trvá len 3-5 dní: 1) Rezervácia 30-minútového online meetingu, 2) Vytvorenie demo bota s vašimi základnými informáciami (2-4 hodiny), 3) Postupné upravovanie funkcií podľa vašich požiadaviek (iteratívny proces), 4) Finalizácia a testovanie (finálne ladenie), 5) Integrácia na web jedným riadkom kódu <script src='aipower.site/bot/YOUR_ID'></script>. Od prvého kontaktu po funkčný chatbot len za 3-5 dní!",
      keywords: ["proces", "implementácia", "kroky", "ako", "postup", "3-5 dní", "rýchlo", "jednoducho", "demo", "meeting"]
    },
    {
      id: "pricing-details",
      category: "pricing",
      title: "Podrobnosti o cenách a balíkoch",
      content: "Základná verzia za €300 jednorazový poplatok za vytvorenie + €50/mesiac za poskytovanie a hostovanie služby. Ideálne riešenie pre firmy, ktoré chcú okamžitú komunikáciu so zákazníkmi. Zahŕňa: Chatbot na mieru na vašom webe, odpovede na najčastejšie otázky, 24/7 dostupnosť (odpovede mimo pracovnej doby), zber kontaktov a dopytov od zákazníkov, pravidelnú údržbu a drobné úpravy.",
      keywords: ["€300", "€50/mesiac", "základná verzia", "hostovanie", "okamžitá komunikácia", "24/7", "kontakty", "údržba"]
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
    },
    {
      id: "company-info",
      category: "company",
      title: "O spoločnosti AI Power",
      content: "AI Power je slovenská agentúra založená v roku 2025 Marcelom Lehockým. Špecializujeme sa výhradne na tvorbu AI chatbotov na mieru pre rôzne firmy a odvetvia. Sídlime v Bratislave a naša filozofia je ušetriť firmám čas a peniaze prostredníctvom inteligentných chatbotov.",
      keywords: ["o nás", "firma", "spoločnosť", "kto sme", "história", "založená", "Marcel Lehocky", "Bratislava"]
    },
    {
      id: "contact-info",
      category: "contact",
      title: "Kontaktné informácie",
      content: "Môžete nás kontaktovať na telefónnom čísle +421 904 603 171, emailom na info@aipower.site alebo navštívte našu webstránku https://www.aipower.site. Pracujeme Po-Št 8:00-17:00, v piatok 8:00-16:00.",
      keywords: ["kontakt", "telefón", "email", "web", "adresa", "pracovné hodiny", "kedy", "otvorené"]
    },
    {
      id: "services-overview",
      category: "services",
      title: "Naše služby - komplexný prehľad",
      content: "Poskytujeme jedinú službu - tvorbu AI chatbotov na mieru. Základný balík za €300 + €50/mesiac zahŕňa kompletné nastavenie, FAQ, integráciu a údržbu. Dodatočné prémiové funkcie (CRM, Google Sheets, rezervácie, multijazyčnosť) za €50/funkcia. Celý proces od analýzy po spustenie trvá 1-2 týždne.",
      keywords: ["služby", "čo robíme", "ponuka", "balíky", "čo zahŕňa", "kompletný", "prehľad"]
    },
    {
      id: "competitive-advantages",
      category: "advantages",
      title: "Naše konkurenčné výhody",
      content: "Vytvárame chatboty, ktoré hovoria vaším jazykom a poznajú vaše podnikanie. Každý chatbot je na mieru, nie template riešenie. Poskytujeme kompletnú podporu od návrhu po údržbu, slovenský prístup k zákazníkom a rýchlu implementáciu do 2 týždňov.",
      keywords: ["výhody", "prečo my", "na mieru", "slovensky", "rýchlo", "osobný prístup", "nie template"]
    },
    {
      id: "target-clients",
      category: "clients",
      title: "Pre koho sú naše chatboty",
      content: "Naše AI chatboty sú ideálne pre malé a stredné firmy, e-shopy, služby, zdravotnícke zariadenia, realitné kancelárie, právnické firmy a akúkoľvek firmu, ktorá chce zlepšiť zákaznícky servis a ušetriť čas na rutinných otázkach.",
      keywords: ["pre koho", "klienti", "firmy", "e-shop", "služby", "zdravotníctvo", "reality", "právnici"]
    },
    {
      id: "success-stories",
      category: "portfolio",
      title: "Príklady úspešných implementácií",
      content: "Naše chatboty pomohli firmám znížiť počet telefonátov o 60%, zlepšiť dostupnosť zákazníckeho servisu na 24/7 a automatizovať rezervácie termínov. Klienti oceňujú rýchle odpovede a profesionálny prístup našich AI asistentov.",
      keywords: ["úspechy", "výsledky", "príklady", "referencie", "60%", "24/7", "automatizácia", "rezervácie"]
    },
    {
      id: "integration-simplicity",
      category: "technical",
      title: "Jednoduchá integrácia na web",
      content: "Integrácia chatbota na váš web je extrémne jednoduchá - stačí jeden riadok kódu: <script src='aipower.site/bot/YOUR_ID'></script>. Vloženie trvá len 5 minút a chatbot je okamžite funkčný. Nepotrebujete žiadne technické znalosti ani komplikované nastavenia.",
      keywords: ["integrácia", "jednoduché", "jeden riadok", "script", "5 minút", "web", "okamžite", "bez technických znalostí"]
    },
    {
      id: "timeline-speed",
      category: "process",
      title: "Rýchlosť dodania",
      content: "Na rozdiel od konkurencie, ktorá potrebuje týždne alebo mesiace, my dokážeme vytvoriť a spustiť váš AI chatbot za rekordných 3-5 dní. Celý proces je optimalizovaný pre rýchlosť a efektívnosť - od prvého kontaktu po funkčný chatbot na vašej stránke.",
      keywords: ["rýchlo", "3-5 dní", "rekordne", "efektívne", "optimalizované", "konkurencia", "týždne", "mesiace"]
    },
    {
      id: "premium-features-detailed",
      category: "pricing",
      title: "Detailný popis prémiových funkcií",
      content: "Prémiové funkcie za €50/funkcia jednorazovo: 1) Vyhľadávanie vo vašej databáze - bot nájde konkrétne produkty/služby (napr. dostupné autá), 2) Pokročilé integrácie - prepojenie s Google Sheets, CRM, rezervačným systémom, 3) Multijazyčný režim - napr. slovenčina + angličtina, 4) Funkcie podľa vašej potreby - čokoľvek, čo potrebujete pre svoj biznis.",
      keywords: ["prémiové funkcie", "€50", "databáza", "vyhľadávanie", "integrácie", "multijazyčný", "na mieru", "CRM", "Google Sheets"]
    },
    {
      id: "consultation-process",
      category: "booking",
      title: "Ako prebieha konzultácia",
      content: "Konzultácia prebieha formou 30-minútového online hovoru, kde si vypočujeme vaše potreby a predstavíme možnosti AI Power platformy. Počas stretnutia vytvoríme spolu stratégiu pre váš chatbot, prediskutujeme špecifické požiadavky a ukážeme konkrétne príklady. Konzultácia je bezplatná a nezáväzná.",
      keywords: ["konzultácia", "30 minút", "online hovor", "bezplatná", "nezáväzná", "stratégia", "požiadavky", "príklady"]
    },
    {
      id: "company-mission",
      category: "company",
      title: "Naše poslanie a vízia",
      content: "Sme slovenská agentúra špecializujúca sa na tvorbu AI chatbotov na mieru. Naše poslanie je vytvoriť vám inteligentného asistenta, ktorý hovorí vaším jazykom a pozná vaše podnikanie. Veríme, že každý biznis potrebuje AI chatbota pre lepšiu komunikáciu so zákazníkmi a automatizáciu procesov.",
      keywords: ["poslanie", "vízia", "slovenská agentúra", "na mieru", "váš jazyk", "pozná podnikanie", "každý biznis"]
    },
    {
      id: "gdpr-compliance",
      category: "legal",
      title: "GDPR a ochrana údajov",
      content: "Sme plne v súlade s GDPR nariadeniami a zásadami ochrany súkromia. Všetky údaje spracovávame bezpečne a transparentne. Naše chatboty sú navrhnuté s ohľadom na ochranu osobných údajov a súkromie používateľov. Poskytujeme aj newsletter pre najnovšie informácie o AI technológiách.",
      keywords: ["GDPR", "ochrana údajov", "súkromie", "bezpečne", "transparentne", "newsletter", "AI technológie"]
    },
    {
      id: "slovak-focus",
      category: "advantages",
      title: "Zameranie na slovenský trh",
      content: "AI chatboty pre slovenské firmy - personalizované, bezpečné a jednoducho integrovateľné riešenia. Rozumieme špecifikám slovenského trhu, kultúre a jazyku. Poskytujeme osobný prístup a podporu v slovenčine, čo nás odlišuje od medzinárodných konkurentov.",
      keywords: ["slovenské firmy", "slovenský trh", "kultúra", "jazyk", "osobný prístup", "slovenčina", "konkurenti", "medzinárodní"]
    }
  ]
};
