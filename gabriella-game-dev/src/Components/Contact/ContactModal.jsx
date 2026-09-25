import React, { useState } from "react";
import { createPortal } from "react-dom";
import ContactForm from "./Contact";
import contactButton from "../../Assets/RavenStatic.png";
import contactHover from "../../Assets/HoverRaven.png";
import contactGif from "../../Assets/Raven.gif";
import "./Contact.css";
import "../Modal.css";

export default function Contact({ bool, float }) {
    const [contact, setModal] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleModal = () => {
        if (isAnimating) return;
        setIsAnimating(true);
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
        setModal(true);
    };

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return (
        <>
            {bool ? (
                <div className="contact-button-container">
                    {!isAnimating ? (
                        <button
                            type="button"
                            onClick={toggleModal}
                            className="image-button"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={isHovered ? contactHover : contactButton}
                                alt="Contact me!"
                                style={{ "--image-scale": float }}
                            />
                        </button>
                    ) : (
                        <img
                            src={contactGif}
                            alt=""
                            style={{ "--image-scale": float }}
                            className="contact-flying"
                            onAnimationEnd={handleAnimationEnd}
                        />
                    )}
                </div>
            ) : (
                <button
                    type="button"
                    className="contact-text-button"
                    onClick={openModal}
                >
                    Contact me!
                </button>
            )}

            {contact &&
                createPortal(
                    <div className="modal">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="close-modal"
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                            <ContactForm />

                            <div>
                                <a
                                    href="https://github.com/GabbaTheHutt18"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-github w3-hover-opacity" />
                                </a>

                                <a
                                    href="https://gaby18.itch.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-itch-io w3-hover-opacity" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/gabriella-jane-emerson/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin w3-hover-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}