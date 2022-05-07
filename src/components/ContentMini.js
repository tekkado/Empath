import React from 'react';
import ill1 from "./illustrations/online-life.png";
import ill2 from "./illustrations/pablo-book.png";
import ill3 from "./illustrations/womangraphs.png";
// import ill4 from "./illustrations/travel.svg";
import ContentCard from './ContentCard';


function ContentMini() {
    return (
        <div id="section-two-bottom-content">
            <ContentCard
                illustration={ill1}
                title="YouTube"
                subtitle="Want to quickly figure out what kind of reaction a video received? We got it for you!"
            />

            <ContentCard
                illustration={ill2}
                title="Language Guide"
                subtitle="Trouble having a better understanding of what you're reading? Our results can be a guide."
            />

            <ContentCard
                illustration={ill3}
                title="Business"
                subtitle="Helpful for businesses to detect sentiment in social data, and understand customers better."
            />

        </div>
    );
}

export default ContentMini;
