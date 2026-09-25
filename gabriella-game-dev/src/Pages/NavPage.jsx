import { NavBar } from '../Components/NavBar';
import Contact from '../Components/Contact/ContactModal';

import './NavStyle.css';

export function NavPage()
{
    return (
        <>
                <div className="navPage">
        
                    <div className="navLeft"/>

                    <div className="navCentre">
                             
                        <div className="NavButtons"> 
                            <Contact bool ={true} float={1.5}/> 
                            <div className="NavScroll"><NavBar/></div>
                             
                        </div>
                       
                    </div>
                    <div className="navRight"/>
                </div>
        </>
    )

}