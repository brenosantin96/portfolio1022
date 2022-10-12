import React from 'react'
import './HomeSectionStyle.css';
import brenoFoto from "../assets/me2.jpg";

export function AboutMe() {
  return (
    <div className='container'>AboutMe
      <div className="containerAboutMe">
        <div className="leftAboutMe">
          <img src={brenoFoto} className="brenoFoto" alt="" />
        </div>
        <div className="rightAboutMe">
          <h2>
            Sobre mim
          </h2>
          <p>Apasionado por la tecnología, graduado en sistemas de información, trabajé en el área de soporte técnico de software y ventas de software desde 2017.
            En 2021 hasta ahora he estado desarrollando sitios web y sistemas web como autónomo. </p>
          <p>Me enfoco en el desarrollo con Javascript, Typescript, React, Node entre otras tecnologías que utilizo para crear aplicaciones web.
            ¡Disfruto automatizar procesos, resolver problemas y aprender!</p>
          <p>Vivo en Madrid desde el año pasado, puedo hablar en portugués, español e inglés.</p>
          <p>Algunos de mis proyectos: <br />
            GitHub: https://github.com/brenosantin96</p>
          <p>Mi sitio web: <br />
            https://brenosantin.com</p>
          <p>“Nem ganhar, nem perder, mas procurar evoluir”, <br /> <span>Charlie Brown Jr.</span></p>
        </div>
      </div>
    </div>
  )
}
