import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './SErvices.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='serices-title'>services</h2>
            <div className="services-containet">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;