import React from 'react';
import { MetricFoot } from ".../style.js";
import ".../App.css";

export const RightFooter = () => {
    return (
        <MetricFoot>
            <div><p><span className="box1"></span>Metric1</p></div>
            <div><p><span className="box2"></span>Metric2</p></div>
            <div><p><span className="box3"></span>Metric3</p></div>
        </MetricFoot>
    )
};