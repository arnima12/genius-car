import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setISAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search]);
    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }
    return (
        <div>
            <div className="text-center">
                <h4 className="text-sm font-bold text-red-600"> Services</h4>
                <h2 className="py-6 text-3xl md:text-4xl font-bold">
                    Our Service Area</h2>
                <p className="py-6 text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                <input className="input input-sm mb-8 border-red-400" ref={searchRef} type="text" /> 
                <div className="flex justify-center gap-4">
                <button className="btn bg-red-400 border-red-400 w-24" onClick={handleSearch}>Search</button>
                <button className="btn bg-red-400 border-none w-24" onClick={() => setISAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
                </div>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 place-items-center my-8">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }

            </div>
            <div className="flex justify-center mb-8">
                <button className="btn bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-none">
                    More Services
                </button>
            </div>
        </div>
    );
};

export default Service;