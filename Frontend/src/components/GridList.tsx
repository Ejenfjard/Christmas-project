import { IProduct } from "../models/IProduct";
import Item from "./Item";
import { breakpoints } from '../styles/breakpoints'; 
import styled from 'styled-components';

type GridListProps = {
    items: IProduct[]; 
}; 

const GridList = ({ items }: GridListProps) => {
    return (
        <GridSection>
        {items.map(item => (
          <Item key={item.id} product={item} />
        ))}
      </GridSection>
    )
}

export default GridList;

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Standard: 1 kolumn för mobiler */
  gap: 16px; /* Avstånd mellan grid-elementen */

  /* För tablet (minst 768px) */
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* 2 kolumner på tablet */
  }

  /* För desktop (minst 1200px) */
  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr); /* 3 kolumner på desktop */
  }
`;