import React from 'react'
import pizzaleftImg from '../assets/pizzaLeft.jpg'

const Contact = () => {
    return (
        <div className='d-flex align-items-center'>
            {/* Column 1: The Image */}
            <div className="vh-100 overflow-hidden" style={{ flex: '0 0 50%' }}>
                <img src={pizzaleftImg} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
            </div>

            {/* Column 2: Text + Form wrapped in a column container */}
            <div className="p-5 d-flex flex-column" style={{ flex: '1' }}>
                <h1 className='display-1 fw-semibold mb-4'>Contact Us</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name..." />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter message..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg w-100">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
