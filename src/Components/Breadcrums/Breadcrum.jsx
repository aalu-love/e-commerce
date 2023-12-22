import "./breadcrum.css";

function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME
      <span>/</span>
      SHOP
      <span>/</span>
      {product.category}
      <span>/</span>
      {product.name}
    </div>
  );
}

export default Breadcrum;
