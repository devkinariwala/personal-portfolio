import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Form() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { error } = await supabase.from("contact_messages").insert([form]);
    if (error) {
      setStatus("Error sending message. Please try again.");
    } else {
      setStatus("Message sent! Thank you.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="w-full max-w-lg px-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <legend className="text-xl font-semibold text-white mb-2">
          Contact Me
        </legend>
        <div className="mb-5">
          <label
            className="block text-sm font-medium text-white mb-1 text-left"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-none bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-sm font-medium text-white mb-1 text-left"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 block w-full rounded-lg border-none bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            type="email"
            name="email"
            id="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-sm font-medium text-white mb-1 text-left"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="mt-1 block w-full resize-none rounded-lg border-none bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            name="message"
            id="message"
            rows={4}
            required
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 py-2 font-bold text-gray-900 shadow-md transition hover:from-blue-400 hover:to-cyan-400"
        >
          Send
        </button>
        {status && (
          <div
            className={`text-center text-base font-medium mt-2 ${
              status.startsWith("Error") ? "text-red-400" : "text-cyan-400"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
}
