import React from 'react'
import './HomeSectionStyle.css';
import bootstrapImg from "../assets/bootstrap.png";
import cssImg from "../assets/css.png";
import gitImg from "../assets/git.png";
import gitHubImg from "../assets/github.png";
import htmlImg from "../assets/html.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import typescriptImg from "../assets/typescript.png";

export function Habilidades() {
    return (
        <div className="container">
            <h1 className='mb-5'>Habilidades</h1>
            <div className="sectionHabilidades d-flex">
                <div className="leftSideAbilities">
                    <div className="row">
                        <div className="col-sm-3 abilitiesImg"><img src={bootstrapImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={cssImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={gitImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={gitHubImg} alt="" /></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 abilitiesImg"><img src={htmlImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={jsImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={reactImg} alt="" /></div>
                        <div className="col-sm-3 abilitiesImg"><img src={typescriptImg} alt="" /></div>
                    </div>
                </div>
                <div className="rightSideAbilities">
                    <div>teste</div>
                </div>
            </div>
        </div>

    )
}

