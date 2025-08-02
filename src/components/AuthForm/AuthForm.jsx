import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./AuthForm.module.css";

export default function AuthForm({ fields, buttonText, extraLinks, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {fields.map((field, idx) =>
        field.row ? (
          <div key={idx} className={styles.row}>
            {field.row.map((subField, subIdx) => (
              <Input key={subIdx} {...subField} />
            ))}
          </div>
        ) : (
          <Input key={idx} {...field} />
        )
      )}
      {extraLinks && <div className={styles.extra}>{extraLinks}</div>}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}
