import React from 'react';
import SarahLandry from '../images/SarahLandry.png'
import EmilyClarke from '../images/EmilyClarke.png'
import DavidYates from '../images/DavidYates.png'
import BarryAlistair from '../images/BarryAlistair.png'
import Earth from '../images/Earth.png'
const Judges = ({ ...props }) => {

    const judges = [
        {
            name: 'Sarah Landry',
            role: 'Managing Director',
            company: 'TH.0 UK',
            image: SarahLandry
        },
        {
            name: 'Emily Clarke',
            role: 'Founder',
            company: 'Delegate Me',
            image: EmilyClarke

        },
        {
            name: 'David Yates',
            role: 'Interim CEO',
            company: 'Skyline',
            image: DavidYates
        },
        {
            name: 'Barry Alistair',
            role: 'Co-Funder',
            company: 'Tcube',
            image: BarryAlistair
        },
        {
            name: 'Grant Whelan',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
        {
            name: 'Judge',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
        {
            name: 'Judge',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
        {
            name: 'Judge',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
        {
            name: 'Judge',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
        {
            name: 'Judge',
            role: 'Role',
            company: 'Company',
            image: Earth
        },
    ]
    return (
        <div className='container'>
            {judges.map((judge) => {
                return <div style={{textAlign:'center', marginTop:30}}>
                    <div style={{fontWeight:'bold', fontSize:20}}>{judge.name}</div>
                    <img src={judge.image} style={{width:'50%'}} alt="..."></img>
                    <div>{judge.role}</div>
                    <div>{judge.company}</div>
                </div>
            })}
        </div>
    )
}

export default Judges