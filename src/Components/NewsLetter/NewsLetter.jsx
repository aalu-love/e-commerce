import "./newsletter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusiove Offer On Your Email</h1>
      <p>Subscribe to out newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
