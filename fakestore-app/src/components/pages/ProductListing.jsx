import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container className="py-5">
            <h1 className="text-center text-light mb-4">Product Listing</h1>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <div className="card h-100 text-center">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="card-img-top img-fluid p-3" 
                            style={{ height: "200px", objectFit: "contain" }}
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title fs-6">{product.title}</h5>
                            <p className="card-text text-muted">${product.price.toFixed(2)}</p>
                            <Link to={`/products/${product.id}`}>
                                <Button variant="primary" size="sm">View Details</Button>
                            </Link>
                        </div>
                    </div>
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductListing;
