import React from 'react';

const ProductsCard = ({ product }) => {
    const { img, name, price, ratings } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="products" className="w-96 h-72 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p>Ratings:{ratings}</p>
                <h2 className="card-title">{name}</h2>
                <p className="text-center">${price}</p>

            </div>
        </div>
    );
};

export default ProductsCard;