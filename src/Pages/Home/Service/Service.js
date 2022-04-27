import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service
    const navigate = useNavigate();


    const navigateTiServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>Description:{description}</p>
            <button onClick={() => navigateTiServiceDetail(_id)} className='btn btn-primary'>Book:{name}</button>


        </div>
    );
};

export default Service;