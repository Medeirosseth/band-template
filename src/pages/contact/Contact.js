import "./contact.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export default function Contact() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wfgh7tl",
        "template_1oa90rn",
        form.current,
        "AygS3BMlgLwH79lv6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="mbr">Music </h1>
          <h1 className="mbr">Booze</h1>
          <h1 className="mbr">Regrets</h1>
          <Link to="/login">
            <i className="fa-solid fa-bolt"></i>
          </Link>
        </div>
        <div className="contact-right">
          <div className="booking">Booking Inquiries</div>
          <form ref={form} onSubmit={sendEmail}>
            <label type="name" />
            <input type="text" placeholder="Name" name="user_name" />
            <label type="email" />
            <input type="email" placeholder="Email" name="user_email" />
            <label type="message" />
            <textarea
              name="message"
              placeholder="Group name, date you are interested in "
            />
            <input className="input-btn" type="submit" value="Send" />
          </form>
          We receive hundreds of booking request and we do our best to give each
          one the attention they deserve.
        </div>
      </div>
    </>
  );
}
