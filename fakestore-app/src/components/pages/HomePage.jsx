import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []);

    const handleClick = (id) => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className="container">
            <h1>Home Page</h1>
            <ul className="list-group">
                {data.map(item => (
                    <li key={item.id} className="list-group-item" onClick={() => handleClick(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default HomePage;