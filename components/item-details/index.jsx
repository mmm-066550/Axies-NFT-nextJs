import React from "react";
import styles from "./item-details.module.sass";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import SellerCard from "../seller-card";
import Link from "next/link";
import { IoBagAddSharp } from "react-icons/io5";
import Image from "next/image";

export default function ItemDetailsComponent() {
  return (
    <div className={styles.item_details_component}>
      <div className="container py-5">
        <div className="row">
          <div className=" py-5 col-12 col-lg-6">
            <div className={styles.item_image_wrapper}>
              <Image
                alt="item_image"
                layout="fill"
                loading="eager"
                quality={100}
                src={"/static/assets/images/item-details.jpg"}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="py-md-5 col-12 col-lg-6">
            <div className={styles.item_details}>
              <h3 className={styles.item_title}>
                The Fantasy Flower illustration
              </h3>
              <div className={`${styles.item_facts} pt-3 pb-2`}>
                <span className={styles.item_views}>
                  <AiOutlineEye className="me-2" />
                  <span>100</span>
                </span>
                <span className={styles.item_likes}>
                  <AiOutlineHeart className="me-2" />
                  <span>100</span>
                </span>
              </div>
              <div className={styles.items_owner_and_seller}>
                <div className="row">
                  <div className="col">
                    <SellerCard id={1} own summary />
                  </div>
                  <div className="col">
                    <SellerCard id={2} seller summary />
                  </div>
                </div>
              </div>
              <p className={styles.item_overview}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo earum nihil neque similique quae eaque beatae eos,
                alias laborum. Explicabo ex, molestias accusantium neque
                laboriosam eaque distinctio repudiandae a quo!
              </p>
              <div className={styles.item_facts}>
                <div className="row">
                  <div className="my-3 col-12 col-sm-6">
                    <div className={styles.item_fact}>
                      <span className={styles.item_fact_label}>
                        current bid
                      </span>
                      <span className={styles.item_fact_value}>
                        4.89 ETH <span> = $12.246</span>
                      </span>
                    </div>
                  </div>
                  <div className="my-3 col-12 col-sm-6">
                    <div className={styles.item_fact}>
                      <span className={styles.item_fact_label}>Countdown</span>
                      <span className={styles.item_fact_value}>
                        4 : 12 : 34 : 23
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <Link href={"/login"}>
                  <a className={styles.place_bid_btn}>
                    <IoBagAddSharp className="me-2" />
                    <span>place a bid</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
