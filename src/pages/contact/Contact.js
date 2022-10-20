import "./contact.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Login from "../../components/login/login";
export default function Contact() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
          <form>
            <div className="contact-form">
              <input
                className="contact-input"
                type="text"
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="contact-input"
                type="text"
                placeholder="Name"
                name="email"
                required
              />
              <textarea
                className="contact-area"
                type="text"
                placeholder="Name of group... date you are interested in...
                  We will get back to you as soon as
                  we can, but please be patient. We receive hundreds of booking
                  request and we do our best to give each one the attention they
                    deserve."
                name="email"
                required
              />
              <button>Submit</button>
            </div>
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
      </div>
    </>
  );
}
