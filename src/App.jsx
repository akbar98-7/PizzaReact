import './App.css'
import { Link } from 'react-router-dom'
import pizzalogo from './assets/pizzaLogo.png'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact' 


function App() {

  return (
    <>

      <div>

        <nav className="navbar navbar-expand-lg p-0">

          <div className="container-fluid bg-black py-4 mb-0 ">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  mt-0 pt-0 gap-5 " id="navbarNav">
              <img src={pizzalogo} alt="" width={150} />
              <ul className="navbar-nav gap-5 mx-5  ">
                <Link to="/" className="nav-link fs-2 text-white">
                  Home
                </Link>

                <Link to="/menu" className="nav-link fs-2 text-white">
                  Menu
                </Link>

                <Link to="/aboutus" className="nav-link fs-2 text-white">
                  About Us
                </Link>

                <Link to="/contact" className="nav-link fs-2 text-white">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>










      </div>

    </>
  )
}

export default App
