/** @format */

import express, { Request, Response } from "express";
import { christmasProducts } from "./data/christmasProducts"; // Importera mock-data

const app = express();
const port = 3000;

app.get("/api/products", (req: Request, res: Response) => {
  res.json(christmasProducts); // Använd mock-data
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = christmasProducts.find((p) => p.id === Number(id)); // Hitta produkt med specifikt ID

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Produkt hittades inte" });
  }
});

app.listen(port, () => {
  console.log(`Servern är igång på http://localhost:${port}`);
});
