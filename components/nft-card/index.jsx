import React from "react";
import styles from "./nft-card.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IoBagAddSharp } from "react-icons/io5";
import { MdLoop } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

export default function NFTCard({ id, fullWidth, live }) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      <div className={styles.nft_card_styled}>
        <div className={styles.nft_img_wrapper}>
          <Link href={"/item-details"}>
            <a>
              <Image
                objectPosition={"center"}
                objectFit="cover"
                layout="fill"
                src={`/static/assets/images/nft-cards/${id}.jpg`}
                quality={100}
                alt="nft-card"
              />
            </a>
          </Link>
          <span className={styles.nft_likes}>
            <AiOutlineHeart className="me-1" />
            <span>100</span>
          </span>
          {live && (
            <span className={styles.nft_comming_soon}>comming soon</span>
          )}
        </div>
        <div className={`${styles.nft_info_row}`}>
          <Link href={"/item-details"}>
            <a className={styles.nft_name}>The RenaiXance Rising The Sun</a>
          </Link>
          <span className={styles.nft_BSC}>BSC</span>
        </div>
        <div className={`${styles.nft_info_row}`}>
          <div className={styles.nft_owner_wrapper}>
            <div className={styles.nft_owner_avatar}>
              <Image
                alt="user-avatar"
                objectPosition={"center"}
                objectFit="cover"
                width={45}
                height={45}
                layout="fixed"
                src={`/static/assets/images/avatars/${id}.jpg`}
                quality={100}
              />
            </div>
            <div className={styles.nft_owner_info}>
              <span className={styles.owned_by}>owned by</span>
              <Link href={"/authors"}>
                <a className={styles.nft_owner_link}>salvador dali</a>
              </Link>
            </div>
          </div>
          <div className={styles.nft_bid_wrapper}>
            <span className={styles.current_bid}>current bid</span>
            <span className={styles.current_bid_value}>3.34 ETH</span>
          </div>
        </div>
        {!live && (
          <div className={`${styles.nft_info_row}`}>
            <button className={styles.nft_place_bid_btn}>
              <IoBagAddSharp className="me-2" />
              <span>place bid</span>
            </button>
            <Link href={"/login"}>
              <a className={styles.nft_activity_link}>
                <MdLoop className="me-2" />
                <span>view history</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
