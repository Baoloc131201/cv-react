import React from "react";
import "./contact.css";
import Emailjs from "@emailjs/browser";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    Emailjs.sendForm(
      "service_hfpy8as",
      "template_6oma87y",
      e.target,
      "lGkj7HbUn_DL0bFpT"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="name"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="subject"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              type="message"
              className="contact__form-input contact__form-area"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
