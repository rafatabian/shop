import "./Navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { SearchContext } from "../../Context/searchProvider"

import { IoCarSportSharp } from "react-icons/io5"
import { GrSearch } from "react-icons/gr"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
  const { handleSearch } = useContext(SearchContext)

  const handleChange = (event) => {
    const value = event.target.value
    handleSearch(value)
  }

  return (
    <div className="navbar__main-div">
      <div className="navbar_logo">
        <Link to="/"><h1>Cars UK</h1></Link>
        <IoCarSportSharp className="navbar_icon-logo" />
      </div>

      <div className="navbar_searchbar-container">
        <Link className="navbar_search-link" to={"/"}>
          <input onChange={handleChange} type="text" placeholder="search and scroll" className="navbar__search-input"></input>
        </Link>
        <button type="button">
          < GrSearch className="navbar_icon-search" />
        </button>
      </div>

      <div className="navbar_cart">
        <Link to="/cart"><AiOutlineShoppingCart className="navbar_icon-cart" /></Link>
      </div>

    </div>
  )
}

export default Navbar