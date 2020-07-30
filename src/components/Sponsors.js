import React from 'react';

const Sponsors = ({ ...props }) => {
    return (
        <div>
            <div className='section-button col-3' >SPONSORS</div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="row carousel-item active">
                        <div className="row carousel-images">
                            <img src={require("../images/Image 2@2x.png")} className="hcl d-block" style={{width:"12%"}} alt="..."></img>
                            <img src={require("../images/Image 3@2x.png")} className="avon d-block" style={{width:"15%", height:"10%"}} alt="..."></img>
                            <img src={require("../images/Image 4@2x.png")} className="challenge d-block" style={{width:"15%", height:"10%"}} alt="..."></img>
                            <img src={require("../images/Image 5@2x.png")} className="pro d-block" style={{width:"10%", height:"15%"}} alt="..."></img>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
        )
}

export default Sponsors