import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { saveAddress, clearAddress } from "../Reducer/addressSlice";
import { pushToDataLayer, buildUserData } from "../../lib/gtm";
import "./address.css";

const Address = () => {
  const savedAddress = useSelector((state) => state.address.saved);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [editing, setEditing] = useState(!savedAddress);

  const handleSave = (address) => {
    dispatch(saveAddress(address));

    pushToDataLayer({
      event: savedAddress ? "update_address" : "save_address",
      user_data: buildUserData(address),
    });

    setEditing(false);

    if (redirect === "checkout") {
      navigate("/checkout");
    }
  };

  const handleDelete = () => {
    dispatch(clearAddress());
    pushToDataLayer({ event: "delete_address" });
    setEditing(true);
  };

  return (
    <div className="address-page">
      <h1 className="address-title">My Delivery Address</h1>
      <p className="address-subtitle">
        Save your address once and we'll use it for every order.
      </p>

      {editing ? (
        <AddressForm
          initialValues={savedAddress}
          submitLabel={savedAddress ? "Update Address" : "Save Address"}
          onSubmit={handleSave}
          onCancel={savedAddress ? () => setEditing(false) : undefined}
        />
      ) : (
        <AddressCard
          address={savedAddress}
          onChange={() => setEditing(true)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Address;
