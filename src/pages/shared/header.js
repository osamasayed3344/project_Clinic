import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export default function Header(){
    return(
        <header className="Flexable">
            <Link to="/"><img id="logo" src={logo} alt="Logo"></img></Link>
            <div className="settings Flexable">

                <div className="languages borderLeft Flexable">
                    <button className="removeBackground">Ar</button>
                    <button className="removeBackground">En</button>
                    <button className="removeBackground">Fr</button>
                </div>

                <div className="socialmedia borderLeft Flexable">
                <Link to="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></Link>
                <Link to="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></Link>
                <Link to="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></Link>
                <Link to="https://www.x.com/" target="_blank"><i class="fa-brands fa-twitter"></i></Link>
                <Link to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
                </div>

                <div className="darkmode Flexable">
                    <button className="removeBackground"><i class="fa-solid fa-circle-half-stroke"></i></button>
                </div>
            </div>
        </header>
    );
}