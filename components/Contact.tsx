"use client";
import { useEffect, useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) setStatus("Message sent successfully!");
      else setStatus(data.error || "Failed to send");
    } catch (err) {
      setStatus("Failed to send");
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mt-2 text-sm text-gray-700">
        Interested in hiring or collaborating? I’m open to talks! Reach out via
        email or the form below.
      </p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold">Email</p>
          <p className="text-sm text-gray-700">cse.sakibhasan@gmail.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <input
          className="p-3 border rounded-md"
          placeholder="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 border rounded-md"
          placeholder="Your email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="col-span-1 sm:col-span-2 p-3 border rounded-md"
          rows={4}
          placeholder="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="sm:col-span-2 text-right">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            {status || "Send message"}
          </button>
        </div>
      </form>
      ;
    </section>
  );
}
