import { faqs } from "../../lib/data";

export default function Faq() {
  return (
    <section className="tint" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Frequently Asked Questions</div>
          <h2>Questions about visiting Aura</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq" key={faq.question} open={i === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
