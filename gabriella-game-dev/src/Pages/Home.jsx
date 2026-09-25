import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HomeStyle.css";

import right from "../Assets/HomeRightBar.png";
import left from "../Assets/HomeLeftBar.png";
import centre from "../Assets/HomeBackground.png";

export function Home() {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleTransition = () => {
        console.log("Clicked!");

        if (isAnimating) return;

        setIsAnimating(true);

        setTimeout(() => {
            navigate("/Greetings");
        }, 600);
    };

    return (
        <div
            className={`homeContainer ${isAnimating ? "zoomIn" : ""}`}
            onClick={handleTransition}
            onWheel={handleTransition}
        >
            <div className="homeLeft">
                <img src={right} alt="" />
            </div>

            <div className="homeCentre">
                <img src={centre} alt="" />
            </div>

            <div className="homeRight">
                <img src={left} alt="" />
            </div>
            
        </div>
    );
}