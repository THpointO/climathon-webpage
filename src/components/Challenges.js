import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane, FaRedditAlien, FaDribbble } from 'react-icons/fa'
const Challenges = ({ ...props }) => {
    return (
        <div className='grey-border'>
                <div className="challenge-text" style={{textAlign: 'center', paddingTop: '5%'}}>
                    <div className="challenge-text1" style={{ color: "#8DC33E", fontFamily: 'Roboto', fontSize: 80}}>INTRODUCING THIS YEAR'S</div>
                    <div className="challenge-text2" style={{ color: "#275F92", fontFamily: 'Roboto', fontSize: 160, marginTop: -60}}>CHALLENGES</div>
                    <div className="challenge-text3" style={{ color: "grey", fontFamily: 'Roboto', fontSize: 60, marginTop: -50}}>#ClimaTH0n</div>
                </div>
                
            
            <div className="row" style={{paddingBottom: "5%", display:'flex', justifyContent:"center"}}>  
                <FaFacebookF size={60} style={{ marginRight: 10 }} />
                <FaTwitter size={63} style={{ marginRight: 10 }} />
                <FaInstagram size={65} style={{ marginRight: 10}} />
                <FaTelegramPlane size={65} style={{ marginRight: 10 }} />
                <FaRedditAlien size={65} style={{ marginRight: 10 }} />  
                <FaDribbble size={63} />
            </div>
            <img src={require("../images/logo28@2x.png")} alt="..." style={{ width: "50%", marginLeft: "25%"}} className="climathon-logo-image"></img>

            <div className="map">
                <img src={require("../images/Ireland@2x.png")} alt="..." style={{ width: "13%", marginLeft: "31%"}}></img>
                <img src={require("../images/FInal3DMapIcons.png")} alt="..." style={{ width: "70%", marginLeft: "22%", paddingTop: 80, marginTop: -150}}></img>
            </div>
        </div>
    )
}

export default Challenges