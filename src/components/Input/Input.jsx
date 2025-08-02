import React, { useState } from "react";
import styles from "./Input.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";



export default function Input({
  label,
  type = "text",
  placeholder,
  name,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={styles.inputGroup}>
      {label && <label>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        )}
      </div>
    </div>
  );
}
