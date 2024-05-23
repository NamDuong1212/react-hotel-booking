import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DestinationDetail = () => {
    const [destination, setDestination] = useState(null);
    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/destinations/${id}`)
            .then(response => {
                setDestination(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the destination!', error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/destinations/${id}`)
            .then(() => {
                history.push('/');
            })
            .catch(error => {
                console.error('There was an error deleting the destination!', error);
            });
    };

    if (!destination) return <div>Loading...</div>;

    return (
        <div>
            <h1>{destination.name}</h1>
            <p>{destination.description}</p>
            <img src={`http://localhost:5000${destination.imageUrl}`} alt={destination.name} />
            <p>{destination.location}</p>
            <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DestinationDetail;
