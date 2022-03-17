import React from 'react'

export default function TopCard(props) {
    return (
        <div className="col-lg-3 Top-Card">
            <div className="shadow-top">
                <div className="top-card">

                    <img src={`http://localhost:8000/${props.pic}`} alt="" />

                </div>
            </div>
            <div className="bottom-card">
                <h1 className="bottom-card-text">{props.productName}</h1>
                <h3 className="bottom-card-price">${props.productPrice}</h3>
            </div>


        </div>
    )
}
