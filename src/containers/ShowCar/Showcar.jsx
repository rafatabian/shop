import "./Showcar.css"
import { useLocation, Link } from "react-router-dom"
import { Cars } from "../../Cars"
import { useState, useContext } from "react"
import { AnuntContext } from "../../Context/cartProvider"

import { BsFillCaretRightFill } from "react-icons/bs"
import { BsFillCaretLeftFill } from "react-icons/bs"
import { FiTrendingDown } from "react-icons/fi"
import { BsCurrencyPound } from "react-icons/bs"


const Showcar = () => {
  const { addToCart } = useContext(AnuntContext)

  const [currentImg, setCurrentImg] = useState(0)

  {/*importing id prom the "anunt" page*/ }
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const carId = queryParams.get('id');

  {/*current image logic*/ }
  let carsI = 0

  const nextImage = () => {
    (currentImg == carsI - 1)
      ? setCurrentImg(0)
      : setCurrentImg(currentImg + 1)
  }
  const prevImage = () => {
    (currentImg == 0)
      ? setCurrentImg(carsI - 1)
      : setCurrentImg(currentImg - 1)
  }

  return (
    <>
      {Cars.map((anunt) => {

        if (anunt.id == carId) {
          carsI = anunt.imaa.length
          return (

            <div className="showCar__container" key={anunt.id + anunt.miles}>
              <div className="showCar__buttonsAndImg">
                <button className="prev_car-button" onClick={prevImage}><BsFillCaretLeftFill className="shi" /></button>
                <div className="showCar_div-image">
                  <img src={anunt.imaa[currentImg]} alt="car pic" />
                </div>
                <button className="next_car-button" onClick={nextImage}><BsFillCaretRightFill className="shi" /></button>
              </div>
              <div className="showCar_div-text">
                <div className="showCar_header">
                  <h1>{anunt.name}</h1>
                  <p>{anunt.intro}</p>
                </div>

                <div className="showCar_main">
                  <div className="showCar_price">
                    <p>{anunt.price}</p>
                    <div className="showCar_price-icons">
                      <FiTrendingDown className="showCar_first-icon" />
                      <BsCurrencyPound className="showCar_second-icon" />
                    </div>
                  </div>
                  <div className="showCar_addToCart-btn-div">
                    <Link onClick={() => addToCart(anunt.id)} to={"/cart"} className="showCar_add-to-cart-link">Add To Cart</Link>
                  </div>
                  <div className="showCar_span-info">
                    <p>Mileage: <span>{anunt.miles}</span></p>
                    <p>Year of fabrication: <span>{anunt.year}</span></p>
                    <p>Horsepower: <span>{anunt.hp}</span></p>
                    <p>Engine type: <span>{anunt.type}</span></p>
                    <p>Previous owner/s: <span>{anunt.owners}</span></p>
                  </div>
                  <div className="showCar_footer">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                  </div>
                </div>

              </div>
            </div>
          )
        }
      })}
    </>
  )
}
export default Showcar