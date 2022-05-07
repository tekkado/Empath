import React from 'react';
import ill1 from "./illustrations/analytics.svg";
// import ill2 from "./illustrations/profile.svg";
// import ill3 from "./illustrations/briefcase.svg";
// import ill4 from "./illustrations/travel.svg";
import ContentCard from './ContentCard';


function ContentMini() {
    return (
        <div id="section-two-bottom-content">
            <ContentCard
                illustration={ill1}
                title="Start an online business"
                subtitle="Create a business, whether you've got a fresh idea or are looking for a new way to make money"
            />

            <ContentCard
                illustration={ill1}
                title="Move your business online"
                subtitle="Turn your retail store into an online store and keep serving customers without missing a beat"
            />

            <ContentCard
                illustration={ill1}
                title="Switch to Shopify"
                subtitle="Bring your business to Shopify, no matter which ecommerce platform you're currently using"
            />

            <ContentCard
                illustration={ill1}
                title="Hire a Shopify expert"
                subtitle="Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace"
            />
        </div>
    );
}

export default ContentMini;