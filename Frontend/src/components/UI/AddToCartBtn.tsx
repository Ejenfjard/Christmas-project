import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useCart } from "../../hooks/useCart";
import { IProduct } from "../../models/IProduct";
import { breakpoints } from "../../styles/breakpoints";

type AddToCartBtnProps = {
  $showText?: boolean;
  product: IProduct; 
};

const AddToCartBtn = ({ $showText = false, product }: AddToCartBtnProps) => {
  const { addItemToCart } = useCart();

  const handleClick = () => {
    console.log("Button clicked for product:", product); // Kontrollera att detta loggas
    addItemToCart(product); 
  };

  return (
    <StyledButton $showText={$showText} onClick={handleClick} role="button">
      <CartIcon />
      {$showText && <span>Add to Cart</span>}
    </StyledButton>
  );
};

export default AddToCartBtn;



const StyledButton = styled.button<{ $showText: boolean }>`
  width: ${(props) => (props.$showText ? "auto" : "50px")};
  background-color: #357029;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #274B20;
  }

  &:active {
    background-color: #173611;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    display: ${(props) => (props.$showText ? "inline" : "none")};
  }

  @media (min-width: ${breakpoints.tablet}) {
    span {
      display: ${(props) => (props.$showText ? "inline" : "none")};
    }
    padding: 15px 15px;
    width: auto;
  }

  @media (min-width: ${breakpoints.desktop}) {
    span {
      display: ${(props) => (props.$showText ? "inline" : "none")};
    }
    padding: 15px 15px;
    width: auto;
  }
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 20px;
  margin-left: 5px; 

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 25px;
  }
`;
