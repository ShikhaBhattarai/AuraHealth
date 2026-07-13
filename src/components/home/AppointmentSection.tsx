import { FormEvent } from "react";
import { appointmentPricing } from "../../lib/data";

export default function AppointmentSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="tint" id="appointment">
      <div className="wrap">
        <div className="appt-wrap">
          <div className="appt-info">
            <div className="eyebrow" style={{ color: "#8FD8BC" }}>
              Book An Appointment
            </div>
            <h3>With Aura Health Clinic</h3>
            <p style={{ color: "#D9EDE4" }}>
              Booking should be simple. Call, WhatsApp, or send your preferred time below and our front desk will
              confirm within the day.
            </p>
            <ul>
              {appointmentPricing.map((item) => (
                <li key={item.label}>
                  {item.label} <b>{item.price}</b>
                </li>
              ))}
            </ul>
          </div>
          <form className="appt-form" onSubmit={handleSubmit}>
            <div className="eyebrow">Request a Visit</div>
            <h3 style={{ fontSize: 20 }}>We'll confirm the same day</h3>
            <div className="form-grid">
              <div>
                <label htmlFor="f-name">Name</label>
                <input id="f-name" type="text" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" type="tel" placeholder="98XXXXXXXX" />
              </div>
              <div>
                <label htmlFor="f-div">Division</label>
                <select id="f-div">
                  <option>Pediatric Care</option>
                  <option>Dental Care</option>
                  <option>Pharmacy</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-type">Patient Type</label>
                <select id="f-type">
                  <option>New Patient</option>
                  <option>Returning Patient</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-date">Preferred Date</label>
                <input id="f-date" type="date" />
              </div>
              <div>
                <label htmlFor="f-time">Preferred Time</label>
                <select id="f-time">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" rows={3} placeholder="Tell us briefly what the visit is for" />
              </div>
            </div>
            <button className="btn btn-fill" type="submit">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
