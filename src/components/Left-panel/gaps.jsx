import React from 'react'
import { connect } from 'react-redux';

function GapsCard(props) {
    return (

        <div className="metricsgaps">
            <h2 className="title">GAPS</h2>
            <h1 className="contentgaps">{props.gaps}</h1>
        </div>


    )
}

const mapStateToProps = state => {
    return {
        gaps: state.report.num_gaps || state.report.gaps
    }
}

export default connect(mapStateToProps, {})(GapsCard);