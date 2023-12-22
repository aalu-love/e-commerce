import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="footerlogo.png" alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Officies</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png"
            alt=""
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt=""
          />
        </div>
        <div className="footer-icons-container">
          <img
            src="https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
