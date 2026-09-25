import { NavBar } from "../Components/NavBar";
import React, { useState } from "react";
import Contact from "../Components/Contact/ContactModal";
import PdfViewer from "../Components/Utils/PdfViewer";
import "./AboutMeStyle.css";
import sideBar from "../Assets/MeSide.png";

export function AboutMe() {

const [showCv, setShowCv] = useState(true); const toggleCv = () => { setShowCv(prev => !prev); };

    return (
        <div className="aboutMePage">
            <div className="aboutLeft">
                <img src={sideBar} alt="" />
            </div>

            <div className="aboutCentre">
                <div className="topButtons">
                <NavBar />

                
                <button className="toggleButton" onClick={toggleCv} > Toggle CV </button>
                <div className="MeRaven">
                    <Contact bool={true} float={1} />
                </div>
</div>
                <PdfViewer key={showCv ? "fun" : "cv"} bool={showCv}/>
            </div>

            <div className="aboutRight">
                <img src={sideBar} alt="" />
            </div>
        </div>
    );
}