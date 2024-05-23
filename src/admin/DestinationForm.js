import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DestinationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        location: ''
    });
    const [file, setFile] = useState(null);
    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/destinations/${id}`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the destination!', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('location', formData.location);
        if (file) {
            data.append('image', file);
        }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        if (id) {
            axios.put(`http://localhost:5000/api/destinations/${id}`, data, config)
                .then(() => {
                    history.push('/');
                })
                .catch(error => {
                    console.error('There was an error updating the destination!', error);
                });
        } else {
            axios.post('http://localhost:5000/api/destinations', data, config)
                .then(() => {
                    history.push('/');
                })
                .catch(error => {
                    console.error('There was an error creating the destination!', error);
                });
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Destination' : 'Add Destination'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" name="image" onChange={handleFileChange} />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default DestinationForm;
