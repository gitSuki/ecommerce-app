import appleStore from "../assets/appstorebadge.svg";
import googlePlay from "../assets/googleplaybadge.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "./Footer.css";

const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="title">
                <h2>Store Name</h2>
            </div>
            <div className="link-section">
                <ul>
                    <li>
                        <a className="section-title">Company</a>
                    </li>
                    <li>
                        <a className="section-subtitle">About Us</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Careers</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Blog</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a className="section-title">Support</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Help Center</a>
                    </li>
                    <li>
                        <a className="section-subtitle">FAQ</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Refund Policy</a>
                    </li>
                </ul>
                <ul className="section4">
                    <li>
                        <a className="section-title">Contact Us</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Affiliates</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Partnerships</a>
                    </li>
                </ul>
            </div>
            <hr className="divider"></hr>
            <div className="info-section">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                        {" "}
                        Fusce tellus dui, rutrum nec nunc cursus, volutpat euismod sapien. Sed ultricies urna eu
                        suscipit congue. Nulla facilisi. Nam ullamcorper feugiat mauris in efficitur. Praesent sagittis
                        nulla nisl, eget luctus diam rhoncus non. Nulla eget urna at turpis tempor volutpat. Ut nec
                        euismod leo.
                    </p>
                </div>
                <div className="info-app">
                    <img className="app-link" src={appleStore} alt="Apple App Store Logo" />
                    <img className="app-link" src={googlePlay} alt="Google Play Logo" />
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-links">
                    <a>Privacy</a>
                    <a>Security</a>
                    <a>Cookies</a>
                    <a>Legal</a>
                </div>
                <div className="bottom-social-media">
                    <img className="social-media" src={twitter} alt="Twitter Logo" />
                    <img className="social-media" src={instagram} alt="Instagram Logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
