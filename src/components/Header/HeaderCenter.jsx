import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export default function HeaderCenter() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header center */}
      <ul className="flex items-center">
        <a href="#menu-link">
          <li>{t("header.links1")}</li>
        </a>
        <a href="#menu-link">
          <li>{t("header.links2")}</li>
        </a>
        <a href="#menu-link">
          <li>{t("header.links3")}</li>
        </a>
        <a href="#menu-link">
          <li>{t("header.links4")}</li>
        </a>
        <a href="#menu-link">
          <li>{t("header.links5")}</li>
        </a>
        <a href="#menu-link">
          <li>{t("header.links6")}</li>
        </a>
      </ul>
    </div>
  );
}
