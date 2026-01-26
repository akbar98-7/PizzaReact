import React from 'react'

const Card = ({ item }) => {
    return (
        <div>
            <div className="card h-100 shadow-sm border-0" >
                <img src={item?.img} class="card-img-top w-60" alt="..." style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text text-muted">{item.subtitle}</p>

                </div>
            </div>
        </div>
    )
}


export default Card
