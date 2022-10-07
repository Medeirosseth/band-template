import "./contact.css";

export default function Contact() {
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
        </div>
      </div>
    </>
  );
}
