import React from "react";
import img from "./shortest-path-img.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const MediaShortestPath = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">Shortest path problem <span className="fw-light p-0 m-0 fs-6">April-2021</span></h5>
                        <p className="card-text">Algorithm using a bottom-up dynamic programming approach to find
                            the shortest path between two cells in a matrix of size n.</p>
                        <p className="card-text"><small className="text-muted">Java, Dynamic Programming</small>
                        </p>
                        <a className="btn btn-outline-primary my-1 mr-1 btn-sm" rel="noopener noreferrer" target="_blank" href="https://github.com/RomainClem/Shortest-Path-Matrix-Fixed-Cost">
                            <FontAwesomeIcon icon={faGithub} /> Repository
                        </a>
                    </div>
                </div>
                <div className="col-4">
                    <img src={img} className="img-fluid media-project" alt="application home page"/>
                </div>
            </div>
        </div>
    )
}

export default MediaShortestPath;