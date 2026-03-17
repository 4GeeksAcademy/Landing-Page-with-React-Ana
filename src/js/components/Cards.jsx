import React from "react";

const Cards = (props) => {
    return (
        <div>
            <div className="card h-100 w-100">
                <img src={props.imagen} className="card-img-top" alt={props.nombre} />
                <div className="card-body d-flex flex-column text-start text-md-center">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="#" className="btn btn-primary mt-auto">Go somewhere</a>
                </div>
            </div>
        </div>
    )
    
}

export default Cards;