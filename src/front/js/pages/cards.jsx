import React, { useContext, useEffect, useState } from "react";

import "../../styles/home.css";

const Cards = (props) => {
    return (
        <>
            <div className="card" style={{ width: "250px" }}>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.id + ".png"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>

            <br />
        </>
    )
}

export default Cards
