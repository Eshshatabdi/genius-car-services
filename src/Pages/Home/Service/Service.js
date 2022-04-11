import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>Description:{description}</p>
            <button>Book:{name}</button>


        </div>
    );
};

export default Service;