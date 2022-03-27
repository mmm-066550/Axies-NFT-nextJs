import React from "react";
import styles from "./category-card.module.sass";
import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ id, fullWidth, category }) {
  return (
    <div className={`my-3 ${fullWidth && "col-12 col-md-6 col-lg-4 col-xl-3"}`}>
      <div className={styles.category_card_styled}>
        <h3 className={styles.category_name}>{category?.name}</h3>
        <div className={styles.category_img_wrapper}>
          <Link href={"/explore"}>
            <a>
              <Image
                objectPosition={"center"}
                objectFit="cover"
                layout="fill"
                src={`/static/assets/images/categories/${id}.jpg`}
                quality={100}
                alt="category-card"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
