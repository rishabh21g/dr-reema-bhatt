"use client";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";
import { Label } from "@/components/ui/label";

export default function BookAppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, date, time } = form;

    if (!name || !email || !phone || !date || !time) {
      Toast({ variant: "destructive", title: "All fields are required." });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/appointment");
      console.log(res);
    } catch (err) {
      Toast({
        variant: "destructive",
        title: "Server error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-center text-green-600">
        Book Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Phone</Label>
          <Input
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Date</Label>
          <Input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Time</Label>
          <Input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </div>
  );
}
