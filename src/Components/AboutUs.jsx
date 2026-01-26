import React from 'react'
import makingpizzaImg from '../assets/makingpizza.jpeg'

const AboutUs = () => {
    return (
        <div>

            <h1 className="display-1 fw-semibold text-center mt-5">About Us</h1>

            <div className="d-flex mx-5 mt-5 px-5 gap-5">
                <img src={makingpizzaImg} alt='' width={400}></img>
                <p className="mt-5 fs-3 fw-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                    molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                    nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                    error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                    officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                    Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                    cumque velit</p>
            </div>
        </div>
    )
}

export default AboutUs
