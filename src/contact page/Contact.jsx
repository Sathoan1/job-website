import React from 'react'
import '../../src/contact page/Contact.css'

const Contact = () => {
  return (
    <div className='Container'>
      <div className="Sub-container">
        {/* first container */}
        <div className="Content">
          <ul className='logo'>
            <li> <a href="#">Adriana.</a></li>
          </ul>
          <div className="text">
          <div className='h3'>
          <h3>Full Stack Developer</h3>
           </div>
           <div className='text1'>
            <h1>Adriana McTominay</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
            </div>
          </div>
          <ol>
            <li><a href="/project">Projects</a></li>
            <li><a href="/download">Download Resume</a></li>
            <li><a href="/contact">Contact</a></li>

          </ol>
        
        
        </div>

        {/* second container */}
        <div className="form">Form</div>
      </div>
    </div>
  )
}

export default Contact

