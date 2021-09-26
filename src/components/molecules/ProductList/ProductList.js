import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const products = useSelector(state => state.allProducts.products);
    
    const renderList = products.map((product) => {
        const {id, title, price, category, image} = product;
        return (
            
                <ul className="card list-style" key={id}>
                    <Link to={`/product/${id}`}>
                    <li>
                        <div className="image">
                            <img src={image} alt={title}></img>
                        </div>
                        <div className="card-content">
                            <h4 className="content">{title}</h4>
                            <p className="content">${price}</p>
                            <p className="content">{category}</p>
                        </div>
                    </li>
                    </Link>
                </ul>
            
        )
    })
    return (
        <>{renderList}</>
    )
}

export default ProductList
