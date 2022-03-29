import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./accordion.module.sass";

export default function AccordionItem({ faq }) {
  const [close, setclose] = useState(true);

  return (
    <div className={`${styles.accordion_item} ${!close && styles.open}`}>
      <button
        className={`${close && "collapsed"} accordion-button ${
          styles.accordion_button
        }`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded={close}
        aria-controls="panelsStayOpen-collapseOne"
        onClick={() => setclose(!close)}
      >
        <span>{faq?.question}</span>
        {close ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </button>
      <div
        id="panelsStayOpen-collapseOne"
        className={`accordion-collapse ${close && "collapse"} `}
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className={`accordion-body ${styles.accordion_body}`}>
          {faq?.answer}
        </div>
      </div>
    </div>
  );
}
