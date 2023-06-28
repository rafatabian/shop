import "./Home.css"
import Welcome from "../../components/welcome/welcome"
import Anunt from "../../components/anunt/Anunt"
import Soon from "../../components/Soon/Soon"
import AIntro from "../../components/AIntro/AIntro"
import Footer from "../../components/Footer/Footer"


const Home = () => {

  return (
    <div className="Home__container">
      <Welcome />
      <AIntro />
      <Anunt />
      <Soon />
      <Footer />
    </div>
  )
}

export default Home