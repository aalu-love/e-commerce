import Hero from "../Hero/Hero";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";
import Offers from "../Offers/Offers";
import Popular from "../Popular/Popular";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}

export default Shop;
