"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import hero1 from "@/images/hero1.jpeg";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PhoneCall,
  User2,
  MailIcon,
  CalendarCheck,
  CalendarCheckIcon,
  Loader2Icon,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

export default function BookAppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, date } = form;

    if (!name || !email || !phone || !date) {
      toast("All fields are mandatory to fill");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/appointment", form);
      console.log(res);
      toast.success("Appointment sent! Doctor will contact you shortly");
      setForm({ name: "", email: "", phone: "", date: "" });
    } catch (err) {
      toast.error("Server error. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div
      className="w-full max-w-5xl mx-auto p-4 px-12 py-24
     shadow-2xl rounded-2xl"
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-50 to-green-200 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <Image src={hero1} alt="Dr. Reema Bhatt" />
            </Avatar>
            <div>
              <CardTitle className="text-2xl text-gray-800">
                Dr. Reema Bhatt
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fetal Medicine Specialist
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left side - Booking Form */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Book Appointment
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill in your details to schedule a consultation
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <User2 className="h-4 w-4 text-gray-500" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <PhoneCall className="h-4 w-4 text-gray-500" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 000 000 0000"
                    className="w-full"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <MailIcon className="h-4 w-4 text-gray-500" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <CalendarCheck className="h-4 w-4 text-gray-500" />
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !form.date && "text-muted-foreground"
                        )}
                      >
                        <CalendarCheckIcon className="mr-2 h-4 w-4" />
                        {form.date ? form.date : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={form.date ? new Date(form.date) : undefined}
                        onSelect={(selectedDate) => {
                          if (selectedDate) {
                            setForm({
                              ...form,
                              date: selectedDate.toISOString().split("T")[0],
                            });
                          }
                        }}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin text-white size-6" />
                  ) : (
                    "Book Appointment"
                  )}
                </Button>
              </form>

              <div className="text-center text-sm text-gray-500 mt-2">
                <p>Available: Mon–Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Right side - Doctor Photo */}
            <div className="relative bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="relative">
                  <Image
                    src={hero1}
                    alt="Dr. Reema Bhatt"
                    className="rounded-lg shadow-lg object-cover w-full max-w-sm h-96"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-700">
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">23+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
