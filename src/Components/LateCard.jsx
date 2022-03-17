import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import notify from '../Context/notify';

export default function LateCard({ id, pic, productName, productPrice, oldPrice, description }) {

    const product = {
        id, pic, productName,
        productPrice,
        price: productPrice,
        oldPrice, description
    }

    const { items, addItem, removeItem } = useCart();

    const CheckProduct = (product) => {
        const checkItem = (item) => {
            return item.id === product.id
        };

        const inCart = items.findIndex(checkItem);

        if (inCart > -1) {
            removeItem(product.id);
            notify("Product Already In Cart", "warn");
        } else {
            addItem(product);
            notify("Product Added Successfully", "success");
        }
    }

    return (
        <div className="col-lg-4">
            <div className="latest-card">

                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="image-latest">
                    <div className="icons-latest">
                        <i onClick={() => CheckProduct(product)} className="fa fa-cart-plus item-action" />
                        <i className="fa fa-heart item-action" />
                        <i className="fa fa-search-plus item-action" />
                    </div>


                    <div className=''>
                        <img src={`http://localhost:8000/${pic}`} alt="" className="card-img-top img-late" />

                    </div>
                    
                </div>
                <div className="card-latest">
                    <div className="row">

                        <div className="col-lg-7">
                            <p id='text-l'>{productName}</p>
                        </div>
                        <div className="col-lg-1">
                            <p id='after'>${productPrice}</p>
                        </div>
                        <div className="col-lg-1">
                            <p id='before'>${oldPrice}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
