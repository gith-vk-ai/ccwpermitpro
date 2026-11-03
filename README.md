# CCWPermitPro

Pre-sell web pro ccwpermitpro.com: landing page → 6krokový kvíz → personalizované výsledky → affiliate odkaz (kurz concealed carry).
Next.js 16 (App Router, TypeScript, Tailwind 4) exportovaný staticky do `out/` a servírovaný přes Cloudflare Workers static assets.
Stejná kostra jako [languagesup](https://github.com/gith-vk-ai/languagesup).

## Kde co upravit

| Co | Soubor |
| --- | --- |
| Affiliate odkaz, sub-ID | `src/config/affiliate.ts` |
| Meta Pixel / GA4 / GTM ID, consent banner | `src/config/tracking.ts` |
| Otázky a odpovědi kvízu | `src/config/quiz.ts` |
| Texty výsledků (personalizace) | `src/lib/personalize.ts` |
| Kontaktní e-mail, datum právních textů | `src/config/site.ts` |
| Hlavní stránka | `src/app/page.tsx` |
| Barvy | `src/app/globals.css` (tokeny `teal*` = hlavní akcent, teď cihlově červená) |

### Affiliate
Dokud je `liveUrl` prázdné, CTA vede na neaffiliate `previewUrl` (zatím placeholder – doplnit partnera).
Po vložení schváleného affiliate odkazu do `liveUrl` se automaticky používá ten.
`NEXT_PUBLIC_AFFILIATE_MODE=preview` vynutí preview i při vyplněném `liveUrl`.

### Obsah
Texty záměrně neuvádějí konkrétní požadavky jednotlivých států (liší se a mění) a web všude uvádí, že nejde o právní radu.

### Analytika
Události: `PageView`, `QuizStart`, `QuizStepViewed`, `QuizAnswered`, `QuizCompleted`, `ResultsViewed`, `OutboundAffiliateClick`.
Každá nese zachycené UTM / `campaign_id` / `adset_id` / `ad_id` / `fbclid` z první návštěvy v session.

## Vývoj

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statický export do out/
npx wrangler dev   # lokálně servíruje out/ stejně jako Cloudflare
```

## Nasazení (Cloudflare Workers)

Cloudflare při každém pushu do `main` spustí `npx wrangler deploy`. Wrangler si podle `wrangler.jsonc` sám
spustí `npm run build` a nahraje `out/` – build command v dashboardu proto může zůstat prázdný.

Každý push do `main` = nasazení na živý web.
