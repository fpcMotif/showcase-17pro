
import React from 'react';

const Footer: React.FC = () => {
    const footerSections = {
        "Shop and Learn": ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
        "Apple Wallet": ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
        "Account": ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
        "Entertainment": ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
        "Apple Store": ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals", "Order Status", "Shopping Help"],
        "For Business": ["Apple and Business", "Shop for Business"],
        "For Education": ["Apple and Education", "Shop for K-12", "Shop for College"],
        "For Healthcare": ["Apple in Healthcare", "Health on Apple Watch"],
        "Apple Values": ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"],
        "About Apple": ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
    };

    return (
        <footer className="footer-container">
            <div className="max-w-screen-xl mx-auto">
                <div className="border-b border-apple-gray-700 pb-8 mb-8">
                    <div className="max-w-3xl">
                        <h4 className="text-sm font-semibold text-apple-white mb-3">Apple Trade In</h4>
                        <p className="text-apple-gray-400 leading-relaxed text-xs">
                            Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                        </p>
                    </div>
                </div>
                
                <div className="footer-grid">
                    {Object.entries(footerSections).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="footer-title">{title}</h3>
                            <ul className="footer-link-list">
                                {links.map(link => (
                                    <li key={link}><a href="#" className="footer-link">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                     <p className="footer-bottom-text">
                        More ways to shop: <a href="#" className="footer-link footer-link-spacing">Find an Apple Store</a> or <a href="#" className="footer-link footer-link-spacing">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </p>
                    <div className="footer-copyright">
                        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                        <div className="footer-legal-links">
                             <a href="#" className="footer-legal-link">Privacy Policy</a>
                             <a href="#" className="footer-legal-link">Terms of Use</a>
                             <a href="#" className="footer-legal-link">Sales and Refunds</a>
                             <a href="#" className="footer-legal-link">Legal</a>
                             <a href="#" className="footer-legal-link">Site Map</a>
                        </div>
                         <a href="#" className="footer-country">United States</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
