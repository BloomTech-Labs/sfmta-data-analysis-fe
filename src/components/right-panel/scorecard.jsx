import React from "react";
import { connect } from "react-redux";
import { RightFooter } from "./scorecardFooter";
import { ScoreCard, CardTitle, CardContent } from ".../style.js";

const mock = [
  {
    type: "Bus",
    score: 81,
    bunches: 71,
    gaps: 15,
  },
  {
    type: "Rail",
    score: 75,
    bunches: 23,
    gaps: 40,
  },
  {
    type: "Streetcar",
    score: 90,
    bunches: 50,
    gaps: 30,
  }
];

export const Scorecard = (props) => {
    

    return (
      <ScoreCard>
        {mock.map((scores) => {
            <div>
              <CardTitle>
                <h4>{scores.type}</h4>
              </CardTitle>
              <CardContent>
                <h2>{scores.score}%</h2>
                <p>{scores.bunches}</p>
                <p>{scores.gaps}</p>
              </CardContent>
            </div>
        })}
        <RightFooter />
      </ScoreCard>
    );
}