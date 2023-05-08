import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, fetchProduct, addProduct} from '../redux/actions/productAction';
import { current } from '@reduxjs/toolkit';


const ProductDetail = () => {

    //   const product = useSelector((state) => state.selectedProduct.selectedProduct)
    const product = useSelector((state) => state.product)
    const [selProduct, setSelProduct] = useState([])
    const { image, title, price, category, description } = product;
    const productId = useParams().productId;
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    // const [cartProd, setCart] = useState(getLocalStorage())


      const fetchProductDetail = async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) =>{
            console.log("Err:", err)
        });
        setSelProduct(response.data)
        // dispatch(selectProducts(response.data))
      }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail();
            dispatch(fetchProduct(productId))
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId, dispatch])

    const handleCart = (product) => {
        // setCart((current) => {
        //     localStorage.setItem('cartdata', JSON.stringify([...current,product]))
        //     return [...current, product]
        //   )
        dispatch(addProduct(product))
    }

    return (
        <div className="ui grid container">
            {
            Object.keys(product).length === 0 ? (
                <div className='loading'><b>...Loading</b></div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">$ {price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div>
                                    <div className="ui buttons">
                                        <button className="ui button" onClick={() => handleCart(selProduct)}>Add to Cart</button>
                                            <div className="or"></div>
                                        <button onClick={() => {navigate('/cart')}} className="ui positive button">Go to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
