import React from 'react';


const Overview = () => {
    return (
        <div className="overview">
            <h2 className="overview-title">Main Idea</h2>
            <p className="overview-desc">
                We want to implement a filter that smooths out images reduces noise yet preserves the edges. The replacement of intensities of pixels with weighted average of intensity values from nearby pixels creates the smooth effect and preserves those sharp edges.            </p>
        </div>
    );
}

export default Overview;