import { useState, useEffect } from "react"; 
import { IProduct } from "../models/IProduct";
import { LoadProducts } from "../utilities/LoadProducts";

import ItemsList from "../components/UI/ItemsList";
import React from "react";


const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([]); // Här använder vi en array för produkterna
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);  
   
  


  useEffect(() => {
    loadProducts(); 
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true); // Sätt loading till true innan hämtning
      const data = await LoadProducts('/api/products'); // Ladda produkterna
      setProducts(data); // Sätt produkterna i state
    } catch (error) {
      console.error("Error loading products:", error);
      setError("Kunde inte ladda produkterna."); // Felmeddelande
    } finally {
      setLoading(false); // Sätt loading till false efter hämtning
    }
  };
      

  if (loading) {
    return <div>Laddar produkter...</div>; // Visa laddningsindikator
  }

  if (error) {
    return <div>{error}</div>; // Visa felmeddelande
  }
  
    

    return (
      <div>
        <ItemsList items={products}/>
      </div>
    );
  };
  
  export default HomePage;


