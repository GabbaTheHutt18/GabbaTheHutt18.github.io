import {Link} from 'react-router-dom';
import Contact from '../Components/Contact/ContactModal';
import "./NavBarStyle.css";
import navButton from "../Assets/NavButton.png";

export function NavBar()
{
    return (
        <>
        <div className="dropdown">
        <button className="navButton"><img src={navButton} alt="" /></button>
        <div className="dropdown-content">
        <Link to="/Greetings">Home</Link>
        <br/>
        <Link to="/Projects">Projects</Link>
        <br/>
        <Link to="/AboutMe">About</Link>
        <br/>
        <Contact bool={false} />
        </div>
        
        </div>
        </>
    )

}