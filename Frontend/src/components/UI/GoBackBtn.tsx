import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1); 
    };
  
    return (
      <StyledButton onClick={handleGoBack}>
        <FaArrowLeft />
        <span>Back</span>
      </StyledButton>
    );
  };

export default GoBackBtn

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 18px;
  }
`;