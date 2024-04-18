import "./Footer.css"
import arrow from "../../Assets/arrow.webp"
import linkedin from "../../Assets/linkedin.webp"
import github from "../../Assets/github.webp"
import whatsapp from "../../Assets/whatsapp.webp"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__Container">
                <img
                    src={arrow}
                    className="arrow"
                />

                <ul>
                    <li>
                    <a><img src={whatsapp} /></a>
                    </li>
                    <li>

                        <a><img src={github} /></a>

                    </li>
                    <li>

                        <a><img src={linkedin} /></a>
                    </li>
                </ul>
            </div>
            <div >
             <p>Projeto sem fins lucrativos.</p>
            </div>
        </div>
    )
}