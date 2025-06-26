"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  HeartPulse,
  Shield,
  Activity,
  UserCheck,
  Pill,
  ArrowRight,
  Baby,
  Brain,
  Eye,
  Microscope,
  BookOpen,
  Users,
} from "lucide-react";

export default function Services() {
const services = [
  {
    icon: Baby,
    title: "Fetal Viability & Early Scans",
    description:
      "Early pregnancy evaluations to ensure fetal health and detect early anomalies.",
    features: [
      "Fetal viability scan",
      "NT and NB scans",
      "Early anomaly scans",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Microscope,
    title: "Anomaly & Genetic Sonograms",
    description:
      "Detailed scans for anomaly detection and genetic assessment during mid-pregnancy.",
    features: [
      "Anomaly scans",
      "Level II USG",
      "Genetic sonogram",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: HeartPulse,
    title: "Fetal Echocardiogram",
    description:
      "Detailed evaluation of fetal heart to detect congenital heart defects.",
    features: [
      "Detailed cardiac evaluation",
      "Congenital heart defect screening",
      "Early fetal cardiac assessment",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Brain,
    title: "Fetal Neurosonogram",
    description:
      "High-resolution imaging of fetal brain and nervous system development.",
    features: [
      "Brain development assessment",
      "Neural tube defect screening",
      "Neurological evaluation",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Eye,
    title: "Advanced Imaging",
    description:
      "High-end imaging solutions for detailed structural visualization.",
    features: [
      "3D and 4D ultrasound",
      "Fetal MRI",
      "High-resolution anatomical scans",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Microscope,
    title: "Genetic Screening & Counseling",
    description:
      "Genetic risk assessment through advanced screening and expert counseling.",
    features: [
      "Down’s syndrome screening",
      "Trisomy 18 and Trisomy 13 screening",
      "Genetic counseling",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Shield,
    title: "High-Risk Pregnancy Care",
    description:
      "Comprehensive care for pregnancies with higher medical risk factors.",
    features: [
      "Multiple pregnancy scans",
      "High-risk pregnancy management",
      "Prenatal care & monitoring",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Stethoscope,
    title: "Pre-conceptional Counseling",
    description:
      "Guidance and planning for a healthy pregnancy before conception.",
    features: [
      "Pre-conceptional counseling",
      "Genetic and lifestyle assessment",
      "Risk mitigation strategies",
    ],
    color: "bg-green-50 text-green-600",
  },
];
;

  const handleBookAppointment = () => {
    window.open(
      "https://www.amritahospitals.org/faridabad/doctor/reema-bhatt",
      "_blank"
    );
  };

  return (
    <section id="services" className="py-5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-green-100 text-green-800">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-primary">Fetal Medicine</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Equipped with high-end USG machines and expert care to support every pregnancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-green-100 hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div
                  className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}
                >
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={handleBookAppointment}
          >
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
}
