import React from 'react'

export default function CardTrending(props) {
    return (
        <div className="col-lg-3">
            <div className="card trending-card">

                <div className="card-body">
                    <div className="image-latest">

                        <img src={`http://localhost:8000/${props.pic}`} alt="" className="card-img-top " />

                    </div>
                    <div className="card-latest">
                        <div className="row">

                            <div className="col-lg-12">
                                <p id='text-trend'>{props.productName}</p>
                            </div>
                            <div className="col-lg-12 trend-price">
                                <span id='after-trend'>${props.productPrice}</span>
                                <span id='before-trend'>${props.oldPrice}</span>
                            </div>

                            <div className="col-lg-6">

                            </div>
                            <div className="col-lg-6">

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
