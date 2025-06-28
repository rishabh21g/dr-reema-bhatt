"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient - 2023",
      content:
        "Dr. Reema Bhatt's expertise in fetal medicine gave us confidence throughout our high-risk pregnancy. Her compassionate care and detailed explanations helped us make informed decisions.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Rajesh Kumar",
      role: "Patient - 2023",
      content:
        "The advanced technology and Dr. Bhatt's skill in fetal echocardiography detected our baby's heart condition early. Her guidance was invaluable throughout the treatment.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Anjali Gupta",
      role: "Patient - 2022",
      content:
        "Dr. Reema Bhatt's genetic counseling helped us understand our options clearly. Her professional approach combined with genuine care made our journey less stressful.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Vikram Singh",
      role: "Patient - 2022",
      content:
        "The 3D/4D scans and detailed fetal assessments by Dr. Bhatt were exceptional. Her military background shows in her precision and dedication to patient care.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Meera Patel",
      role: "Patient - 2023",
      content:
        "Dr. Bhatt's expertise in invasive fetal procedures saved our baby's life. Her skill and the advanced facilities at Amrita Hospital are truly world-class.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Arjun Malhotra",
      role: "Patient - 2022",
      content:
        "The comprehensive care for our multiple pregnancy was outstanding. Dr. Reema Bhatt's monitoring and guidance ensured the safe delivery of our twins.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">
            Patient Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from families who have trusted Dr. Reema Bhatt
            with their precious pregnancies and fetal medicine care.
          </p>
        </div>

        {/* Carousel Section */}
        <Carousel
          opts={{ align: "start", loop: true  }}
          className="w-full max-w-full" 
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Card className="border-green-100 hover:shadow-lg transition-all duration-300 group h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary/30 mr-2" />
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CTA Block */}
        <div className="text-center mt-12">
          <div className="bg-green-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience World-Class Fetal Medicine Care
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Join hundreds of families who have trusted Dr. Reema Bhatt for
              their fetal medicine needs at Amrita Hospital, Faridabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="bg-white text-green-800 px-4 py-2">
                ⭐ 23+ Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-white text-green-800 px-4 py-2">
                🏥 Amrita Hospital Faridabad
              </Badge>
              <Badge variant="secondary" className="bg-white text-green-800 px-4 py-2">
                🏆 Presidential Recognition
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
