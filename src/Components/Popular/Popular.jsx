import { useContext } from "react";
import Item from "../Item/Item";
import "./popular.css";
import { ShopContext } from "../Context/ShopContext";

function Popular() {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {!!all_product.length &&
          all_product?.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
      </div>
    </div>
  );
}

export default Popular;
