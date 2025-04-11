import { useNavigate } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
            <h1>React Module Project</h1>
            <p>Welcome to my FakeStoreApp.</p>
            <button className="btn btn-primary mt-3" onClick={handleClick}>
                Go to Products
            </button>
        </div>
    );
}

export default HomePage;
