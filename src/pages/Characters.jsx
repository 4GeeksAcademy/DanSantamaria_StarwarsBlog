import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export const Characters = () => {

    return (
        <div className="container">
            <h1>Characters</h1>
            <div className="d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};