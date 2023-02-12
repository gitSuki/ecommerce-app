import "./Footer.css";

const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>Store Name</h2>
            </div>
            <div className="link-section">
                <ul>
                    <li>
                        <a className="section-title">Abous Us</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Careers</a>
                    </li>
                    <li>
                        <a className="section-subtitle">Press Center</a>
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
                        <a className="section-subtitle">Refund Policy</a>
                    </li>
                </ul>
                <ul>
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
            <hr></hr>
            <div>
                <div>
                    <p>Desc Title</p>
                    <p>Desc Content</p>
                </div>
                <div>
                    <p>Download on the app store</p>
                </div>
            </div>
            <div>
                <div>
                    <a>Privacy</a>
                    <a>Security</a>
                    <a>Cookies</a>
                    <a>Legal</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
