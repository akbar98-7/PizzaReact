import React from 'react'
import pepperoniImg from '../assets/pepperoni.jpg'
import margheritaImg from '../assets/margherita.jpg'
import pedrotechspecialImg from '../assets/pedrotechspecial.jpg'
import veganImg from '../assets/vegan.jpg'
import pineappleImg from '../assets/pineapple.jpg'
import veryexpensiveImg from '../assets/expensive.jpg'
import Card from './Card'

const Menu = () => {


  const data = [

    {
      title: "Pepperoni Pizza",
      img: pepperoniImg,
      subtitle: "$15.99",

    },
    {
      title: "Margherita Pizza",
      img: margheritaImg,
      subtitle: "$11.99",

    },
    {
      title: "PedroTech Special Pizza",
      img: pedrotechspecialImg,
      subtitle: "$256.53",

    },

    {
      title: "Vegan Pizza",
      img: veganImg,
      subtitle: "$17.99",

    },

    {
      title: "Pineapple Pizza",
      img: pineappleImg,
      subtitle: "$4.99",

    },

    {
      title: "Very Expensive Pizza",
      img: veryexpensiveImg,
      subtitle: "$1007.00",

    },


  ]
  return (

    <div>
      <h1 className="display-1 fw-bold text-center mt-5">Our Menu</h1>
      <br></br>
      <div className='d-flex align-items-center'>
        <div className="row">

          {data.map((item, index) => (
            <div className="col-4" key={index}>
              <Card item={item} />


            </div>
          ))}


        </div>



      </div>

    </div>
  )
}

export default Menu
