# AI Power Chatbot s RAG systémom

## Popis
Inteligentný chatbot s implementovaným RAG (Retrieval-Augmented Generation) systémom pre lepšie odpovede založené na firemnej databáze znalostí.

## Implementované funkcie

### 1. RAG (Retrieval-Augmented Generation)
- **Sémantické vyhľadávanie** v databáze znalostí
- **Kontextové odpovede** na základe relevantných informácií
- **Skórovanie relevancie** pre presnejšie výsledky
- **Automatické pridávanie zdrojov** k odpovediam

### 2. Databáza znalostí
- Výhody AI chatbotov
- Proces implementácie
- Cenové informácie
- Technické integrácie
- Podpora a údržba
- Možnosti prispôsobenia
- Rezervácia konzultácií

### 3. Rozšírené funkcie
- **Quick replies** pre časté otázky
- **Normalizácia slovenského textu** (odstránenie diakritiky)
- **Fallback mechanizmy** pre chybové stavy
- **Debug režim** pre testovanie

## Súbory

```
├── index.html          # Hlavný chatbot widget
├── database.js         # Firemná databáza + knowledge base
├── rag-system.js       # RAG algoritmus a vyhľadávanie
├── api/chat.js         # API endpoint s RAG podporou
├── rag-test.html       # Test stránka pre RAG systém
└── chatbot-widget.js   # Widget pre vkladanie na weby
```

## Testovanie RAG systému

1. Otvor `rag-test.html` v prehliadači
2. Skontroluj konzolu pre debug informácie
3. Otestuj rôzne typy otázok:
   - "Koľko stojí chatbot?"
   - "Aké sú výhody AI chatbotov?"
   - "Ako prebieha implementácia?"

## Spustenie v development

```bash
# Lokálny development server
vercel dev

# Alebo jednoducho otvor index.html v prehliadači
```

## Ako RAG funguje

1. **Vstup**: Používateľ zadá otázku
2. **Quick replies**: Kontrola rýchlych odpovedí
3. **RAG search**: Vyhľadávanie v knowledge base
4. **Skórovanie**: Výpočet relevancie každého záznamu
5. **Kontext**: Vytvorenie kontextu pre AI model
6. **API call**: Odoslanie dotazu s kontextom na AI
7. **Odpoveď**: Vrátenie odpovede so zdrojmi

## Rozšírenie knowledge base

Pre pridanie nových informácií do `database.js`:

```javascript
{
  id: "unique-id",
  category: "category-name", 
  title: "Názov informácie",
  content: "Detailný obsah informácie...",
  keywords: ["kľúčové", "slová", "pre", "vyhľadávanie"]
}
```

## API Environment variables

V `.env.local`:
```
API_KEY=your_together_ai_api_key
```

## Monitoring a Analytics

RAG systém loguje:
- Vyhľadávacie dotazy a výsledky
- Skóre relevancie
- Použité zdroje
- Performance metriky

Pozri konzolu prehliadača pre debug informácie.