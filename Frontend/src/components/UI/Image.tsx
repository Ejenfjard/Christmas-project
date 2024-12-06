import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

type ImageProps = {
  category: string;
  variant: "productDetail" | "productList"; // variant används för att styla bilden beroende på kontext
};

const Image = ({ category, variant }: ImageProps) => {
  const imageMap: { [key: string]: string } = {
    clothing: '/clothing.jpg',
    accessories: '/accessories.jpg',
    toys: '/toys.jpg',
    treats: '/treats.webp',
    decor: '/decor.webp',
  };

  const imageUrl = imageMap[category] || imageMap.default;

  return (
    <StyledImage
      src={imageUrl}
      alt={category}
      $variant={variant} // använd $variant istället för variant
    />
  );
};

export default Image;

const StyledImage = styled.img<{ $variant: "productDetail" | "productList" }>`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;

  ${({ $variant }) => $variant === "productList" && `
    height: 130px; 

   @media (min-width: ${breakpoints.tablet}) {
      height: 200px; /* Tablet */
    }

     @media (min-width: ${breakpoints.desktop}) {
      height: 250px; /* Desktop */
    }

  `}

  ${({ $variant }) => $variant === "productDetail" && `
    height: 300px; 
    width: 100%;

    @media (min-width: ${breakpoints.tablet}) {
      height: 200px; /* Tablet */
      width: 400px; 
    }

     @media (min-width: ${breakpoints.desktop}) {
      height: 250px; /* Desktop */
      width: 400px; 
    }
  `}
`;
