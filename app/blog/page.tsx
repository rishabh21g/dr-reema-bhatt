"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medico1 from "@/images/medico1.jpeg";
import medico2 from "@/images/medico2.jpeg";
import medico3 from "@/images/medico3.jpg";
import hero1 from "@/images/hero1.jpeg"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Shield,
  Stethoscope,
  Baby,
  Brain,
} from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Fetal Medicine: A Comprehensive Guide",
      excerpt:
        "Learn about the importance of fetal medicine in modern pregnancy care and how early detection can improve outcomes for both mother and baby.",
      content: `Fetal medicine is a specialized branch of medicine that focuses on the health and development of the unborn baby. As a fetal medicine specialist, I am passionate about providing the best possible care for both mother and baby throughout pregnancy.

## What is Fetal Medicine?

Fetal medicine involves the diagnosis, monitoring, and treatment of medical conditions that affect the developing fetus. This field combines advanced imaging techniques, genetic testing, and specialized procedures to ensure optimal pregnancy outcomes.

## The Importance of Early Detection

Early detection of fetal abnormalities is crucial for several reasons:

### Better Treatment Options
When conditions are detected early, we have more treatment options available. Some conditions can be treated while the baby is still in the womb through invasive fetal therapy.

### Informed Decision Making
Early diagnosis allows parents to make informed decisions about their pregnancy and prepare for any special care their baby might need after birth.

### Improved Outcomes
With early detection and appropriate management, many conditions that might have been fatal or severely disabling can now be successfully treated.

## Advanced Diagnostic Techniques

At Amrita Hospital, we use state-of-the-art technology for fetal assessment:

### High-Resolution Ultrasound
Our high-end USG machines provide detailed images of the developing baby, allowing us to detect even subtle abnormalities.

### Fetal Echocardiography
This specialized ultrasound focuses on the baby's heart, detecting congenital heart defects early in pregnancy.

### Fetal Neurosonography
This technique evaluates the baby's brain and nervous system development, helping identify neurological conditions.

### 3D and 4D Imaging
These advanced imaging techniques provide detailed views of the baby's anatomy and can help parents bond with their unborn child.

## Genetic Counseling and Testing

Genetic counseling is an essential part of fetal medicine. We provide:
- Risk assessment based on family history
- Explanation of genetic testing options
- Support in decision-making
- Interpretation of test results

## Our Philosophy

Our aim is to "treat the baby even before the baby is born." We believe in providing compassionate, accurate, and comprehensive care that makes the pregnancy journey memorable and positive for families.

Remember, every pregnancy is unique, and personalized care is essential for the best outcomes. If you have concerns about your pregnancy, don't hesitate to seek specialized fetal medicine care.`,
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Fetal Medicine",
      icon: Baby,
      image: medico1,
    },
    {
      id: 2,
      title: "High-Risk Pregnancies: Expert Care and Management",
      excerpt:
        "Understanding high-risk pregnancies and how specialized care can ensure the best outcomes for both mother and baby.",
      content: `High-risk pregnancies require specialized care and monitoring to ensure the safety of both mother and baby. With 23 years of experience, including service in the Armed Forces, I understand the importance of precision and dedication in managing complex pregnancies.

## What Makes a Pregnancy High-Risk?

Several factors can classify a pregnancy as high-risk:

### Maternal Factors
- Advanced maternal age (over 35)
- Pre-existing medical conditions
- Previous pregnancy complications
- Multiple pregnancies (twins, triplets)

### Fetal Factors
- Genetic abnormalities
- Growth restrictions
- Congenital malformations
- Multiple gestations

## Comprehensive Monitoring

High-risk pregnancies require more frequent monitoring:

### Regular Ultrasounds
We perform detailed scans to monitor fetal growth, amniotic fluid levels, and placental function.

### Specialized Testing
This may include genetic testing, fetal echocardiography, and other specialized assessments based on individual risk factors.

### Multidisciplinary Care
We work closely with other specialists including obstetricians, neonatologists, and genetic counselors to provide comprehensive care.

## Advanced Treatment Options

When complications arise, we have several treatment options:

### Invasive Fetal Therapy
Some conditions can be treated while the baby is still in the womb through minimally invasive procedures.

### Medication Management
Certain medications can be safely used during pregnancy to treat maternal or fetal conditions.

### Delivery Planning
We work with the obstetric team to plan the safest delivery method and timing for high-risk pregnancies.

## The Role of Technology

Advanced technology plays a crucial role in managing high-risk pregnancies:
- High-resolution ultrasound systems
- Fetal MRI capabilities
- Advanced monitoring equipment
- Genetic testing facilities

## Emotional Support

Managing a high-risk pregnancy can be emotionally challenging. We provide:
- Clear communication about risks and treatment options
- Emotional support throughout the pregnancy
- Connection with support groups and resources
- Preparation for potential outcomes

## Success Stories

With proper management, many high-risk pregnancies result in healthy babies and mothers. Early detection, appropriate intervention, and comprehensive care make the difference.

Remember, being classified as high-risk doesn't mean something will go wrong. It simply means you need specialized care to ensure the best possible outcome for you and your baby.`,
      date: "2024-01-08",
      readTime: "10 min read",
      category: "High-Risk Pregnancy",
      icon: Shield,
      image: medico2,
    },
    {
      id: 3,
      title: "Genetic Counseling: Making Informed Decisions",
      excerpt:
        "The importance of genetic counseling in pregnancy and how it helps families make informed decisions about their baby's health.",
      content: `Genetic counseling is a crucial component of modern pregnancy care. It helps families understand genetic risks, testing options, and make informed decisions about their pregnancy journey.

## What is Genetic Counseling?

Genetic counseling is a communication process that helps individuals and families understand:
- Genetic conditions and their inheritance patterns
- Risk factors for genetic disorders
- Available testing options
- Implications of test results

## Who Should Consider Genetic Counseling?

Genetic counseling may be recommended for:

### Family History Factors
- Previous child with genetic condition
- Family history of genetic disorders
- Consanguineous marriages
- Recurrent pregnancy losses

### Maternal Factors
- Advanced maternal age
- Abnormal screening test results
- Exposure to teratogens
- Certain medical conditions

## Types of Genetic Testing

We offer various genetic testing options:

### Screening Tests
- First trimester screening
- Second trimester screening
- Non-invasive prenatal testing (NIPT)
- Carrier screening

### Diagnostic Tests
- Chorionic villus sampling (CVS)
- Amniocentesis
- Fetal blood sampling

## Common Genetic Conditions

We screen for various genetic conditions including:

### Chromosomal Disorders
- Down syndrome (Trisomy 21)
- Trisomy 18 (Edwards syndrome)
- Trisomy 13 (Patau syndrome)

### Single Gene Disorders
- Cystic fibrosis
- Sickle cell disease
- Thalassemia
- Spinal muscular atrophy

## The Counseling Process

Our genetic counseling process includes:

### Pre-test Counseling
- Risk assessment
- Explanation of testing options
- Discussion of benefits and limitations
- Informed consent

### Post-test Counseling
- Result interpretation
- Discussion of implications
- Support and guidance
- Referral to specialists if needed

## Making Informed Decisions

Genetic counseling helps families:
- Understand their options
- Make decisions aligned with their values
- Prepare for potential outcomes
- Access appropriate resources and support

## Emotional Support

Receiving genetic information can be emotionally challenging. We provide:
- Compassionate communication
- Emotional support
- Connection with support groups
- Resources for coping

## Advanced Technology

We use the latest technology for genetic testing:
- High-resolution chromosomal analysis
- Advanced molecular testing
- Next-generation sequencing
- Comprehensive genetic panels

## Our Commitment

As a genetic counselor and fetal medicine specialist, I am committed to providing accurate information, compassionate support, and helping families navigate their genetic testing journey with confidence.

Remember, genetic counseling is about empowerment through knowledge. It helps you make the best decisions for your family based on accurate, personalized information.`,
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Genetic Counseling",
      icon: Brain,
      image: medico3,
    },
  ];

  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen ">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setSelectedPost(null)}
                className="flex items-center text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blog
              </Button>
              <Link href="/" className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-primary" />
                <span className="font-semibold text-gray-900">
                  Dr. Reema Bhatt
                </span>
              </Link>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              priority={false}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-primary/10 text-primary">
                  {selectedPost.category}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedPost.readTime}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>

              <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
                <Image
                  src={hero1}
                  alt="Dr. Reema Bhatt"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1 text-gray-400" />
                    <span className="font-medium text-gray-900">
                      Dr. Reema Bhatt
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Fetal Medicine Specialist
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  } else if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  } else if (paragraph.startsWith("- ")) {
                    return (
                      <li key={index} className="ml-4 mb-2">
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  } else if (paragraph.trim() === "") {
                    return <br key={index} />;
                  } else {
                    return (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="font-semibold text-gray-900">
                Dr. Reema Bhatt
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800">
            Medical Insights
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fetal Medicine <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on fetal medicine, high-risk pregnancies, and
            genetic counseling from Dr. Reema Bhatt to help you make informed
            decisions about your pregnancy journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-green-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    priority={false}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary">
                      <post.icon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
