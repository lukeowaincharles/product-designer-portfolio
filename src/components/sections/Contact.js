import React from "react";
import ContactData from "../../data/ContactData.json";

function Contact() {
  const CONTACTDATA = ContactData;

  return (
    <section className="contact">
      <h2 className="text text--pink">{CONTACTDATA[0].title}</h2>
      <ul>
        <li className="contact__list-item">
          <a
            className="contact__email contact__link"
            href={`mailto:${CONTACTDATA[0].email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACTDATA[0].email}
          </a>
        </li>
        <li className="contact__list-item">
          <a
            className="contact__mobile contact__link"
            href={`tel:${CONTACTDATA[0].mobile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACTDATA[0].mobile}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
