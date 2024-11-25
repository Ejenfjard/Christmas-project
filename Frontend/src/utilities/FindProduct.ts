/** @format */

import axios from "axios";
import { IProduct } from "../models/IProduct";

export const FindProduct = async (endpoint: string): Promise<IProduct> => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL; // Bas-URL till ditt backend
  const url = `${baseUrl}${endpoint}`; // Fullständig URL till endpointen

  console.log(`Fetching product from: ${url}`);
  
  try {
    const result = await axios.get(url);
    console.log("Fetched data:", result.data);

    return result.data; // Returnera produkten som hämtades
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Could not fetch the product");
  }
};
