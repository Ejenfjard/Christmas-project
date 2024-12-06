import { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type DetailCardProps = {
  children: ReactNode;
}

const DetailCard = ({ children }: DetailCardProps) => {
  return (
    <StyledDetailCard>
      {children}
    </StyledDetailCard>
  );
}

export default DetailCard;

const StyledDetailCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 15px; 

  

  .box1 {
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 20px;
    flex-shrink: 0; 
    width: auto;
  }

  .box1 img {
      flex-grow: 2; 
      max-width: 100%; 
      height: auto; 
    }


  

  .box2 {
    display: flex;
    justify-content: flex-end; 
    margin-top: 20px; 
  }

  @media (min-width: ${breakpoints.tablet}) {
   
    .box1 {
      display: flex;
      flex-direction: row; 
      align-items: flex-center; 
      width: 100%; 
      
      margin: 50px 50px 0px 50px; 
    }

    .box1 img {
      flex-grow: 2; 
      max-width: 100%; 
      height: auto; 
      
      
    }

    .cardDetails {
      flex-grow: 1; 
      margin-left: 20px; 
    }

    .box2 {
      margin-top: 0; 
      width: auto; 
      margin-left: 600px;
    }
  }
  

  @media (min-width: ${breakpoints.desktop}) {
    
   

    .box1 {
      display: flex;
      flex-direction: row; 
      align-items: flex-center; 
      width: 100%; 
    }

    .box1 img {
      flex-grow: 2; 
      max-width: 100%; 
      height: auto; 
    }

    .cardDetails {
      flex-grow: 1; 
      margin-left: 20px; 
    }

    .box2 {
      margin-top: 0; 
      width: auto; 
      margin-left: 600px;
    }
  }
`;
