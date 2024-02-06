import React from 'react'
import '../../src/home page/Home.css'
import jslogo from '../assets/Group 4.png'
import logo1 from '../assets/boot.png'
import logo2 from '../assets/js2.png'
import logo3 from '../assets/html.png'
import logo5 from '../assets/react.png'
import logo6 from '../assets/css.png'
// import imagee from '../assets/Saly-13.png'
import image from '../assets/Group 2.png'

import profile from '../assets/Ellipse 2.png'
import { AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Home = () => {
  return (
    <div className='container'>
    <div className='sub-container'>
   <nav className="nav">
    <div className="logo">
        <a href="#">Sathoan.</a>
    </div>
    <ul className='nav-links'>
        <li><a href="/project"> Projects</a></li>
        <li><a href="/download"> Download Resume</a></li>
        <li><a href="/contact"> Contacts</a></li>
    </ul>
   </nav>

   <div className="content">
    <div className="text">
        <div className='h3'>
        <h3>Full Stack Developer</h3>
        </div>
        {/* <button> <h2>Full Stack Developer</h2></button> */}

        <div className='text1'>
            <h1>Oamen Sathoan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
        </div>
        <div className="text-icons">
        <img src={logo1} alt="bootstrap" />
            <img src={logo2} alt="jslogo" />
            <img src={logo3} alt="htmllogo" />
            <img src={jslogo} alt="jslogo" />
            <img src={logo5} alt="reactlogo" />
            <img src={logo6} alt="csslogo" />
        </div>
    </div>
    {/* image */}
    <div className='image'>
    <div className='cicle'></div>
    <div className='image '>
        <img  src={image} alt="" />
    </div>
    </div>
   </div>

   <footer>
    <div className='footer'>
        <img src={profile} alt="profile picture" />
        <div className="icon">
            <div className='icon-1'> <AiTwotoneMail/><span> Email Me</span><BsBoxArrowUpRight/></div>
            <div className='icon-1'><AiOutlineGithub /> <span>Github</span><BsBoxArrowUpRight/></div>
            
        </div>
    </div>
   </footer>
    </div>

    </div>
  )
}

export default Home