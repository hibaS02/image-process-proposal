import React from 'react';
import logo from './bau-logo.jpg';


const CoverPage = () => {
    return (
        <div className="CoverPage">
            <img src={logo} className="CoverPage-logo" alt="Logo"></img>
            <h2 className="CoverPage-title">Presented to: </h2>
            <p className="lama"> Dr. Lama Affara</p>
            <h2 className="CoverPage-doneBy-title">Done By: </h2>
            <div className="CoverPage-list">
                <p className="hiba">Hiba Soubra 202101347</p>
                <p className="ds">Karim Deiss 202101302</p>
                <p className="jad">Jad Hussein 202103040</p>
            </div>

        </div>
    );
}

export default CoverPage;