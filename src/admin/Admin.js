// Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editingAdmin, setEditingAdmin] = useState(null);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('/api/admins');
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const createAdmin = async () => {
    try {
      const newAdmin = { name, email, phone };
      await axios.post('/api/admins', newAdmin);
      setName('');
      setEmail('');
      setPhone('');
      fetchAdmins();
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };

  const updateAdmin = async () => {
    try {
      const updatedAdmin = { name, email, phone };
      await axios.put(`/api/admins/${editingAdmin.id}`, updatedAdmin);
      setEditingAdmin(null);
      setName('');
      setEmail('');
      setPhone('');
      fetchAdmins();
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`/api/admins/${id}`);
      fetchAdmins();
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleEdit = (admin) => {
    setEditingAdmin(admin);
    setName(admin.name);
    setEmail(admin.email);
    setPhone(admin.phone);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {editingAdmin ? (
          <button onClick={updateAdmin}>Update Admin</button>
        ) : (
          <button onClick={createAdmin}>Create Admin</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.phone}</td>
              <td>
                <button onClick={() => handleEdit(admin)}>Edit</button>
                <button onClick={() => deleteAdmin(admin.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
