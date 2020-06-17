import React from 'react';
import { connect } from 'react-redux';

function BunchesCard(props) {
    return (
        <div className="metricsbunches metrics">
            <h2 className="title">BUNCHES</h2>
            <h1 className="contentbunches">{props.bunches}</h1>
        </div>



    )
}

const mapStateToProps = state => {
    return {
        bunches: state.report.num_bunches || state.report.bunches
    }
}

export default connect(mapStateToProps, {})(BunchesCard);