import React from "react";
import styles from "./hero.module.sass";
import CtaButton from "../cta-button";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <section className={styles.home_page_hero_section}>
      <div className="container">
        <div className="row h-100">
          <div className="col-12 col-xl-6">
            <div className="position-relative h-100 d-flex align-items-center">
              {theme === "dark" && (
                <img
                  alt="bg_gradient_shadow"
                  className={styles.bg_gradient}
                  src={"/static/assets/images/gradient_bg_1.png"}
                />
              )}
              <div className="section_content pt-5">
                <h2 className="heading">Discover, find,</h2>
                <h2 className="heading gradient_text">Sell extraordinary</h2>
                <h2 className="heading">Monster NFTs</h2>
                <p className="sub_heading my-4">
                  Marketplace For Monster Character Collections Non Fungible
                  Token NFTs
                </p>
                <div className="cta_btns_wrapper d-sm-flex">
                  <CtaButton href={"/explore"}>
                    <IoIosRocket className="me-2" />
                    Explore
                  </CtaButton>
                  <div className=" my-3 my-sm-0 mx-sm-3">
                    <CtaButton href={"/create-item"}>
                      <HiOutlineDocumentDuplicate className="me-2" />
                      Create
                    </CtaButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block col-6">
            <div className="position-relative h-100">
              {theme === "dark" && (
                <img
                  alt="bg-gradient-shadow"
                  className={`${styles.bg_gradient} ${styles.bottom_right}`}
                  src={"/static/assets/images/gradient_bg_1.png"}
                />
              )}
              <div className={styles.animated_images_wrapper}>
                <img
                  width={620}
                  height={450}
                  alt={"track-bg"}
                  src={"/static/assets/images/track.png"}
                  loading="eager"
                />
                <Image
                  width={354}
                  height={588}
                  layout="fixed"
                  src={"/static/assets/images/char.png"}
                  alt="toy"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
