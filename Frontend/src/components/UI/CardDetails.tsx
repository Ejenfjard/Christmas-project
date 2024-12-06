import styled from "styled-components"; 
import { breakpoints } from "../../styles/breakpoints"; 

type CardDetailsProps = {
  name: string;
  price: number;
  quantity?: number;
  description?: string;
};

const CardDetails = ({ name, price, quantity, description }: CardDetailsProps) => (
  <StyledCardDetails>
    <ProductDetails>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        {description && <ProductDescription>{description}</ProductDescription>}
        <ProductPrice>${price}</ProductPrice>
        {quantity !== undefined && <ProductQuantity>Quantity: {quantity}</ProductQuantity>}
      </ProductInfo>
    </ProductDetails>
  </StyledCardDetails>
);

export default CardDetails;

const StyledCardDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px; 
  

  @media (min-width: ${breakpoints.tablet}) {
    width: 70%; /* Adjust width for tablets */
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 60%; /* Adjust width for desktops */
  }
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 15px;
  color: #333;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 28px;
  }
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 5px 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const ProductPrice = styled.p`
  font-size: 15px;
  color: red;
  margin: 10px 0;
  font-weight: bold;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }
`;

const ProductQuantity = styled.p`
  font-size: 16px;
  color: #888;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
`;
