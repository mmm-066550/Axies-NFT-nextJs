import React from "react";
import FAQAccordion from "../../components/accordion";

export default function FAQpage() {
  return (
    <section className="FAQ_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Frequently Asked Questions</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-7">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
