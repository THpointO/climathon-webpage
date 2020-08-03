import React from 'react';
import { FiUmbrella, FiGift , FiCoffee} from 'react-icons/fi'
const Blog = ({ ...props }) => {

    const posts = [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Peace of Mind',
            icon: <FiUmbrella size={30} color='white' />
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Coffee Breaks',
            icon: <FiCoffee size={30} color='white'/>
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Rewards',
            icon: <FiGift size={30} color='white'/>
        },
    ]

    return (
        <div className='grey-border' style={{ marginTop: "10%" }}>
                <div className = 'join-text offset-2 col-8'>Want to make a difference? Let's get together and make a change for the better!</div>
                <button className = "landing-btn" style = {{ marginLeft: "40%", marginTop: '2%', marginBottom: '4%' }
        } > JOIN NOW</button >
        <div className='section-button col-3'>BLOG</div>
        <div
            className='blog-text'
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            </div>

        <div className='row justify-content-around'>
            {posts.map((value, index) => {
                let color
                if (index % 2 === 0) {
                    color = '#53E0DB'
                } else {
                    color = '#6897B1'
                }
                return <div key={index} className='col-3 just' style={{ textAlign: 'center', padding: 30, backgroundColor: color, marginTop:60 }}>
                    <div style={{backgroundColor:'#175B14', paddingTop:15, paddingBottom:15,width:60, borderRadius:30, marginLeft:'auto', marginRight:'auto', marginBottom:20}}>{value.icon}</div>
                    <div style={{ marginBottom: 30, fontWeight: 'bold' }}>{value.title}</div>
                    <div>{value.text}</div>
                </div>
            })}
        </div>

        </div >
    )
}

export default Blog