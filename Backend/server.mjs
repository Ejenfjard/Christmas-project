/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Startar upp tillgång till .env-filens konfiguration
dotenv.config();

//Globala variabler
const PORT = process.env.PORT || 5010;

// Hårdkodad array med produkter
const products = [
  {
    id: 1,
    name: "Santa's Favorite Sweater",
    description:
      "A cozy red sweater featuring Santa's cheerful face and a festive pattern.",
    price: 399,
    imageUrl: "images/product.png",
  },
  {
    id: 2,
    name: "Reindeer Knit Sweater",
    description:
      "A warm green sweater with a playful reindeer design and snowflakes.",
    price: 349,
    imageUrl: "images/product.png",
  },
  {
    id: 3,
    name: "Ugly Christmas Sweater",
    description:
      "A fun and colorful sweater with a chaotic mix of Christmas patterns.",
    price: 299,
    imageUrl: "images/product.png",
  },
  {
    id: 4,
    name: "Snowy Night Sweater",
    description:
      "A navy blue sweater with a serene snowy landscape and Christmas trees.",
    price: 429,
    imageUrl: "images/product.png",
  },
  {
    id: 5,
    name: "Festive Penguin Sweater",
    description:
      "A light blue sweater featuring an adorable penguin wearing a Santa hat.",
    price: 359,
    imageUrl: "images/product.png",
  },
  {
    id: 6,
    name: "Christmas Lights Sweater",
    description:
      "A vibrant sweater with a string of colorful Christmas lights woven into the design.",
    price: 379,
    imageUrl: "images/product.png",
  },
  {
    id: 7,
    name: "Jingle Bells Sweater",
    description:
      "A red and white sweater with bells attached, jingling as you move.",
    price: 399,
    imageUrl: "images/product.png",
  },
  {
    id: 8,
    name: "Polar Bear Sweater",
    description:
      "A cozy white sweater featuring a smiling polar bear in a festive scarf.",
    price: 369,
    imageUrl: "images/product.png",
  },
  {
    id: 9,
    name: "Merry Elf Sweater",
    description:
      "A green sweater with an elf costume design, complete with a belt and buttons.",
    price: 389,
    imageUrl: "images/product.png",
  },
  {
    id: 10,
    name: "Holiday Cheer Sweater",
    description:
      "A cheerful sweater with candy canes, snowflakes, and mistletoe patterns.",
    price: 319,
    imageUrl: "images/product.png",
  },
];

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
app.get("/api/products/:id", (req, res) => {
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
