import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="service" className="w-96 h-72" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-2xl text-red-600 font-semibold">${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-error text-white">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;