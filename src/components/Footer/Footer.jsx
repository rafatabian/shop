import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer__main-div">
      <h1>Contact</h1>
      <p>fabianrwork@gmail.com</p>
      <h2>Images used in this website are the property of
        <Link className="home__brands_links" to={"https://www.audi.co.uk/uk/web/en.html"}> Audi </Link>
        <Link className="home__brands_links" to={"https://www.bmw.co.uk/en/index.html"}> BMW </Link>
        <Link className="home__brands_links" to={"https://www.mercedes-benz.com/en/"}> Mercedes </Link>
        <Link className="home__brands_links" to={"https://www.tesla.com/en_gb"}> Tesla </Link>
      </h2>
      <h3>This website is for demonstrative purposes only. We do not sell any products or services. The content and information provided on this site are intended for illustrative purposes.</h3>
    </div>
  )
}
export default Footer