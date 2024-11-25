import GridList from "../GridList";
import { IProduct } from "../../models/IProduct";

type ItemsListProps = {
  items: IProduct[]; 
}; 

const ItemsList = ({ items }: ItemsListProps) => {
  return <GridList items={items} />;
};

export default ItemsList;
 