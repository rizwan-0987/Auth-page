import React from "react";
import styles from "./AuthLayout.module.css";
import { Link } from "react-router-dom";
import scooterImg from "../../assets/auth_page/Saly-3.png";
import floatingPersonImg from "../../assets/auth_page/Saly-2 (1).png";


export default function AuthLayout({
  children,
  title,
  subtitle,
  linkText,
  linkTo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src={scooterImg} alt="Scooter Illustration" />
      </div>

      <div className={styles.rightSection}>
        <img
          src={floatingPersonImg}
          alt="Floating Person"
          className={styles.floatingImage}
        />
      </div>

      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <h2>
            Welcome to <span>Auth page</span>
          </h2>
          <div className="sign-btn">
            <p>{subtitle}</p>
            <Link to={linkTo}>{linkText}</Link>
          </div>
        </div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
