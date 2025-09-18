import { http, HttpResponse, delay } from "msw";

import DXBBW002 from "./data/propertyDetails/DXBBW002.json";
// If you add more:

const detailsByCode: Record<string, unknown> = {
  DXBBW002,
};

export const handlers = [
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
];
