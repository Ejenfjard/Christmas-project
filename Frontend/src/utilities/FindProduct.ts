/** @format */

import axios from "axios";
import { IProduct } from "../models/IProduct";

const FindProduct = async (endpoint: string): Promise<IProduct> => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";
  const url = `${baseUrl}${endpoint}`;

  console.log(`Fetching product from: ${url}`);
  console.log("Base URL:", baseUrl);
  console.log("Full URL:", url);

  try {
    const result = await axios.get(url);
    console.log("Fetched data:", result.data);

    return result.data.result;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Could not fetch the product");
  }
};

export default FindProduct;
