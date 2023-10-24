import React from 'react';
import Faq from "react-faq-component";

export default function Faqs() {
    const data = {
        title: "Frequently Asked Questions",
        rows: [
            {
                title: "What is Citizenship?",
                content: `Citizenship is based upon the Constitution of the Federal Republic
                of Nigeria, dated 1989. Those born before or on the date of
                independence, October 1, 1960, whose parents or grandparents were
                born in Nigeria and who were legally residing in Nigeria at the
                time, are considered citizens of Nigeria.`,
            },
            {
                title: "How can one become a citizen of Nigeria?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "What is the obligation of a Citizen?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim.`,
            },
            {
                title: "How do you Vote in Nigeria?",
                content: <p>current version is 1.2.1</p>,
            },
            {
                title: "How can one become a citizen of Nigeria?",
                content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "#0C1359",
        rowTitleColor: "#000000",
        rowContentColor: '333333',
        // rowContentPadding:"100px"
        
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className='faq' style={{paddingTop:"70px", paddingRight:"320px", paddingLeft:"320px"}}>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
