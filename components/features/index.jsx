import React from "react";
import styles from "./features.module.sass";
import Link from "next/link";
import { IoWallet } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import ViewRow from "../view-row";

export default function Features() {
  return (
    <div className={styles.features_wrapper}>
      <ViewRow title={"Create And Sell Your NFTs"}>
        <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className={styles.feature_item}>
            <div className={`${styles.feature_item_icon} ${styles.feature_1}`}>
              <IoWallet />
            </div>
            <div className={styles.feature_item_info}>
              <Link href="/wallet-connect">
                <a className={styles.feature_item_link}>Set Up Your Wallet</a>
              </Link>
              <p className={styles.feature_item_overview}>
                Wallet that is functional for NFT purchasing. You may have a
                Coinbase account at this point, but very few are actually set up
                to buy an NFT.
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className={styles.feature_item}>
            <div className={`${styles.feature_item_icon} ${styles.feature_2}`}>
              <HiViewGridAdd />
            </div>
            <div className={styles.feature_item_info}>
              <Link href="/wallet-connect">
                <a className={styles.feature_item_link}>
                  Create Your Collection
                </a>
              </Link>
              <p className={styles.feature_item_overview}>
                Setting up your NFT collection and creating NFTs on NFTs is
                easy! This guide explains how to set up your first collection.
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className={styles.feature_item}>
            <div className={`${styles.feature_item_icon} ${styles.feature_3}`}>
              <IoMdPhotos />
            </div>
            <div className={styles.feature_item_info}>
              <Link href="/wallet-connect">
                <a className={styles.feature_item_link}>Add Your NFTs</a>
              </Link>
              <p className={styles.feature_item_overview}>
                Sed ut perspiciatis un de omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem.
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-3">
          <div className={styles.feature_item}>
            <div className={`${styles.feature_item_icon} ${styles.feature_4}`}>
              <BsFillBookmarkDashFill />
            </div>
            <div className={styles.feature_item_info}>
              <Link href="/wallet-connect">
                <a className={styles.feature_item_link}>List Them For Sale</a>
              </Link>
              <p className={styles.feature_item_overview}>
                Choose between auctions, fixed-price listings, and
                declining-price listings. You choose how you want to sell your
                NFTs!
              </p>
            </div>
          </div>
        </div>
      </ViewRow>
    </div>
  );
}
