import React from "react";
import styles from "./component.module.sass";
import Link from "next/link";
import Image from "next/image";

export default function WalletConnectComponent({ id, name, link, icon }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
      <div className={styles.wallet_connect_component}>
        <div className={`${styles.component_icon} ${icon && styles.iconed}`}>
          {!icon ? (
            <Image
              alt="wallet_connect_method_icon"
              layout="fixed"
              width={55}
              height={55}
              src={`/static/assets/images/connects/${id}.png`}
              quality={100}
              loading="eager"
              objectFit="contain"
            />
          ) : (
            icon
          )}
        </div>
        <Link href={link}>
          <a className={styles.login_link}>{name}</a>
        </Link>
        <div className={styles.component_overview}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          perferendis error provident aut qui.
        </div>
      </div>
    </div>
  );
}
