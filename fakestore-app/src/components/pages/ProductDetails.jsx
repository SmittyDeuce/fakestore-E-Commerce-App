//fetch and display product listing page from (https://fakestoreapi.com/products) image title price

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="text-center text-light mb-4">{product.title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>${product.price}</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );

}


export default ProductDetails;