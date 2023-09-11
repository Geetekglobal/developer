import lady from '../../assets/lady.png';
import men from '../../assets/men.png';
import paaji from '../../assets/paaji.png';
import Ellipse368 from '../../assets/Ellipse 368.svg';
import Ellipse395 from '../../assets/Ellipse 395.svg';
import Group5099 from '../../assets/Group 5099.svg';
const Choose = () => {
  return (
    <div className="choose">
        <div className="choose-right">
            <div className="images-coll">
                <img src={men} alt="" />
            </div>
            <div className="images-coll1">
                <img src={paaji} alt="" />
            </div>
            <div className="images-coll2">
                <img src={lady} alt="" />
            </div>
            <div className="img-cone">
                <img src={Ellipse368} alt="" />
            </div>
            <div className="img-semic">
                <img src={Ellipse395} alt="" />
            </div>
        </div>
        <div className="choose-left">
            <div className="title1"><h3>Why Choose Us</h3></div>
            <div className="title2"><h1>We Make Our customers happy
by giving the Best Services.</h1></div>
            <div className="title-para"><p>With our deep understanding of technology, marketing trends, and industry best practices, we offer tailored solutions to meet your specific needs. Our creative and analytical approach ensures that we deliver impactful results that drive growth and success for your business.</p></div>
            <div className="play">
                <img src={Group5099} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Choose