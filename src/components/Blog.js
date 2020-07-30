import React from 'react';
import { FiUmbrella } from 'react-icons/fi'

const Blog = ({ ...props }) => {

    const posts = [
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Peace of Mind',
            // icon: FiUmbrella
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Coffee Breaks',
            // icon:
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique',
            title: 'Rewards',
            // icon:
        },
    ]

    return (
        <div className='grey-border' style={{ marginTop: "10%" }}>
            <div className='join-text offset-2 col-8'>Want to make a difference? Let's get together and make a change for the better!</div>
            <button className="landing-btn">JOIN NOW</button>
            <div className='section-button col-3'>BLOG</div>
            <div
                className='blog-text'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            </div>

            <div>
                <img src={FiUmbrella}></img>
            </div>
        </div>
    )
}

export default Blog