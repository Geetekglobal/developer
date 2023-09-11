import teamwork from '../../assets/teamwork.svg';
import global from '../../assets/global.svg';
import support from '../../assets/support.svg';

const Feature = () => {
  return (

      <div className="feature">
        <div className="details">
          <div className="detsicon"><img src={teamwork} alt="" /></div>
          <div className="detsline">
            <h3>Team Work</h3>
            <p>We give a collaborative work environment with Clients</p>
          </div>
          </div>
        <div className="details">
          <div className="detsicon"><img src={global} alt="" /></div>
          <div className="detsline">
          <h3>Global Relevance</h3>
            <p>Reaching you from anywhere you are in the world, at your on timezone</p>
          </div>
          </div>
        <div className="details">
          <div className="detsicon"><img src={support} alt="" /></div>
          <div className="detsline">
          <h3>24/7 Customer Support</h3>
            <p>Out Customer service unit is always ready to attend to whatever your business needs any-day, anytime</p>
          </div>
          </div>
      </div>
  )
}

export default Feature