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
          <Link to="/">
            <li>{t("header.links1")}</li>
          </Link>
        </a>
        <a href="#menu-link">
          <Link to="/team">
            <li>{t("header.links2")}</li>
          </Link>
        </a>
        <a href="#menu-link">
          <Link to="/services">
            <li>{t("header.links3")}</li>
          </Link>
        </a>
        <a href="#menu-link">
          <Link to="/review">
            <li>{t("header.links4")}</li>
          </Link>
        </a>
        <a href="#menu-link">
          <Link to="/contact">
            <li>{t("header.links5")}</li>
          </Link>
        </a>
        <a href="#menu-link">
          <Link to="/questions">
            <li>{t("header.links6")}</li>
          </Link>
        </a>
      </ul>
    </div>
  );
}
