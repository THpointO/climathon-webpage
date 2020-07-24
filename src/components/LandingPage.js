import React from 'react';
import { FaChevronDown } from 'react-icons/fa'


export const LandingPage = ({ ...props }) => {
    return (
        <div className='container-fluid'>
            <img src={require("../images/frontPage1Logo@2x.png")} className="title-image" alt=""></img>
            <div className="landing-main-text" style={{ marginTop: -70 }}>23rd - 25th October <br></br> 2020 Virtual Event</div>
            <div className="landing-sub-text" style={{ marginTop: -5 }}>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.</div>
            <button className="landing-btn">JOIN NOW</button>
            <img src={require("../images/climathonIllustration2@2x.png")} style={{ marginTop: -200 }} className="illustration-image" id="AboutPage" alt=""></img>


            <div className="down" style={{ marginTop: -55 }}>
                <a href='#AboutPage'><FaChevronDown size={30} /></a>
            </div>
        </div>
    )
}

export default LandingPage