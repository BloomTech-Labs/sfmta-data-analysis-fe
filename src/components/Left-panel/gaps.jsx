import React from 'react'
import { connect } from 'react-redux';
import { Hover } from '../hover';

export function GapsCard(props) {
    return (

        <div className="metricsgaps">
            <Hover sentence={'The total number of route gaps that appeared throughout the day, A gap occurs when a stop isnt being served as often as planned'} />
            <h2 className="title">Gaps</h2>
            <h1 className="contentgaps">{props.gaps}%</h1>
        </div>


    )
}

const mapStateToProps = state => {
    return {
        gaps: state.report.gapped_percentage || state.report.gapped_percengage
    }
}

export default connect(mapStateToProps, {})(GapsCard);