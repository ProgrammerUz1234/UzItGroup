import React from "react";
import styles from "./Questions.module.scss";
import Form from "./Form";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const { t } = useTranslation();
  return (
    <section className={styles.questions}>
      <div className="w-[90%] m-auto ques_container">
        <h2 className="text-[90px] font-bold">{t("questions.title")}</h2>
        <div className="flex m-auto justify-between pr-[50px] ques_form">
          <Form />
          <img src="./qr-code.png" alt="" />
        </div>
      </div>
      <p className="text-center mt-[70px] font-bold text-[18px]">
        {t("questions.subtitle")}
      </p>
    </section>
  );
}
