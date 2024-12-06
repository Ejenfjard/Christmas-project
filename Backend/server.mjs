/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./data.json" assert { type: "json" };

// Startar upp tillgång till .env-filens konfiguration
dotenv.config();

//Globala variabler
const PORT = process.env.PORT || 5010;

// Få tag i expressapplikationen
const app = express();

// Aktivera middleware
app.use(cors());
app.use(express.json());

//Endpoints...
app.get("/api/products", (req, res) => {
  res.status(200).json({ success: true, result: products });
});

// Hämta en produkt baserat på ID
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  res.status(200).json({ success: true, result: product });
});

// Startar upp servern och lyssnar på anrop..
app.listen(5001, () =>
  console.log(`Servern är startad och lyssnar på port: ${PORT}`)
);
