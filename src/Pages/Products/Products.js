import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <div className="text-center">
                <h4 className="text-sm font-bold text-red-600"> Popular Products</h4>
                <h2 className="py-6 text-3xl md:text-4xl font-bold">
                    Browse Our Products</h2>
                <p className="py-6 text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 place-items-center my-8">
                {
                    products.map(product => <ProductsCard key={products._id} product={product} />)
                }

            </div>
            <div className="flex justify-center mb-8">
                <button className="btn bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-none">
                    More Products
                </button>
            </div>
        </div>
    );
};

export default Products;