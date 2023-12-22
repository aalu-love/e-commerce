import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVLAS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Gesture-Hand-PNG-Clipart.png"
              alt=""
            />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          {/* <img
            src="https://www.pngall.com/wp-content/uploads/13/Mark-Wahlberg-PNG-Photo.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Mark-Wahlberg-PNG-Photo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
