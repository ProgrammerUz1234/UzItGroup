import React from "react";
import styles from "./Questions.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  return (
    <form className={styles.form}>
      <input type="text" placeholder={t("questions.form1")} />
      <input type="number" placeholder={t("questions.form2")} />
      <textarea type="text" placeholder={t("questions.form3")} />

      <Button type="submit" width={461} height={52} font={24}>
        {t("questions.button")}
      </Button>
    </form>
  );
}
