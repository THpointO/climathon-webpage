import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane, FaRedditAlien, FaDribbble } from 'react-icons/fa'

const Challenges = ({ ...props }) => {
    return (
        <div style={{borderTopColor:'#707070', borderTopWidth:1, borderTopStyle:'solid', borderBottomColor:'#707070', borderBottomWidth:1, borderBottomStyle:'solid', width:"90%", marginLeft:'auto', marginRight:'auto'}}>
                <img src={require("../images/challenges@2x.png")} alt="..." style={{ width: "85%", marginLeft: "7%"}} className='challenges-image'></img>
            
            <div className="row challenge-icons" style={{marginLeft: "32.5%", marginTop: "-7%", paddingBottom: "5%"}}>  
                <FaFacebookF size={81} style={{ marginRight: 30 }} />
                <FaTwitter size={83} style={{ marginRight: 30 }} />
                <FaInstagram size={85} style={{ marginRight: 30}} />
                <FaTelegramPlane size={85} style={{ marginRight: 30 }} />
                <FaRedditAlien size={85} style={{ marginRight: 30 }} />  
                <FaDribbble size={83} />
            </div>
            <img src={require("../images/logo28@2x.png")} alt="..." style={{ width: "50%", marginLeft: "25%"}} className="climathon-logo-image"></img>
        </div>
    )
}

export default Challenges