import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane, FaRedditAlien, FaDribbble } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

const Challenges = ({ ...props }) => {
    const [show, showPopUp] = useState(false)
    const [Country, setCountry] = useState("")
    const [ImagePath, setImagePath] = useState("Ireland@2x")

    return (
        <div className='grey-border'>
            <div className="challenge-text" style={{ textAlign: 'center', paddingTop: '5%' }}>
                <div className="challenge-text1" style={{ color: "#8DC33E", fontFamily: 'Roboto', fontSize: 80 }}>INTRODUCING THIS YEAR'S</div>
                <div className="challenge-text2" style={{ color: "#275F92", fontFamily: 'Roboto', fontSize: 160, marginTop: -60 }}>CHALLENGES</div>
                <div className="challenge-text3" style={{ color: "grey", fontFamily: 'Roboto', fontSize: 60, marginTop: -50 }}>#ClimaTH0n</div>
            </div>


            <div className="row" style={{ paddingBottom: "5%", display: 'flex', justifyContent: "center" }}>
                <FaFacebookF size={60} style={{ marginRight: 10 }} />
                <FaTwitter size={63} style={{ marginRight: 10 }} />
                <FaInstagram size={65} style={{ marginRight: 10 }} />
                <FaTelegramPlane size={65} style={{ marginRight: 10 }} />
                <FaRedditAlien size={65} style={{ marginRight: 10 }} />
                <FaDribbble size={63} />
            </div>
            <img src={require("../images/logo28@2x.png")} alt="..." style={{ width: "50%", marginLeft: "25%" }} className="climathon-logo-image"></img>

            <div style={{ width: '100%' }}>
                <img src={require("../images/Ireland@2x.png")} alt="..." className='irland-flag'
                    onClick={() => (
                        showPopUp(true),
                        setCountry("Irland"),
                        setImagePath('Ireland@2x')
                    )}
                ></img>
                <img src={require("../images/scottish-crest@2x.png")} alt="..." className='scottish-flag'
                onClick={() => (
                    showPopUp(true),
                    setCountry("Scotland"),
                    setImagePath('scottish-crest@2x')
                )}
                ></img>
                <img src={require("../images/FInal3DMapIcons.png")} alt="..." className='map' ></img>
                <img src={require("../images/Wales@2x.png")} alt="..." className='wales-flag'
                onClick={() => (
                    showPopUp(true),
                    setCountry("Wales"),
                    setImagePath('Wales@2x')
                )}
                ></img>
                <img src={require("../images/assetE@2x.png")} alt="..." className='england-flag'
                onClick={() => (
                    showPopUp(true),
                    setCountry("England"),
                    setImagePath('assetE@2x')
                )}
                ></img>
            </div >

            <Modal
                show={show}
                size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <div onClick={() => (
                    showPopUp(false))}>X</div>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <img src={require(`../images/${ImagePath}.png`)} style={{height:100}}></img>
                    <div style={{ fontSize: 50 }}> {Country} </div>
                    <div style={{ fontFamily: 'Roboto', fontWeight: 'Regular' }}> Challenge 2: Air Pollution from Particulate Matter </div>
                    <div style={{ fontSize: 20 }}> Challenge </div>
                    <div style={{ fontSize: 20, padding: 20 }}>
                        The challenge is to create a marketing plan for businesses currently in and
                        around London who are using diesel engines in their supply chains. What can
                        be done to encourage an economically and environmentally sustainable switch
                        to electric vehicles?
                    </div>
                </Modal.Body>
            </Modal>

        </div >
    )
}


export default Challenges