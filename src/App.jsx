import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './App.css'
import { CartProvider } from './Context/cartProvider'
import { SearchProvider } from './Context/searchProvider'

const LazyNavbar = lazy(() => import("./components/Navbar/Navbar"))
const LazyHome = lazy(() => import("./containers/Home/Home"))
const LazyCart = lazy(() => import("./components/Cart/Cart"))
const LazyShowCar = lazy(() => import("./containers/ShowCar/Showcar"))

const App = () => {

  return (
    <div className='App__div'>
      <CartProvider>
        <SearchProvider>

          <Router>
            <Suspense fallback={<h1 className='App_loading_h'>Loading...</h1>}>
              <LazyNavbar />
              <Routes>
                <Route path="/" element={<LazyHome />} />
                <Route path="/cart" element={<LazyCart />} />
                <Route path="/showCar" element={<LazyShowCar />} />
              </Routes>
            </Suspense>
          </Router>
        </SearchProvider>
      </CartProvider>
    </div>
  )
}

export default App