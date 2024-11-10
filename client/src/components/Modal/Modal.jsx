import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.scss';

const Modal = ({ item, itemType, onClose, onItemSaved }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, description };

    try {
      if (item) {
        // Update existing item
        await axios.put(`http://localhost:3000/novedadesModel/${item._id}`, newItem);
      } else {
        // Add new item
        await axios.post(`http://localhost:3000/novedadesModel`, newItem);
      }

      onItemSaved();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{item ? `Edit ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}` : `Add New ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type="submit">{item ? `Update ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}` : `Add ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
