import React from "react";
import styles from "./contact.module.sass";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className={styles.contact_page}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="py-4  col-12 col-md-6">
            <div className={styles.img_container}>
              <Image
                quality={100}
                alt="contact_page_img"
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
                objectPosition={"center"}
                src={"/static/assets/images/contact.png"}
              />
            </div>
          </div>
          <div className="py-4 col-12 col-md-6">
            <div className={styles.contact_form_area}>
              <h3 className={styles.form_heading}>Drop Up A Message</h3>
              <p className={styles.form_sub_heading}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet praesentium ipsa excepturi veritatis odit atque sed
                vero, ducimus pariatur error culpa ab!
              </p>
              <form
                className={styles.contact_form}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="axies_input_style"
                  type="text"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  className="axies_input_style"
                  type="email"
                  placeholder="Your Email Address"
                  required
                />
                <select className="axies_input_style">
                  <option>Select Subject</option>
                  <option>Option #01</option>
                  <option>Option #02</option>
                  <option>Option #03</option>
                </select>
                <textarea
                  className="axies_input_style"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
                <button className="axies_input_style" type="submit">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
