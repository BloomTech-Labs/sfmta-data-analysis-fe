import React from "react";
import { Footer } from "../../style.js";
// import "../../App.css";

export const ScoreFooter = () => {

    return (
        <Footer className="card-footer">
            <p className="legend"><button className="box box1"></button> Bunches: 75% </p>
            <p className="legend"><button className="box box2"></button> Gaps: 12% </p>
            <p className="legend"><button className="box box3"></button> Crowding: 100% </p>
        </Footer>
    )
}