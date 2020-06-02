import React from "react";
import { Footer } from "../../style.js";
import "../../App.css";

export const ScoreFooter = () => {

    return (
        <>
        <Footer className="card-footer">
            <p className="legend"><button id="box1"></button> Bunches: 75% </p>
            <p className="legend"><button id="box2"></button> Gaps: 12% </p>
            <p className="legend"><button id="box3"></button> Crowding: 100% </p>
        </Footer>
        </>
    )
}