import React from 'react'
import '../App.css';
import FdcImage from '../Images/Season1.png';

const Home = () => {
    return (
        <div className = "Home">
            <img src={FdcImage} alt="FDC coverImage" className="App-image" />
            <p>
               <b> Developer Circles </b>from Facebook is a global network of local communities created by developers, for developers. We are excited to present you the <i><b>Indore Developer Circle</b></i>. As a part of the developer circle, you can attend meetups, collaborate in Facebook Groups, learn through training sessions and access the latest technologies from Facebook. It also offers great prospects for startups, helping them engage with their local developer community. We aim to build a community of people who love to learn, share and build cool things using <i>Facebook's Developer</i> Tools.
            </p>
        </div>
    )
}

export default Home;