/** @format */

import axios from "axios";
import { IProduct } from "../models/IProduct"; // Anta att du har en IProduct-modell

export const LoadProducts = async (endpoint: string): Promise<IProduct[]> => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL; // URL till ditt backend
  const url = `${baseUrl}${endpoint}`; // Din endpoint på backend (t.ex. /api/products)

  console.log(`Fetching products from: ${url}`);

  try {
    const result = await axios.get(url);
    console.log("Fetched products:", result.data);

    return result.data.result;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products");
  }
};
