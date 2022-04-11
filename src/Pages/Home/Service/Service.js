import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img className='w-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>Description:{description}</p>
            <button className='btn btn-primary'>Book:{name}</button>


        </div>
    );
};

export default Service;