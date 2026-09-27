import React, { useState } from "react";
import "./address.css";

const emptyAddress = {
  name: "",
  phone: "",
  house: "",
  area: "",
  city: "",
  pincode: "",
};

const validate = (values) => {
  const errors = {};

  if (values.name.trim().length < 2) errors.name = "Please enter your name";
  if (!/^[6-9]\d{9}$/.test(values.phone))
    errors.phone = "Enter a valid 10 digit mobile number";
  if (!values.house.trim()) errors.house = "Enter flat / house no.";
  if (!values.area.trim()) errors.area = "Enter area / street";
  if (!values.city.trim()) errors.city = "Enter city";
  if (!/^\d{6}$/.test(values.pincode))
    errors.pincode = "Enter a valid 6 digit pincode";

  return errors;
};

const AddressForm = ({ initialValues, onSubmit, submitLabel, onCancel }) => {
  const [values, setValues] = useState({ ...emptyAddress, ...initialValues });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit({
        name: values.name.trim(),
        phone: values.phone,
        house: values.house.trim(),
        area: values.area.trim(),
        city: values.city.trim(),
        pincode: values.pincode,
      });
    }
  };

  const field = (name, label, props = {}) => (
    <div className="address-field">
      <label htmlFor={`address-${name}`}>{label}</label>
      <input
        id={`address-${name}`}
        name={name}
        value={values[name]}
        onChange={handleChange}
        className={errors[name] ? "has-error" : ""}
        {...props}
      />
      {errors[name] && <p className="address-error">{errors[name]}</p>}
    </div>
  );

  return (
    <form className="address-form" onSubmit={handleSubmit} noValidate>
      {field("name", "Full name", { autoComplete: "name" })}
      {field("phone", "Mobile number", {
        type: "tel",
        inputMode: "numeric",
        maxLength: 10,
        autoComplete: "tel-national",
      })}
      {field("house", "Flat / House no. / Building", {
        autoComplete: "address-line1",
      })}
      {field("area", "Area / Street / Landmark", {
        autoComplete: "address-line2",
      })}
      <div className="address-row">
        {field("city", "City", { autoComplete: "address-level2" })}
        {field("pincode", "Pincode", {
          inputMode: "numeric",
          maxLength: 6,
          autoComplete: "postal-code",
        })}
      </div>

      <div className="address-actions">
        {onCancel && (
          <button type="button" className="address-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="address-submit">
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
