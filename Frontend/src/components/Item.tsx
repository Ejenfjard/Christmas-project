import { IProduct } from "../models/IProduct"; 
import styled from 'styled-components';

type ItemProps = {
    product: IProduct; 
};


const Item = ({ product }: ItemProps) => {

    

  return (
    <ProductCard>
    <ProductInfo>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price} SEK</p>
    </ProductInfo>
    <ProductImage src="/xmasImage.jpg" alt="Julprodukt" />
</ProductCard>
  ); 
}; 




export default Item; 

// Definiera en Styled Component för produktkortet
const ProductCard = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  align-items: center; /* Vertikal centrering */
  justify-content: center; /* Horisontell centrering */
  background-color: #f9f9f9; /* Bakgrund för kontrast */
`;

const ProductInfo = styled.div`
  text-align: center;
  padding: 8px;
`;

const ProductImage = styled.img`
  width: 70%;
  height: 50%;
  object-fit: cover;
`;