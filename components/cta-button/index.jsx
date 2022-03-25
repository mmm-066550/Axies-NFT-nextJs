import React from "react";
import styles from "./cta-button.module.sass";
import Link from "next/link";

export default function CtaButton({ children, href }) {
  return (
    <Link href={`${href}`}>
      <a className={styles.cta_button_link}>
        <span>{children}</span>
      </a>
    </Link>
  );
}
