import React from 'react';

const Prizes = ({ ...props }) => {
    return (
        <div className='grey-border'>
            <div className= 'section-button col-3' >PRIZES</div>
            <div className='prizes-text'>
                Wanting to be an important figure in the support of early-stage innovation,
                TH.0 is putting in place the opportunity of a lifetime for the winners of Climathon.
            </div>
            <div className='prizes-text'>
                The top three all-category winners will win a cash prize and the support from an incubator
                to develop their projects: £3,000 for first place, £1,500 for the second and
                £750 for the third.
            </div>
            <div className='prizes-text' style={{marginBottom:"3%"}}>
                Each category will have its winning team with access to a
                variety of additional prizes to help support their project. The additional prizes consist of.
            </div>
        </div>
    )
}

export default Prizes