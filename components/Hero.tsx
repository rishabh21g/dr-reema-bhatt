"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import Image from "next/image";
import img1 from "../images/hero1.jpeg";
import img2 from "../images/hero2.jpeg";
import img3 from "../images/hero3.jpeg";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [img1, img2, img3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleBookAppointment = () => {
    window.open(
      "https://www.amritahospitals.org/faridabad/doctor/reema-bhatt",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="pt-20 pb-16 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="fade-in">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              ✨ Senior Consultant & Head - Fetal Medicine
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Dr. Reema Bhatt
              <span className="text-primary block text-3xl md:text-4xl mt-2 font-extrabold">
                Fetal Medicine Specialist
              </span>
            </h1>
            <p className="text-xl font-bold text-gray-950 mb-4 leading-relaxed">
              MS, DNB, FICOG, MNAMS, Fetal Medicine (AIIMS Delhi)
            </p>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-semibold">
              Specialized in invasive fetal procedures at Amrita Hospital,
              Faridabad. Passionately dedicated to providing optimal outcomes
              for every pregnancy and fetus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group"
                onClick={handleBookAppointment}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold text-gray-900">23+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold text-gray-900">Armed</span>
                <span className="text-sm text-gray-600">Forces Veteran</span>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <span className="text-2xl font-bold text-gray-900">Fetal</span>
                <span className="text-sm text-gray-600">Medicine Expert</span>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative fade-in">
            <div className="relative w-full h-[500px]">
              {" "}
              {/* container must be relative for fill */}
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={`object-contain transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
