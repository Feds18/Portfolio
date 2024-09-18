import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    //serviceID, templateID, publicKey4
    const serviceID = "service_rm5apla";
    const templateID = "template_08ltx5k";
    const publicKey = "btgq8rNgbd1wyUEdj";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Federico Ottaviani",
      message: message,
    };
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <section id="contact-section">
      <h2>CONTACT</h2>
      <button id="hr"></button>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </form>
    </section>
  );
};
export default Contact;
