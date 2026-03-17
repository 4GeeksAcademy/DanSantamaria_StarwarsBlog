import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export const Characters = () => {

    return (
        <div className="container">
            <h1>Characters</h1>
            <div className="d-flex">
                <Card
                    name="Luke Skywalker"
                    gender="male"
                    hair="blonde"
                    eyes="Green"
                    uid="1"
                    type="characters"
                />
            </div>
        </div>
    );
};
