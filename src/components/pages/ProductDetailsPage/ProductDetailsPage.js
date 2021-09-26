import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { removeSelectedProduct, fetchProductDetailsApi } from "../../../redux/actions/productActions";

const ProductDetailsPage = () => {
    const product = useSelector(state => state.product);
    const {title, price, category, image, description} = product;
    const dispatch = useDispatch();
    const { productId } = useParams();

    useEffect(() => {
        if(productId && productId !=="") dispatch(fetchProductDetailsApi(productId));
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])
    
    return (
        <div>
            {
                Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <div className="cards">
                        <div className="image">
                            <img src={image} alt={title}></img>
                        </div>
                        <div className="card-content">
                            <h4 className="content">{title}</h4>
                            <p className="content">${price}</p>
                            <p className="content">{category}</p>
                            <p className="content">{description}</p>
                        </div>
                    </div>
                )
            }            
        </div>
    )
}

export default ProductDetailsPage
