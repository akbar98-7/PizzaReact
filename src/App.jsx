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

        <footer className="bg-dark text-light py-4 mt-auto border-top border-secondary">
          <div className="container">
            <div className="row align-items-center">
              {/* Brand/Copyright Section */}
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <h5 className="mb-1 text-uppercase fw-bold" style={{ letterSpacing: '1px' }}>
                  Pizza Brand
                </h5>
                <p className="small text-secondary mb-0">
                  &copy; 2026 Crafted with care. All rights reserved.
                </p>
              </div>

              
              <div className="col-md-6 text-center text-md-end">
                <a href="https://x.com/akbarmirza5" className="text-secondary text-decoration-none mx-2 large text-white">Twitter</a>
                <a href="https://github.com/akbar98-7/PizzaReact" className="text-secondary text-decoration-none mx-2 large text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/mohammad-akber-mirza-613b7b9a/" className="text-secondary text-decoration-none mx-2 large text-white">LinkedIn</a>
              </div>
            </div>
          </div>


          <style>{`
        .hover-light:hover {
          color: #fff !important;
          transition: 0.3s;
        }
        footer {
          background: linear-gradient(180deg, #212529 0%, #1a1d20 100%);
        }
      `}</style>
        </footer>


      </div>

    </>
  )
}

export default App
