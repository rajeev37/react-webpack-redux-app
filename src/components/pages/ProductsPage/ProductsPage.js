import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsApi } from "../../../redux/actions/productActions";
import ProductList from '../../molecules/ProductList/ProductList';

const ProductsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsApi());
    }, [])

    return (
        <div className="cards">
            <ProductList/>
        </div>
    )
}

export default ProductsPage
