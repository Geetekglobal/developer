
import Logo from '../../assets/logo.png'
import LogoDark from '../../assets/logodark.png';
import Sun from '../../assets/sun.png';

const Navbar = () => {
 
  return (
    <div className='nav' >
      <div className="logo"><img src={LogoDark} alt="" /></div>
      <div className="navlinks">
       <a href="">Home</a>
       <a href="">Section</a>
       <a href="">Quotes</a>
       <a href="">Internship</a>
      </div>
      <div className="mode">
        <div className="sun">
          <button>
          <img src={Sun} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar