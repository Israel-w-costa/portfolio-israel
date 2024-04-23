import "./Main.css"
import IsraelProfile from "../../Assets/israel-profile.webp"

export default function Main() {
    return (
        <div className="main">
            <div className="main_text">
                <div className="main_text-h1">
                    <h1>
                        Programador React

                    </h1>
                </div>
                <div className="main_text-container">
                    <p>
                        Sou estudante de programação há um ano. Durante esse período aprendi
                        ferramentas como HTMl, CSS, e aprofundei na linguagem JavaScript.
                        Atualmente meu objetivo é ter o domínio no Framework React interagindo com a
                        linguagem JS. Ainda mais busco minha primeira oportunidade no mercado de TI.
                    </p>
                </div>
                <div className="main_text-container-a">
                    <a
                        href="https://wa.me/5591981028327?text=opa%2C+visitei+seu+site+do+seu+portfolio%2C+tudo+bem%3F"
                        className="main_text-a">
                        Entrar em contato </a>
                </div>
            </div>

            <div className="main_sectionTwo">
                <img
                    src={IsraelProfile}
                    alt="Imagem de perfil do Israel "
                ></img>
                <div className="main_link">
                    <a
                        href="https://wa.me/5591981028327?text=opa%2C+visitei+seu+site+do+seu+portfolio%2C+tudo+bem%3F"
                        className="main_link-a"
                    >Entrar em contato </a>
                </div>
            </div>
        </div>

    )
}