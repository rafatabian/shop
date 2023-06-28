import "./Cart.css"
import { AnuntContext } from "../../Context/cartProvider"
import { useContext } from "react"
import { Cars } from "../../Cars"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cartCars, removeFromCart } = useContext(AnuntContext)
    let foundMatchingItem = false

    return (
        <div className="cart__main_container">
            {Cars.map((anunt) => {
                if (cartCars.includes(anunt.id)) {
                    foundMatchingItem = true
                    return (
                        <div className="cart__sub_container" key={anunt.id + anunt.miles}>
                            <div className="cart__sub_container_anunt" >
                                <div className="cart__img">
                                    <img src={anunt.imaa[0]} alt="car" />
                                </div>
                                <div className="cart__title_price">
                                    <h1>{anunt.name}</h1>
                                    <h2>{anunt.price}</h2>
                                    <p>&#8220;{anunt.good}&#8222;</p>
                                </div>
                                <div className="cart__buttons">
                                    <button onClick={() => removeFromCart(anunt.id)}>remove</button>
                                    <Link to={`/showCar?id=${anunt.id}`} className="show">Show Info</Link>
                                </div>

                            </div>
                        </div>
                    )
                }
                return null
            })}

            {!foundMatchingItem && <h1 className="cart__empty_text">Empty</h1>}
            {foundMatchingItem && <button className="cart__checkout_btn " onClick={() => alert("This option is not available. We apologize for the inconvenience.")}>Chekout</button>}
        </div>
    )
}

export default Cart