
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FindProduct from '../utilities/FindProduct';
import { IProduct } from '../models/IProduct';
import Image from '../components/UI/Image';
import CardDetails from '../components/UI/CardDetails';
import DetailCard from '../components/UI/DetailCard';
import AddToCartBtn from '../components/UI/AddToCartBtn';
import GoBackBtn from '../components/UI/GoBackBtn'; 



const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) throw new Error("No product ID provided.");
        const fetchedProduct = await FindProduct(`/products/${id}`);
        setProduct(fetchedProduct);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <DetailCard>
      <div className="box1">
        <Image category={product.category} variant="productDetail" />
        <CardDetails name={product.name} description={product.description} price={product.price} />
      </div>
      <div className="box2">
        <AddToCartBtn $showText={true} product={product}/>
      </div>
      <GoBackBtn/>
    </DetailCard>
  );
}

export default ProductPage;


