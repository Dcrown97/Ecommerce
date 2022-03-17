import React, { useState } from "react";
import { useCart } from "react-use-cart";
import notify from "../Context/notify";

function CartProduct({ img, price, qty, productName, item }) {
  const [quantity, setQty] = useState(qty);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const deleteItem = () => {
    removeItem(item.id);
    notify("Product Removed", "warn");
  };

  const decreaseQty = (qty) => {
    if (quantity > 0) {
      setQty(quantity - 1);
    } else {
      setQty(quantity + 0);
    }
  };
  return (
    <div>
      <button className="btn btn-danger ms-2" onClick={() => deleteItem(item.id)} style={{ float: "right" }}>
        Remove Product
      </button>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-3">
              <img src={`http://localhost:8000/${img}`} alt="" style={{ width: "70px", height: "70px" }} />
            </div>
            <div className="col-lg-9">
              <h6>{productName}</h6>
              <p>
                Color: Brown{" "}
                {/* <span style={{ float: "right" }}>$32.00</span> */}
              </p>
              <p>Size: XL</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">${price}</p>
        </div>
        <div className="col-lg-2">
          <div>
            <h6 className="pt-4">
              <i
                style={{ cursor: "pointer" }}
                class="fa fa-minus"
                aria-hidden="true"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              ></i>
              <span>{qty}</span>
              <span>
                <i
                  style={{ cursor: "pointer" }}
                  class="fa fa-plus"
                  aria-hidden="true"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                ></i>
              </span>
            </h6>
          </div>
        </div>
        <div className="col-lg-2">
          <p className="pt-4">${price * qty}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartProduct;
