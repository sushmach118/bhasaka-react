import React, { useState } from 'react';
import './Forms.css';

export default function MyForm() {
  const [form, setForm] = useState({ name: '', email: '' });
 const [errors, setErrors] = useState({});

  const validate = ({ name, email }) => {
    const errs = {};
    if (!name) errs.name = 'Name is required';
    else if (!/^[a-zA-Z]+$/.test(name)) errs.name = 'Letters only';
    else if (name.length >= 15) errs.name = 'Must be exactly 12 letters';

    if (!email) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email format';
    return errs;
  };

  const onChange = e => {
    const { name, value } = e.target;
  if (name === 'name' && !/^[a-zA-Z/s]*$/.test(value)) return;
    if (value.length > 15 && name === 'name') return;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length === 0) {
      alert(`Submitted:\nName: ${form.name}\nEmail: ${form.email}`);
      setForm({ name: '', email: '' });
    } else {
      setErrors(errs);
    }
  };

  return (
    <form onSubmit={onSubmit} className="my-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        {errors.name && <small className="error">{errors.name}</small>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />
        {errors.email && <small className="error">{errors.email}</small>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}



