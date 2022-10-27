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
          <button>Submit</button>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        <span className="booking">Booking: wfkcbooking@gmail.com</span>

        {!user && <></>}
        {user && (
          <>
            {user.displayName}
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
  // <form>
  //   <div className="contact-form">
  //     <input
  //       className="contact-input"
  //       type="text"
  //       placeholder="Email"
  //       name="email"
  //       required
  //     />
  //     <input
  //       className="contact-input"
  //       type="text"
  //       placeholder="Name"
  //       name="email"
  //       required
  //     />
  //     <textarea
  //       className="contact-area"
  //       type="text"
  //       placeholder="Name of group... date you are interested in...
  //         We will get back to you as soon as
  //         we can, but please be patient."
  //       name="email"
  //       required
  //     />
}
