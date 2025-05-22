"use client"
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">INQUIRY FORM</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border-0 h-12 w-full px-4"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border-0 h-12 w-full px-4"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-50 border-0 h-12 w-full px-4"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-50 border-0 min-h-[120px] w-full px-4 py-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
