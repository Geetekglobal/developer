// import React from 'react'
// import Shape01 from "../../assets/shape-01.svg"
// import Shape02 from "../../assets/shape-02.svg"
// import Shape03 from "../../assets/shape-03.svg"
// import Shape04 from "../../assets/shape-04.svg"
import Heroimg from "../../assets/wedevimg.svg"
import Ellipse365 from "../../assets/Ellipse 365.svg"
import Ellipse367 from "../../assets/Ellipse 367.svg"
import Group5080 from "../../assets/Group 5080.svg"
const Hero = () => {
  return (
    <div className='herosection' >
      <div className="sectionleft" >
      <div className="tagline">
        <h1>We specialize in Software development, Web <br />
& Mobile App development, Digital Marketing</h1>
</div>
  <div className="tagpara">
    <p>At Geetek Global, we are passionate about providing innovative tech consulting solutions to help businesses thrive in the digital age. Our team of experts is dedicated to assisting you in achieving your goals, whether it’s optimizing your online presence, implementing effective digital marketing strategies, or enhancing your brand identity</p>
  </div>
  <div className="contact">
    <div className="button">
      <button>
        Get Started Now
      </button>
    </div>
    <div className="number">
      <h5>+44-7753-140131</h5>
    </div>
  </div>
  <div className="wifi"><img src={Ellipse367} alt="" /></div>
  <div className="groupbox">
    <img src={Group5080} alt="" />
  </div>
      </div>
      <div className="sectionright">
        <div className="pie"><img src={Ellipse365} alt="" /></div>
        <div className="mainimage">
    <img src={Heroimg} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Hero