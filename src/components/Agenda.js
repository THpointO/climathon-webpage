import React from 'react';

const AboutPage = ({ ...props }) => {
    return (
        <div className='grey-border' style={{marginBottom:"3%"}}>
            <div className='section-button col-3' >AGENDA</div>
            <div className='row'>
                <div className='col-5' style={{marginLeft:'5%'}}>
                    <div>
                        <div className='agenda-title'>Day 1 - Friday 23rd October</div>
                        <div className='agenda-box'>
                            <div>19.00 - Official Launch</div>
                            <div>19.30 - Final Team Formation</div>
                            <div>20.00 - Challenge Brief</div>
                            <div>20.30 - Intro to Judges and Mentors</div>
                        </div>
                    </div>

                    <div>
                        <div className='agenda-title'>Day 2 - Saturday 24th October</div>
                        <div className='agenda-box'>
                            <div>8.00 - Idea Keynote</div>
                            <div>8.30 - Idea Generation</div>
                            <div>9.00 - Hacking Begins</div>
                            <div>12.00 - First Checkpoint</div>
                            <div>13.00 - Hacking Continues</div>
                            <div>15.00 - Mini Coding/Marketing Challenge</div>
                            <div>18.00 - Second Checkpoint</div>
                            <div>19.00 - Workshop - How to Build a Personal Brand</div>
                            <div>20.00 - Hacking Continues</div>
                        </div>
                    </div>
                </div>

                <div className='col-5' style={{marginLeft:'5%'}}>
                    <div>
                        <div className='agenda-title'>Day 3 - Sunday 25th October</div>
                        <div className='agenda-box'>
                            <div>9.00 - Workshop - Pitch Perfect</div>
                            <div>10.00 - Mentor Session</div>
                            <div>12.00 - Final Demos</div>
                            <div>15.00 - Jury Deliberation</div>
                            <div>16.00 - Winner Announcement</div>
                            <div>16.30 - End of Hackathon</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage