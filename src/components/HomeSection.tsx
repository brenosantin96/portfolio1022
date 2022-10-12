import React from 'react'
import gokuGIF from "../assets/gokuGif.gif";
import './HomeSectionStyle.css';

export function HomeSection() {
    return (
        <div className='container containerHomeSection mt-3'>
            <div className='leftContainer'>
                <div className='presentation'>Olá, o meu nome é</div>
                <div className='name'>Breno Santin</div>
                <div className='work'>
                    <span className='dev'>Desenvolvedor</span> <span className='fullstack'>FullStack</span>
                </div>
                <div className="textPresentation">
                    Eu sou um Desenvolvedor Front-end, me encontro no momento estudando para conseguir ingressar no mercado de trabalho como Desenvolvedor Front-end Junior.
                </div>
                <a href="#" className='buttonLink mt-3'>Descargar Curriculo</a>
            </div>
            <div className='rightContainer'>
                <img src={gokuGIF} className="gokuImg" alt="" />
            </div>
        </div>
    )
}

