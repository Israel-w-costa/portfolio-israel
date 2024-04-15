import BannerIsrael from "../../Assets/banner-de-israel-costa.webp"
import "./Banner.css"

export default function Banner() {
    return (
        <div>
         <img
          className="bannerIsrael" 
          src={BannerIsrael} 
          alt="banner com titulo Israel Costa"></img>
        </div>
    )
}