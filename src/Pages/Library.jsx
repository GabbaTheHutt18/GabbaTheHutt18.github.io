import { NavBar } from '../Components/NavBar';
import Contact from '../Components/Contact/ContactModal';
import LibraryCard from '../Components/LibraryCard';
import LibLeft from "../Assets/LibLeft.png";
import LibRight from "../Assets/LibRight.png";
import "./LibraryStyle.css"
export function Library()
{
    return (
        <div className="Library">
                
            <div className="libLeft">
                <img src={LibLeft} alt="" />
            </div>
            <div className="libCentre">
                <div className="LibScrollButton"><NavBar/></div>
                    
                    <div className="RavenAndCard">
                        <div className="LibRavenButton"><Contact  bool ={true} float={1}/></div>
                    
                        <div className="libraryCard"> 
                        <LibraryCard/> 
                        </div>
                    </div>
                    
                </div>
                
            <div className="libRight">
                <img src={LibRight} alt="" />
            </div>
                
        </div>
                
    )

}