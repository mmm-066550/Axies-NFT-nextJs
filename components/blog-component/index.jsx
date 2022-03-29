import React from "react";
import styles from "./blog-component.module.sass";
import Image from "next/image";
import Link from "next/link";

export default function BlogComponent({ id }) {
  return (
    <div className="my-3 col-12 col-md-6 col-lg-4">
      <div className={styles.blog_component}>
        <div className={styles.blog_img_wrapper}>
          <Link href={"/blog-details"}>
            <a>
              <Image
                objectPosition={"center"}
                objectFit="cover"
                layout="fill"
                src={`/static/assets/images/blog/${id}.jpg`}
                quality={100}
                alt="blog-card-img"
              />
            </a>
          </Link>
        </div>
        <div className={styles.blog_owner_info_row}>
          <div className={styles.blog_owner}>
            <div className={styles.owner_avatar}>
              <Image
                objectPosition={"center"}
                objectFit="cover"
                layout="fill"
                src={`/static/assets/images/avatars/${id}.jpg`}
                quality={100}
                alt="blog-owner-avatar"
              />
            </div>
            <div className={styles.owner_name}>
              <span>post owner</span>
              <Link href={"/authors"}>
                <a>Silvador dali</a>
              </Link>
            </div>
          </div>
          <p className={styles.blog_date}>Apr 1, 2022</p>
        </div>
        <div className="my-3">
          <Link href={"/blog-details"}>
            <a className={styles.blog_link}>The Next Big Trend In Crypto</a>
          </Link>
        </div>
        <p className={styles.blog_overview}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          suscipit unde eveniet, iusto ab ducimus nulla fugit non alias culpa
          quis nam iure corporis exercitationem. Harum maxime facere libero
          repellendus.
        </p>
        <div className="py-3">
          <Link href={"/blog-details"}>
            <a className={styles.read_more_link}>read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
