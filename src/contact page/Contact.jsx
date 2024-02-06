import React from 'react'
import '../../src/contact page/Contact.css'
import profile from '../assets/Ellipse 2.png'
import { AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='Container'>
      <div className='body'>
      <div className="Sub-container">
        {/* first container */}
        <div className="Content">
          <ul className='logo'>
            <li> <a href="#">Sathoan.</a></li>
          </ul>
          <div className="text">
          <div className='h3'>
          <h3>Full Stack Developer</h3>
           </div>
           <div className='text1'>
            <h1>Oamen Sathoan</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
            </div>
          </div>
          <ol className='list' start={1}>
            <li><a href="/project">01 <span className='dash'></span> Projects</a></li>
            <li><a href="/download">02 <span className="dash"></span> Download Resume</a></li>
            <li><a href="/contact">03 <span className="dash"></span> Contact</a></li>

          </ol>
        
        </div>

        {/* second container */}
        <div className="form-container">
          <header>Send A Message</header>
          <form action="#" className='form'>
           <div className='input-box '>
            {/* <label htmlFor="">From:</label> */}
            <input type="text" placeholder='From:' required/>
           </div>
           <div className='input-box'>
            <input type="text" placeholder='Subject:' required/>
           </div>
           <div className=' long-box' >
            <input type="text" placeholder='Write Message...' required/>
           </div>
           <div className='btn'>
           <button>Send Message</button>
           </div>

          </form>
        </div>


      </div>
                {/* footer */}
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

export default Contact

