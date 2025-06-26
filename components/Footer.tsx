import Link from 'next/link';
import {
  Stethoscope,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const services = [
    'Fetal Viability Scan',
    'Fetal Echocardiogram',
    'Genetic Counseling',
    'High-Risk Pregnancies',
    '3D/4D Scans',
    'Invasive Fetal Therapy',
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/share/16PZGKsTvG/',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/reema_fetalmed?igsh=MmMycXIxcTBwYWN4',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/reema-bhatt-a13600101',
      label: 'LinkedIn',
    },
    {
      icon: Stethoscope,
      href: 'https://www.amritahospitals.org/faridabad/department/centres-of-excellences/mother-and-child-care/foetal-medicine',
      label: 'Fetal Medicine Dept',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Dr. Reema Bhatt</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Senior Consultant & Head of Fetal Medicine at Amrita Hospital, Faridabad. 
              Specialized in invasive fetal procedures with 23 years of medical excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Amrita Hospital</p>
                  <p>Faridabad, Haryana</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+919953011711" className="block hover:text-primary transition">
                    +91 9953011711
                  </a>
                  <a href="tel:+918595903808" className="block hover:text-primary transition">
                    +91 8595903808
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:reemabhatt@fbd.amrita.edu"
                  className="text-gray-400 hover:text-primary transition"
                >
                  reemabhatt@fbd.amrita.edu
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Reema Bhatt - Fetal Medicine Specialist. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://www.amritahospitals.org/faridabad/doctor/reema-bhatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Hospital Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
