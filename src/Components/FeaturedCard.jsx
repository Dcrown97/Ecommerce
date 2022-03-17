import React from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import notify from '../Context/notify';
import Button from './Button'

export default function FeaturedCard({ id, pic, productName, productPrice, oldPrice, description }) {

    const product = {
        id, pic, productName,
        productPrice,
        price: productPrice,
        oldPrice, description
    }


    const { items, addItem } = useCart();

    const CheckProduct = (product) => {
        const checkItem = (item) => {
            return item.id === product.id
        };

        const inCart = items.findIndex(checkItem);

        toast.configure({
            position: toast.POSITION.TOP_RIGHT,
            toastId: 1
        });

        if (inCart > -1) {
            // removeItem(product.id);
            notify("Product Already In Cart", "warn");
        } else {
            addItem(product);
            notify("Product Added Successfully", "success");

        }

    }


    const WishList = (product) => {
        const checkItem = (item) => {
            return item.id === product.id
        };

        const inCart = items.findIndex(checkItem);

        toast.configure({
            position: toast.POSITION.TOP_RIGHT,
            toastId: 1
        });

        if (inCart > -1) {
            // removeItem(product.id);
            notify("Product Already In Cart", "warn");
        } else {
            let wish = { ...product, 'type': 'wish' }
            console.log('wishlist', wish)
            addItem(wish);
            notify("Product Added Successfully", "success");

        }

    }

    // const product = {
    //     id, pic, productName,
    //     productPrice,
    //     price: productPrice,
    //     oldPrice, description
    // }

    return (
        <div className="col-lg-3">
            <div className="card card-feature">

                <div className="image-feature">
                    <div className="icons-feature">
                        <i onClick={() => CheckProduct(product)} className="fa fa-cart-plus item-action" />
                        <i onClick={() => WishList(product)} className="fa fa-heart item-action" />
                        <i className="fa fa-search-plus item-action" />
                    </div>

                    <div className=''>
                        <img src={`http://localhost:8000/${pic}`} alt="" className="card-img-top" />

                    </div>

                    <div id='btn'>
                        <Link to={`/details/${id}`}>
                            <Button btnClass="btn-feature" btnText="view details" />
                        </Link>
                    </div>
                </div>
                <div className="card-details">
                    <p className="card-title-feature text-center">{productName}</p>
                    <div className="circled">
                        <span className="sm-circled-feature circle1 " />
                        <span className="sm-circled-feature circle2" />
                        <span className="sm-circled-feature circle3" />
                    </div>

                    <p className="color-code text-center">Code - Y523201</p>


                    <div className="prices-bottom text-center">
                        <span className="card-price">${productPrice}</span>

                        <br />

                    </div>
                </div>
            </div>

        </div>
    )
}
