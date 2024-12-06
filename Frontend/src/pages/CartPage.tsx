import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IProduct } from "../models/IProduct";
import styled from "styled-components";
import Image from "../components/UI/Image"; 
import GoBackBtn from "../components/UI/GoBackBtn";
import CardDetails from "../components/UI/CardDetails";  

const CartPage = () => {
  const { products, itemCount } = useContext(CartContext);

  // Om ingen produkt finns i varukorgen, visa ett meddelande
  if (products.length === 0) {
    return <EmptyCartMessage>Din varukorg är tom.</EmptyCartMessage>;
  }

  return (
    <CartPageContainer>
      <CartHeader>Your Cart</CartHeader>

      <ProductList>
        {products.map((product: IProduct) => (
          <ProductItem key={product.id}>
            <ProductDetails>
              <Image category={product.category} variant="productList" />
              <CardDetails
                name={product.name}
                price={product.price}
                quantity={product.quantity ?? 1}
              />
            </ProductDetails>
          </ProductItem>
        ))}
      </ProductList>

      <CartSummary>
        <TotalItems>Total Items: {itemCount}</TotalItems>
        <ButtonWrapper>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
          <GoBackBtn />
        </ButtonWrapper>
      </CartSummary>
    </CartPageContainer>
  );
};

export default CartPage;

// Styled Components
const CartPageContainer = styled.div`
  display: flex; 
  justify-content: center; 
  flex-direction: column;
  align-items: center; 
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const CartHeader = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 24px;
  color: #888;
`;

const ProductList = styled.div`
  margin-bottom: 30px;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const CartSummary = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const TotalItems = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Placera knapparna vertikalt */
  align-items: center; /* Centrerar knapparna */
`;
