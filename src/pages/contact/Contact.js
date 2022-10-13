import "./contact.css";
import { Link, Router, BrowserRouter } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

export default function Contact() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <span className="location">
            2025 N Kilpatrick St Portland, OR 97217
          </span>
          <p className="hours"> Current Hours noon to midnight</p>
        </div>
        <div className="contact-right">
          <span className="booking">Booking: wfkcbooking@gmail.com</span>
          <p className="booking-text">
            Please tell us the name of your group, the date you are interested
            in and the best way to reach you. We will get back to you as soon as
            we can, but please be patient. We receive hundreds of booking
            request and we do our best to give each one the attention they
            deserve.
          </p>
          {!user && <></>}
          {user && (
            <>
              {user.displayName}
              <button className="btn" onClick={logout}>
                Logout
              </button>
              <BrowserRouter>
                <Link to="/create">Add Show</Link>
              </BrowserRouter>
            </>
          )}
        </div>
      </div>
    </>
  );
}
