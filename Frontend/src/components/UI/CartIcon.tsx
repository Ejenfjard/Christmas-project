import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";

const CartIcon = () => {
  const { itemCount } = useCart(); 
  const navigate = useNavigate(); 

  const handleClick = () => {
    // Navigera till CartPage när CartIcon klickas
    navigate("/cart"); 
  };

  useEffect(() => {
    console.log("CartIcon rendered. Current itemCount:", itemCount);
  }, [itemCount]);

  return (
    <StyledCartIcon onClick={handleClick}>
      <FaShoppingCart />
      {itemCount > 0 && <span className="badge">{itemCount}</span>}
    </StyledCartIcon>
  );
};

export default CartIcon;

const StyledCartIcon = styled.div`
  position: relative;
  display: inline-block;
  font-size: 28px;
  cursor: pointer;
  right: 20px;
  top: -10px;

  .badge {
    position: absolute;
    top: -10px;
    right: -20px;
    color: white;
    background-color: red;
    font-size: 15px;
    padding: 4px 6px;
    font-weight: bold;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 40px;
    top: 10px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 60px;
    top: 5px;
  }
`;
