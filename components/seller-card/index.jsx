import React from "react";
import styles from "./seller-card.module.sass";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";

export default function SellerCard({ id, fullWidth }) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4"}`}>
      <div className={styles.seller_card}>
        <div className={styles.seller_info}>
          <div className={styles.seller_avatar}>
            <span className={styles.check_icon}>
              <BsCheck />
            </span>
            <Image
              alt="user_avatar"
              layout="fill"
              src={`/static/assets/images/avatars/${id}.jpg`}
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
          <div className={styles.about_seller}>
            <Link href={"/"}>
              <a className={styles.seller_details_link}>Moustapha</a>
            </Link>
            <span className={styles.seller_username}>@mmm066550</span>
            <span className={styles.seller_earn}>23.3 ETH</span>
          </div>
        </div>
        <div className={styles.seller_rate}>
          <span className={styles.check_icon}>#0{id}</span>
          <Link href={"/"}>
            <a className={styles.follow_seller_link}>follow</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
