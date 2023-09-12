import Teamcircle from "../../assets/Ellipse 397.svg"
import Polygon from "../../assets/Polygon 8.svg"
import Hopesir from "../../assets/hopesir.png"
import Hashim from "../../assets/hashim.png"
import Sourav from "../../assets/SOURAV.png"
import Saksham from "../../assets/saksham.png"

const Team = () => {
  return (
    <div className="team">
        <div className="team-up">
          <div className="team-circle"><img src={Teamcircle} alt="" /></div>
          <div className="team-title">
            <h1>Meet With Our Creative Dedicated Team</h1>
          </div>
          <div className="team-poly">
            <img src={Polygon} alt="" />
          </div>
        </div>
        <div className="team-down">
          <div className="team-card">
            <div className="team-pic">
              <img src={Hopesir} alt="" />
            </div>
            <div className="team-name">
              <h2>Hope Opus</h2>
              <h4>MD/CEO </h4>
            </div>
          </div>
          <div className="team-card">
            <div className="team-pic">
              <img src={Hashim} alt="" />
            </div>
            <div className="team-name">
              <h2>Qanit Hashim</h2>
              <h4>Product Designer</h4>
            </div>
          </div>
          <div className="team-card">
            <div className="team-pic">
              <img src={Sourav} alt="" />
            </div>
            <div className="team-name">
              <h2>Saurav T Ajith</h2>
              <h4>Mobile App Developer</h4>
            </div>
          </div>
          <div className="team-card">
            <div className="team-pic">
              <img src={Saksham} alt="" />
            </div>
            <div className="team-name">
              <h2>Saksham Soni</h2>
              <h4>Full Stack Web Developer</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team