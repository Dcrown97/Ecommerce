import React from 'react'

function CheckoutProduct(props) {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img src={`http://localhost:8000/${props.img}`} alt="" />
          </div>
          <div className="col-lg-8">
            <h6>Ut diam consequat</h6>
            <p>Color: Brown <span style={{float: "right"}}>${props.price}</span></p>
            <p>Size: XL</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
