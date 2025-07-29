"use client";

import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Shield, Award, Languages } from "lucide-react";
import Image from "next/image";
import fetal from "../images/Fetal-Medicine.webp";
export default function About() {
  const achievements = [
    {
      icon: GraduationCap,
      label: "Education",
      value:
        "MBBS, MS, DNB, FICOG, MNAMS, Fetal Medicine (AIIMS Delhi), FMF-UK Accredited",
    },
    {
      icon: Heart,
      label: "Specialization",
      value:
        "Fetal Medicine & Perinatology, Invasive Fetal Therapy, Genetic Counselling",
    },
    {
      icon: Shield,
      label: "Experience",
      value:
        "23 Years in Armed Forces | Senior Consultant & Head at Amrita Hospital, Faridabad",
    },
    {
      icon: Award,
      label: "Recognition",
      value:
        "Presidential Certificate of Appreciation, Chief of Army Staff Commendation, Multiple Medals",
    },
  ];

  const awards = [
    "Certificate of Appreciation by President of India (2022)",
    "Chief of Army Staff Commendation (2016)",
    "Army Commanders Commendation Card (2012)",
    "Mr. S. Bhattacharya & Dr. Ganguli's Gold Medal (2020)",
    "Dr. Neera Aggarwal Medal Best Paper, Silver Medal (2013)",
  ];

  return (
    <section id="about" className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <Badge className="mb-2 bg-green-100 text-green-800 ">
            About Dr. Reema Bhatt
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Dedicated to <span className="text-primary">Fetal Medicine</span>
          </h2>
          <p className="  mt-3 max-w-4xl mx-auto text-2xl font-bold text-gray-800">
            Senior Consultant & Head of Fetal Medicine at Amrita Hospital,
            Faridabad with 23 years of Armed Forces service and expertise in
            invasive fetal procedures.
          </p>
        </div>

        {/* About Text */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-4 text-sm gap-x-9 text-gray-900 leading-relaxed  md:text-xl px-4">
          {/* Left: Text */}
          <div className="w-full md:w-3/4">
            <p className="font-semibold italic text-justify">
              Pregnancy is a beautiful and life-changing journey, and at Fetal
              Medicine Solutions, we offer comprehensive care for your unborn
              child. Dr. Reema Bhatt, our experienced fetal medicine specialist,
              provides expert support at every stage from pre-pregnancy
              counseling, especially if you have previous pregnancy
              complications or chronic conditions, to monitoring fetal growth
              and development during pregnancy, and continued care after birth.
              Dr. Reema Bhatt is skilled in advanced ultrasounds, detecting
              fetal abnormalities, and offering personalized guidance for
              families at risk of hereditary conditions. Friendly and
              approachable, she ensures all your questions are answered, working
              closely with your obstetrician to provide the best possible care
              for you and your baby.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/4 relative aspect-[4/5]">
            <Image
              src={fetal}
              alt="fetal medicine"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 mb-8">
          {achievements.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <item.icon className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  {item.label}
                </h4>
                <p className=" text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mb-6">
          <h3 className=" font-bold text-lg text-green-800 mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Awards & Recognitions
          </h3>
          <ul className="list-disc list-inside space-y-1  text-gray-700 pl-1">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h4 className=" font-bold text-lg text-green-800 mb-1 flex items-center">
            <Languages className="h-4 w-4 mr-2" />
            Languages Known
          </h4>
          <p className=" text-gray-700">English, Hindi, Marathi</p>
        </div>
      </div>
    </section>
  );
}
