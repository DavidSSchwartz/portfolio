import React from 'react';
import MyDay from '../images/MyDay.png';

const WebsitesDisplay = () => {
    const wesbitesData = [
        {
            url: "https://heuristic-hypatia-e176f8.netlify.app/",
            name: "Space X Falcon Launches",
            madeWith: "React, SpaceX API",
            description: "desc1",

        },
        {
            url: "https://pokemon-almanac.herokuapp.com/",
            name: "Pokemon Almanac",
            madeWith: "Next, React Scroll Parallax",
            description: "desc2",

        },
        {
            url: "https://keen-archimedes-4b402f.netlify.app",
            name: "List of Donors",
            madeWith: "React, Redux, Sass",
            description: "desc3",

        },
        {
            url: MyDay,
            name: "MyDay",
            madeWith: "React, TailWind",
            description: "desc3",

        }
    ]

    const iframesGrid = wesbitesData.map(data => {
        return (
            <div className="single-website-display-container">
                <iframe src={data.url} title={data.name} />
                <h6><a href={data.url}>{data.name}</a></h6>
                <span>{data.madeWith}</span>
                <span>{data.description}</span>
            </div>
        )
    })

    return (
        <div>
            <h2 className="websites-display-title">Sample Websites</h2>
            <div className="websites-display-container">
                {iframesGrid}
            </div>
        </div>
    )
}

export default WebsitesDisplay;