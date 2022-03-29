import styles from "./collection-card.module.sass";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CollectionCard({ id, fullWidth, cols }) {
  return (
    <div
      className={`my-3 ${
        fullWidth && `col-12 col-md-6 col-lg-4 col-xl-${cols || 3}`
      }`}
    >
      <div className={styles.collection_card}>
        <div className={styles.collection_imgs_wrapper}>
          <span className={styles.collection_likes}>
            <AiOutlineHeart className="me-1" />
            <span>100</span>
          </span>
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
          <div className={styles._image}>
            <Image
              alt="collection_bg"
              layout="fill"
              src={`/static/assets/images/collection/${id}/full.jpg`}
              objectFit="cover"
              objectPosition={"center"}
              quality={100}
            />
          </div>
          <div className={styles.square_image_1}>
            <Image
              alt="collection_bg_1"
              layout="fill"
              src={`/static/assets/images/collection/${id}/sm-1.jpg`}
              objectFit="cover"
              objectPosition={"center"}
              quality={100}
            />
          </div>
          <div className={styles.square_image_2}>
            <Image
              alt="collection_bg_2"
              layout="fill"
              src={`/static/assets/images/collection/${id}/sm-2.jpg`}
              objectFit="cover"
              objectPosition={"center"}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.collection_info}>
          <Link href="/authors">
            <a className={styles.collection_details_link}>
              creative art collection
            </a>
          </Link>
          <div className={styles.collection_author}>
            <span>created by</span>
            <Link href="/authors">
              <a className={styles.collection_author_link}>Moustapha Mahmoud</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
