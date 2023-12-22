import { useContext } from "react";
import Item from "../Item/Item";
import "./relatedproduct.css";
import { ShopContext } from "../Context/ShopContext";

function RelatedProduct() {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="relatedproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-items">
        {all_product.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
