// Admin.js
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
const Admin = () => {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin/destinations">Destinations</Link>
                        </li>
                        <li>
                            <Link to="/admin/add">Add Destination</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
};
        <div>
            <h1>Welcome to the Admin Page</h1>
            <p>Select an option from the menu.</p>
        </div>

export default Admin;
