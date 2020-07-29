import React from 'react';

const AboutPage = ({ ...props }) => {
    return (
        <div className='container-fluid' id='AboutPage' style={{ marginTop: 50 }}>
            <div className="row" >
                <img src={require("../images/Climathon2@2x.png")} alt="" className='col-5 about-img' style={{ marginLeft: 30 }}></img>
                <div className="col-5" style={{ marginLeft: 30 }}>
                    <div className='about-button' >WHAT IS CLIMATHON?</div>
                    <div className='about-text' style={{ marginTop: 30 }}>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</div>
                </div>
            </div>

            <div style={{ marginTop: 100 }} className='blue-design row'>
                <div className="col-5 offset-1">
                    <div className='about-button'>WHY CLIMATHON?</div>
                    <div className='about-text' style={{ marginTop: 30 }}>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</div>
                </div>
                <img src={require("../images/Climathon4@2x.png")} alt="" className='col-5 about-img' style={{ marginLeft: 30,height:350 }}></img>
            </div>
        </div>
    )
}

export default AboutPage