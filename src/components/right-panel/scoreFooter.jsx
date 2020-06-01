import React from "react";
import { Footer } from "../../style.js";
import "../../App.css";

export const ScoreFooter = () => {

    return (
        <>
        <Footer>
            <p className="legend"><button id="box1"></button> Bunches: ## </p>
            <p className="legend"><button id="box2"></button> Gaps: ## </p>
            <p className="legend"><button id="box3"></button> Crowding: ## </p>
        </Footer>
        </>
    )
}