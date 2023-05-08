import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, delProduct} from '../redux/actions/productAction';

const Cart = () => {

    const state = useSelector((state) => state.cart)
    const dispatch = useDispatch() 

    
    const totalPrice = state.reduce(getTotal, 0).toFixed(2)

    function getTotal(total, state){
        return (total + state.qty * state.price)
            
    }


    const handleAdd = (item) => {
        dispatch(addProduct(item))
    }
    const handleDel = (item) => {
        dispatch(delProduct(item))
    }

    const EmptyCart = () => {
        return (
                <div class="container-fluid  mt-100">
                    <div class="row">
                        <div class="col-sm-12 empty-cart-cls text-center">
                            <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3" />
                            <h3><strong>Your Cart is Empty</strong></h3>
                            <h4>Add something to make me happy &#128512;</h4>
                            <br></br>
                            <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue shopping</a>
                        </div>
                    </div>
                </div>
            )
    }

    const CartItems = ({ product }) => {

        return (
            <div className='cart-items'>
                             
                {product.map((prod) => {
                    const { id, image, title, price, qty } = prod;
                    return (
                        <div className="cart-items-list" key={id}>
                            <img className="cart-items-image" src={image} alt={title} />
                            <div className="cart-items-name">{title}</div>
                            <div className='cart-items-function'>
                                <button className="cart-items-remove" onClick={() => handleDel(prod)}>
                                    {/* <i class="angle down icon"></i>  */} -
                                </button>
                                 <p className='cart-items-quantity'>{qty}</p>
                                <button className="cart-items-add" onClick={() => handleAdd(prod)}>
                                    {/* <i class="plus square outline icon"></i> */} +
                                </button>
                                <div className='cart-items-price'>
                                    $ {prod.qty * price}
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                <div className='cart-items-total-price-name'>
                    Total price
                    <div className='cart-items-total-price'>
                        ${totalPrice}
                    </div>
                </div>
            </div>
        )

    }
    const Back = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <a href='/' className='back'>
                        <i class="chevron circle left icon"></i>
                        </a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 ? <EmptyCart /> : <CartItems product={state} />}
            {state.length !== 0 && <Back />}
        </div>
    );
}

export default Cart;
