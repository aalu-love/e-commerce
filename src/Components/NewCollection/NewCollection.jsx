import { useContext } from "react";
import Item from "../Item/Item";
import "./newcollection.css";
import { ShopContext } from "../Context/ShopContext";

function NewCollection() {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {all_product.map((collection, i) => {
          return <Item key={i} item={collection} />;
        })}
      </div>
    </div>
  );
}

export default NewCollection;
