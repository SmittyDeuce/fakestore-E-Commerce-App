//fetch and display product listing page from (https://fakestoreapi.com/products) image title price

import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
}


export default ProductDetails;