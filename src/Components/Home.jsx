import React from 'react'
import pizza from '../assets/pizza.jpeg'

const Home = () => {
  return (
    <div className="position-relative w-100">

      <img
        src={pizza}
        className="w-100 d-block"
        style={{ height: 'auto', objectFit: 'cover' }}
        alt="pizza"
      />

      <div
        className="position-absolute top-50 start-50 translate-middle px-3 w-100"
        style={{ color: 'black' }}
      >
        <h1 className="display-1 fw-bold">BEST PIZZA IN TOWN</h1>
        <p className="fs-3">Handcrafted with love since 1990</p>
        <button className="btn btn-warning btn-lg mt-3">Order Now</button>
      </div>
    </div>
  )
}

export default Home

