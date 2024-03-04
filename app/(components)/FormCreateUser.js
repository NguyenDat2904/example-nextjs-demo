"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

function FormCreateUser() {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (loading) return;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.full_name === "" || formData.full_name === undefined) {
      toast.error("Name is required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!regex.test(formData.email)) {
      toast.error("Email must be in correct format", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (formData.password.length < 6 || formData.password === undefined) {
      toast.error("Password must be at least 6 characters", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setLoading(true);
    const res = await fetch("/api/get-users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      const response = await res.json();
      setErrorMsg(response.message);
      toast.error(response.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Create user success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-2 w-1/2"
      >
        <h1>Create new User </h1>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="full_name"
          onChange={handleChange}
          value={formData.full_name}
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="m-2 bg-slate-400 rounded px-5 py-3"
        />

        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-100 px-2 py-2 w-40"
        >
          Create User
        </button>
      </form>
      <p className="text-red-500">{errorMsg}</p>
    </div>
  );
}

export default FormCreateUser;
