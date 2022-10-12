import { NavLink } from "react-router-dom";
import logoIMG from "../assets/LogoBrenoPNGDark2.png";
import './NavbarStyle.css';


export const NavbarCustom = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarattributes">
            <div className="container d-flex">
                <div className="logo">
                    <NavLink className="navbar-brand" to="/main">
                        <img className="imgLogo" src={logoIMG} alt="" />
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item p-2">
                            <NavLink className="linksnavbarMenu" to="/main">Home</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="linksnavbarMenu" to="/obras">Sobre</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="linksnavbarMenu" to="/facturas">Habilidades</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="linksnavbarMenu" to="/provedores">Projetos</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <NavLink className="linksnavbarMenu" to="/provedores">Contato</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}