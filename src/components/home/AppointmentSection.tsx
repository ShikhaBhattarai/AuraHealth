import { FormEvent, useState } from "react";
import { appointmentPricing } from "../../lib/data";

export default function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const phone = (formData.get("phone") as string | null)?.trim() ?? "";
    const division = (formData.get("division") as string | null)?.trim() ?? "";
    const patientType = (formData.get("patientType") as string | null)?.trim() ?? "";
    const preferredDate = (formData.get("preferredDate") as string | null)?.trim() ?? "";
    const preferredTime = (formData.get("preferredTime") as string | null)?.trim() ?? "";
    const message = (formData.get("message") as string | null)?.trim() ?? "";

    const subject = `Appointment Request${name ? ` - ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Division: ${division}`,
      `Patient Type: ${patientType}`,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      `Message: ${message}`,
    ].join("\n");

    const mailtoUrl = `mailto:aurahealthclinic.baneshwor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    form.reset();
    setSubmitted(true);
  }

  return (
    <section className="tint" id="appointment">
      <div className="wrap">
        <div className="appt-wrap">
          <div className="appt-info">
            <div className="eyebrow" style={{ color: "#BFD9FF" }}>
              Book An Appointment
            </div>
            <h3>With Aura Health Clinic</h3>
            <p style={{ color: "#DDECFD" }}>
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
            {submitted && (
              <div className="form-success" role="status">
                <strong>Thank you for reaching out to us.</strong>
                <div>Someone will call you shortly.</div>
              </div>
            )}
            <div className="form-grid">
              <div>
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div>
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" name="phone" type="tel" placeholder="98XXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="f-div">Division</label>
                <select id="f-div" name="division" required>
                  <option value="">Select division</option>
                  <option>Pediatric Care</option>
                  <option>Dental Care</option>
                  <option>Pharmacy</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-type">Patient Type</label>
                <select id="f-type" name="patientType" required>
                  <option value="">Select patient type</option>
                  <option>New Patient</option>
                  <option>Returning Patient</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-date">Preferred Date</label>
                <input id="f-date" name="preferredDate" type="date" required />
              </div>
              <div>
                <label htmlFor="f-time">Preferred Time</label>
                <select id="f-time" name="preferredTime" required>
                  <option value="">Select preferred time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="f-msg">Message</label>
                <textarea id="f-msg" name="message" rows={3} placeholder="Tell us briefly what the visit is for" required />
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
