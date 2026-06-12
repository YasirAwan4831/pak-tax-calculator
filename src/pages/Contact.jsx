import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the form errors");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Have questions or feedback? We'd love to hear from you.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-primary-600 dark:text-primary-500" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">contact@paktaxcalculator.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-primary-600 dark:text-primary-500" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-gray-200 p-6 dark:border-gray-800 dark:bg-gray-900">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
