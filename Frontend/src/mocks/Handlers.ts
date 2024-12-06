/** @format */

import { http, HttpResponse } from "msw";

// Definiera mock API-anropet
export const handlers = [
  http.get("http://localhost:5001/api/products", () => {
    return HttpResponse.json({
      success: true,
      result: [
        {
          id: 1,
          name: "Santa clothing for Dogs",
          price: 199,
          category: "clothing",
          description:
            "This cozy Santa costume for your dog is perfect for spreading holiday cheer! Made with soft, comfortable materials, it features the classic red and white design of Santa’s outfit.",
        },
      ],
    });
  }),
];
