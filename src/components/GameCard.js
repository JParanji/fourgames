import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ title, route }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
            borderRadius: "10px",
            width: "200px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}>
            <h3>{title}</h3>
            <Link to={route} style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px"
            }}>
                Play
            </Link>
        </div>
    );
};

export default GameCard;
