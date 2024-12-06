import { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";


type CardProps = {
  children: ReactNode; 
}

const Card = ({ children }: CardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
}

export default Card;


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Vertikal centrering */
  align-items: center;      /* Horisontell centrering */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
  overflow: hidden;
  padding: 16px;
  

  
  .button-wrapper {
    display: flex;
    justify-content: right;
    width: 100%;
    margin-top: auto; 
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 300px;
    height: auto; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 370px;
    height: auto; 
  }
`;


