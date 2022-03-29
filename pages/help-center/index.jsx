import React from "react";
import styles from "./help-center.module.sass";
import { FiSearch } from "react-icons/fi";
import WalletConnectComponent from "../../components/wallet-connect-component";
import {
  FaTelegramPlane,
  FaFolderPlus,
  FaCartPlus,
  FaSellsy,
  FaLink,
} from "react-icons/fa";
import { RiCpuLine } from "react-icons/ri";

const categories = [
  { name: "Getting Started", icon: <FaTelegramPlane /> },
  { name: "Creating", icon: <FaFolderPlus /> },
  { name: "Buying", icon: <FaCartPlus /> },
  { name: "Selling", icon: <FaSellsy /> },
  { name: "Partners", icon: <FaLink /> },
  { name: "Developers", icon: <RiCpuLine /> },
];

export default function HelpCenterPage() {
  return (
    <section className="help_center_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">How Can We Help You?</h3>
            <p className="section_sub_head mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
            <div className="mt-4 mb-3">
              <form className={styles.search_form}>
                <input
                  type="search"
                  className={styles.search_input_field}
                  placeholder="Type your question here"
                />
                <button type="submit" className={styles.submit_btn}>
                  <FiSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <p className="section_sub_head">
              Or choose a categories to quickly find the help you need
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {categories.map((_, i) => (
            <WalletConnectComponent
              name={_.name}
              icon={_.icon}
              id={i + 1}
              key={i}
              link={"/contact"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
