import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "571141a6-ddb4-4ade-a0b8-bffa775a1bf9"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");

        Swal.fire({
          title: "Message Delivered!",
          text: "The raven hath successfully carried thy message!",
          icon: "success",
          confirmButtonText: "Huzzah!",
          customClass: {
          popup: "raven-popup",
          confirmButton: "raven-confirm-button",
        }});

        form.reset();
      } else {
        setResult("Error");

        Swal.fire({
          title: "Alas!",
          text: "The raven did not deliver thy message - please send another!",
          icon: "error",
          confirmButtonText: "What a pity",
          customClass: {
          popup: "raven-popup",
          confirmButton: "raven-confirm-button",
        }});
      }
    } catch (error) {
      setResult("Error");

      Swal.fire({
        title: "Error",
        text: "Unable to send your message. Please try again.",
        icon: "error",
      });

      console.error(error);
    }
  };

  return (
    <div>
      <section className="contact">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              onInvalid={(e) => e.target.setCustomValidity("I pray thee, thy name!")}
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your Email"
              name="email"
              onInvalid={(e) => e.target.setCustomValidity("Hark! Thou forgot thine electronic mail!")}
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />
          </div>

          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field-Message"
              placeholder="Enter your Message"
              onInvalid={(e) => e.target.setCustomValidity("No message from thee?")}
              onInput={(e) => e.target.setCustomValidity("")}
              required
            />
          </div>

          <button type="submit">Send a Raven!</button>
        </form>
      </section>
    </div>
  );
}