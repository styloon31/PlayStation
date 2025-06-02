import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    intent: "",
  });

  const [status, setStatus] = useState("idle"); // "idle", "sending", "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_20wl6nh",    // Replace
        "template_qjiy37c",   // Replace
        formRef.current,
        "PPXFI6RsxLZwkpKVU"     // Replace
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          intent: "",
        });
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">INQUIRY FORM</h2>

      {status === "success" && (
        <div className="text-green-600 bg-green-100 p-3 rounded mb-4">
          Message sent successfully!
        </div>
      )}

      {status === "error" && (
        <div className="text-red-600 bg-red-100 p-3 rounded mb-4">
          Error sending message. Try again.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form_title" value="Contact Inquiry" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full p-3 border border-gray-200 rounded"
        />

        <select
          name="intent"
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded"
        >
          <option value="">Select Buy or Sell</option>
          <option value="Buy">I want to Buy</option>
          <option value="Sell">I want to Sell</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-200 rounded"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full p-3 text-white rounded ${
            status === "sending" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
