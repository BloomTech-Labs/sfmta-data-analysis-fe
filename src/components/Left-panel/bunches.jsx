import React from 'react';
import { connect } from 'react-redux';
import { Hover } from '../hover';

export function BunchesCard(props) {
    return (
        <div className="metricsbunches metrics">
            <Hover sentence={'Define bunches on the route as areas where vehicles get too close to each other through the day, measured at every stop'} />
            <h2 className="title">Bunches</h2>
            <h1 className="contentbunches">{props.bunches}%</h1>
        </div>



    )
}

const mapStateToProps = state => {
    return {
        bunches: state.report.bunched_percentage
    }
}

export default connect(mapStateToProps, {})(BunchesCard);