
import { IProduct } from "../models/IProduct"; 
import AddToCartBtn from "./UI/AddToCartBtn";
import Card from "./UI/Card";
import CardDetails from "./UI/CardDetails";
import Image from "./UI/Image";
import { Link } from "react-router-dom";


type ItemProps = {
  product: IProduct; 
};

const Item = ({ product }: ItemProps) => {
  return (
    <Card>
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Image category={product.category} variant="productList" />
        <CardDetails name={product.name} price={product.price} />
        <div className="button-wrapper">
        <AddToCartBtn $showText={false} product={product}/>
        </div>
      </Link>
    </Card>
  );
};

export default Item;






