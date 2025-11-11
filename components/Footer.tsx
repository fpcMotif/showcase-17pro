
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
        <footer className="bg-[#1d1d1f] text-gray-400 text-xs py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="border-b border-gray-700 pb-8 mb-8">
                     <p>
                        Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {Object.entries(footerSections).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-white mb-3">{title}</h3>
                            <ul className="space-y-2">
                                {links.map(link => (
                                    <li key={link}><a href="#" className="hover:underline">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6">
                     <p className="mb-4">
                        More ways to shop: <a href="#" className="text-blue-500 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-500 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
                        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                             <a href="#" className="hover:underline">Privacy Policy</a>
                             <a href="#" className="hover:underline">Terms of Use</a>
                             <a href="#" className="hover:underline">Sales and Refunds</a>
                             <a href="#" className="hover:underline">Legal</a>
                             <a href="#" className="hover:underline">Site Map</a>
                        </div>
                         <a href="#" className="mt-4 md:mt-0 hover:underline">United States</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
