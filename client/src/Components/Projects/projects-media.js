import React from "react";
import MediaCovid19 from "./medias/covid19/covid19";
import MediaBottomUp from "./medias/bottom-up/bottom-up";
import MediaShortestPath from "./medias/shortest-path/shortest-path";
import MediaTwitterBot from "./medias/twitter-bot/twitter-bot";
import MediaPersonalWebsite from "./medias/personal-website/personal-website";
import MediaAuthenticationWebsite from "./medias/authentication-website/authentication-website";
import MediaEnvironmentalWebsite from "./medias/environmental-website/environmental-website";
import MediaAliceWebsite from "./medias/alice-website/alice-website";
import MediaSuperheroList from "./medias/superhero-list/superhero-list";

const ProjectsMedia = (props) => {
    return (
        <ul className="media ">
            <li className="filter-item web">
                <MediaPersonalWebsite isoArrange={props.isoArrange}/>
            </li>
            <li className="filter-item java">
                <MediaCovid19 isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item python">
                <MediaTwitterBot isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item java">
                <MediaBottomUp isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item java">
                <MediaShortestPath isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item web">
                <MediaAuthenticationWebsite isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item web">
                <MediaEnvironmentalWebsite isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item web">
                <MediaAliceWebsite isoArrange={props.isoArrange}  />
            </li>
            <li className="filter-item python">
                <MediaSuperheroList isoArrange={props.isoArrange}  />
            </li>
        </ul>
    )
}

export default ProjectsMedia;