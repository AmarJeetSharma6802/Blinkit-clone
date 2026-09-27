import React from "react";
import "./address.css";

const AddressCard = ({ address, onChange, onDelete }) => {
  return (
    <div className="address-card">
      <div className="address-card-icon">
        <i className="fa-solid fa-location-dot"></i>
      </div>

      <div className="address-card-body">
        <p className="address-card-name">{address.name}</p>
        <p className="address-card-text">
          {address.house}, {address.area}, {address.city} - {address.pincode}
        </p>
        <p className="address-card-phone">
          <i className="fa-solid fa-phone"></i> +91 {address.phone}
        </p>
      </div>

      <div className="address-card-actions">
        <button type="button" className="address-change" onClick={onChange}>
          Change
        </button>
        {onDelete && (
          <button type="button" className="address-delete" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
