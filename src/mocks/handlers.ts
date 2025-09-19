// src/mocks/handlers.ts
import { http, HttpResponse, delay } from "msw";
import cards from "./data/propertyCards.json";

import DXBKTW001 from "./data/propertyDetails/DXBKTW001.json";
import DXBBW002 from "./data/propertyDetails/DXBBW002.json";
import DXBVLL003 from "./data/propertyDetails/DXBVLL003.json";
import DXBKTW004 from "./data/propertyDetails/DXBKTW004.json";
import DXBDWT005 from "./data/propertyDetails/DXBDWT005.json";
import DXBMPL006 from "./data/propertyDetails/DXBMPL006.json";
import DXBBVP007 from "./data/propertyDetails/DXBBVP007.json";
import DXBSKB008 from "./data/propertyDetails/DXBSKB008.json";
import DXBDIFC007 from "./data/propertyDetails/DXBDIFC007.json";
import DXBDIFC008 from "./data/propertyDetails/DXBDIFC008.json";
import DXBDIFC009 from "./data/propertyDetails/DXBDIFC009.json";
import DXBMRN010 from "./data/propertyDetails/DXBMRN010.json";

import DXBBW002_FIN from "./data/propertyFinancials/DXBBW002.json";

// ---- Maps ----
const detailsByCode: Record<string, unknown> = {
  DXBKTW001,
  DXBBW002,
  DXBVLL003,
  DXBKTW004,
  DXBDWT005,
  DXBMPL006,
  DXBBVP007,
  DXBSKB008,
  DXBDIFC007,
  DXBDIFC008,
  DXBDIFC009,
  DXBMRN010,
};

// If you add more financial files later, extend this map.
const financialsByCode: Record<string, unknown> = {
  DXBBW002: DXBBW002_FIN,
};

// ---- Handlers ----
export const handlers = [
  // Property cards
  http.get("/api/property-cards", async () => {
    await delay(250);
    return HttpResponse.json(cards);
  }),

  // Property details by code
  http.get("/api/property-details/:code", async ({ params }) => {
    const { code } = params as { code: string };
    const data = detailsByCode[code];
    await delay(250);
    if (!data) {
      return new HttpResponse(JSON.stringify({ message: "Not found" }), {
        status: 404,
      });
    }
    return HttpResponse.json(data);
  }),

  // Property financials by code
  http.get("/api/property-financials/:code", async ({ params }) => {
    const { code } = params as { code: string };
    await delay(250);
    const payload = financialsByCode[code] ?? DXBBW002_FIN; // fallback
    return HttpResponse.json(payload);
  }),
];
