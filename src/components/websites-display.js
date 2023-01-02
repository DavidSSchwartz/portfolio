import React from 'react';
import MyDay from '../images/MyDay.png';

const WebsitesDisplay = () => {
    const wesbitesData = [
        {
            url: "https://heuristic-hypatia-e176f8.netlify.app/",
            name: "Space X Falcon Launches",
            madeWith: "React, SpaceX API",
            description: "Displaying data pulled from SpaceX API, with ability to search and sort.",
        },
        {
            url: "https://sweet-naiad-ba9214.netlify.app",
            name: "Pokemon Almanac",
            madeWith: "Next, React Scroll Parallax",
            description: "Next application pulling data from Pokemon API displaying use of Parallax scrolling technique.",
        },
        {
            url: "https://keen-archimedes-4b402f.netlify.app",
            name: "List of Donors",
            madeWith: "React, Redux, Sass",
            description: "Using Redux for state management, and Flex and Grid for styling, display of donors with the ability to add, sort, and search.",
        },
        {
            url: MyDay,
            name: "MyDay",
            madeWith: "React, TailWind",
            description: "Gratitude Journal made with React from scratch and utilizing TailWind for styles.  User has the ability to change the background based on provided images and the color pallete of the display.  All data is saved in local storage so that on reload, data appears as expected.",
            githubURL: "https://github.com/DavidSSchwartz/MyDay"
        }
    ]

    const iframesGrid = wesbitesData.map(data => {
        return (
            <div className="single-website-display-container">
                {data.githubURL ?
                    <a href={data.url}><img src={data.url} /></a>
                    :
                    <iframe src={data.url} title={data.name} />
                }
                <h6><a href={data.githubURL ? data.githubURL: data.url}>{data.name}</a></h6>
                <span className="website-build-tools">{data.madeWith}</span>
                <span className="website-description">{data.description}</span>
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