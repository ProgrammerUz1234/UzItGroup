import React from "react";
import "./Team.css";
import bootstrap from "./assets/bootstrap.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import scss from "./assets/scss.png";
import js from "./assets/js.svg";
import react from "./assets/react.png";
import vue from "./assets/vue.png";
import vuex from "./assets/vuex.png";
import vuetify from "./assets/vuetify.png";
import tailwind from "./assets/tailwind.png";
import git from "./assets/git.png";
import python from "./assets/python.png";
import dj from "./assets/django.png";

const Team = () => {
  return (
    <div className="Team">
      <h1 className="title">Наша команда</h1>
      <div className="container">
        <div className="teacher">
          <img src="" alt="" />
          <h2 className="name">Диёр Хасанов</h2>
          <p className="courses">Фронт-Энд, Компьютерная грамотность</p>
          <div className="skills">
            <img src={html} alt="html" /> <img src={css} alt="css" />
            <img src={scss} alt="scss" /> <img src={js} alt="js" />{" "}
            <img src={react} alt="react" className="react" />
            <img src={vue} alt="vue" /> <img src={vuex} alt="" />{" "}
            <img src={vuetify} alt="" /> <img src={bootstrap} alt="bootstrap" />
            <img src={tailwind} alt="" className="t" />{" "}
            <img src={git} alt="git" />
          </div>
          <p className="experience">Middle Developer</p>
        </div>
        <div className="teacher">
          <img src="" alt="" />
          <h2 className="name">Roma</h2>
          <p className="courses">Фронт-Энд, Компьютерная грамотность</p>
          <div className="skills">
            <img src={html} alt="html" /> <img src={css} alt="css" />
            <img src={scss} alt="scss" /> <img src={js} alt="js" />{" "}
            <img src={react} alt="react" className="react" />{" "}
            <img src={bootstrap} alt="bootstrap" />
            <img src={tailwind} alt="" className="t" />{" "}
            <img src={git} alt="git" />
          </div>
          <p className="experience">Middle Developer</p>
        </div>
        <div className="teacher">
          <img src="" alt="" />
          <h2 className="name">Ramizjon Ziyodullayev</h2>
          <p className="courses">Back-End, kompyuter savodxonligi</p>
          <div className="skills">
            <img src={python} alt="python" /> <img src={dj} alt="" />
          </div>
          <p className="experience">Middle Developer</p>
          <button>More</button>
        </div>
        <div className="teacher">
          <img src="" alt="" />
          <h2 className="name">Shakhnoza</h2>
          <p className="courses">English</p>
          <p className="experience">IELTS 7.5</p>
          <button>More</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
