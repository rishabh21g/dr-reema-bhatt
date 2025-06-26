"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  Users
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Baby,
      title: 'Fetal Viability & Early Scans',
      description: 'Comprehensive early pregnancy assessments including NT and NB scans for early anomaly detection.',
      features: ['Fetal viability scan', 'NT and NB scans', 'Early anomaly scans'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: HeartPulse,
      title: 'Fetal Echocardiogram',
      description: 'Specialized heart assessment for unborn babies to detect cardiac abnormalities early.',
      features: ['Detailed cardiac evaluation', 'Congenital heart defect screening', 'Expert interpretation'],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Brain,
      title: 'Fetal Neurosonogram',
      description: 'Advanced brain and nervous system evaluation of the developing fetus.',
      features: ['Brain development assessment', 'Neural tube defect screening', 'Neurological evaluation'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Microscope,
      title: 'Genetic Screening & Counseling',
      description: 'Comprehensive genetic testing and counseling for chromosomal disorders.',
      features: ['Down\'s syndrome screening', 'Trisomy 18 and 13 testing', 'Genetic counseling'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Eye,
      title: 'Advanced Imaging',
      description: '3D/4D ultrasound and fetal MRI for detailed anatomical assessment.',
      features: ['3D and 4D scans', 'Fetal MRI', 'Level II USG/Genetic sonogram'],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Shield,
      title: 'High-Risk Pregnancy Care',
      description: 'Specialized care for complex pregnancies and multiple gestations.',
      features: ['Multiple pregnancy scans', 'High-risk pregnancy management', 'Pre-conceptional counseling'],
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  const handleBookAppointment = () => {
    window.open('https://www.amritahospitals.org/faridabad/doctor/reema-bhatt', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-primary">Fetal Medicine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are equipped with high-end USG machines and advanced technologies, bringing one of the 
            best fetal medicine services to your doorstep with specialized care for every pregnancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-green-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fellowship Programme Section */}
        <div className="mt-16">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fellowship Programme</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Amrita Hospital, Faridabad launched the first batch of One year clinical fellowship programme 
                  in Fetal Medicine under Amrita Vishwa Vidyapeetham in 2023.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Clinical Fellowship</h4>
                  <p className="text-gray-600 mb-4">One year comprehensive clinical fellowship programme in Fetal Medicine</p>
                  <Badge className="bg-green-100 text-green-800">1 Year Programme</Badge>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">International Observership</h4>
                  <p className="text-gray-600 mb-4">International observership programme in Fetal Medicine</p>
                  <Badge className="bg-blue-100 text-blue-800">6 Months Programme</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
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