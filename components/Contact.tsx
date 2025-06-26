"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageCircle,
  Heart,
  Award,
} from "lucide-react";

export default function Contact() {
  const handleBookAppointment = () => {
    window.open(
      "https://www.amritahospitals.org/faridabad/doctor/reema-bhatt",
      "_blank"
    );
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919953011711", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Amrita Hospital", "Faridabad, Haryana", "India"],
      color: "text-green-600",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 9953011711",
        "+91 8595903808",
        "(WhatsApp preferred if phone not answered)",
      ],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reemabhatt@fbd.amrita.edu"],
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Consultation",
      details: [
        "By Appointment Only",
        "Fetal Medicine Specialist",
        "Senior Consultant & Head",
      ],
      color: "text-green-600",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your <span className="text-primary">Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience world-class fetal medicine care? Contact Dr. Reema Bhatt at Amrita Hospital, Faridabad for your consultation.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-green-100 hover:shadow-md transition-all h-full"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-gray-50 ${info.color}`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Appointment Card Full Width */}
        <Card className="border-primary/20 bg-primary/5 mb-16">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-gray-900 text-lg md:text-xl">
                  Book Appointment
                </h3>
              </div>
              <div className="text-gray-700 text-sm md:text-base">
                Schedule your consultation directly through Amrita Hospital's official booking system.
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                  onClick={handleBookAppointment}
                >
                  Book Online
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50 w-full md:w-auto"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us Section */}
        <Card className="border-green-100 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Reema Bhatt?</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                Our aim is to "treat the baby even before the baby is born". We are specialized in diagnosing fatal birth defects and complications in the unborn baby.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: <Phone className="h-8 w-8 text-primary" />,
                  title: "Advanced Technology",
                  desc: "High-end USG machines and advanced technologies",
                },
                {
                  icon: <Heart className="h-8 w-8 text-primary" />,
                  title: "Compassionate Care",
                  desc: "Utmost compassionate and accurate services",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Expert Experience",
                  desc: "23 years of distinguished medical service",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
