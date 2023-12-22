import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Item/Item";
import "./CSS/shop-category.css";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img
            src="https://static.thenounproject.com/png/1123247-200.png"
            alt=""
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
