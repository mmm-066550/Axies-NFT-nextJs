import React from "react";
import styles from "./view-row.module.sass";
import Link from "next/link";

export default function ViewRow({ children, title, link, g_0 }) {
  return (
    <div className={`${styles.view_row} py-3 my-1`}>
      <div className="container ">
        <div className={`row py-3 align-items-center`}>
          <div className="col">
            <h4 className={styles.view_row_title}>{title}</h4>
          </div>
          <div className="col text-end">
            <Link href={link}>
              <a className={styles.view_row_more_link}>explore more</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${g_0 && "g-0"} row`}>{children}</div>
      </div>
    </div>
  );
}
