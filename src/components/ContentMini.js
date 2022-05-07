import React from 'react';
import ill1 from "./illustrations/youtube-logo.png";
import ill2 from "./illustrations/pablo-book.png";
// import ill3 from "./illustrations/briefcase.svg";
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
                title="Text Reader"
                subtitle="Trouble having a better understanding of what you're reading? Our results can be a guide."
            />

            <ContentCard
                illustration={ill1}
                title="Lorem Ipsum"
                subtitle="Dolor sit amet, consectetur adipiscing elit. Maecenas fringilla vitae orci at viverra. Morbi. "
            />

        </div>
    );
}

export default ContentMini;
