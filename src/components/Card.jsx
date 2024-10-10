import { useEffect } from "react";
import { useState } from "react";

export default function Card({ name, url, handleClick}) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setImage(data.sprites.front_shiny));
        
    }, []);

    return (
        <div className="cards" onClick={() => {
            handleClick(name);
        }}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}