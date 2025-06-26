import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Heart, Shield, Target, Award, Languages } from 'lucide-react';

export default function About() {
  const achievements = [
    { 
      icon: GraduationCap, 
      title: 'Education', 
      description: 'MBBS, MS, DNB, FICOG, MNAMS, Fetal Medicine (AIIMS Delhi), FMF-UK Accredited' 
    },
    { 
      icon: Heart, 
      title: 'Specialization', 
      description: 'Fetal Medicine & Perinatology, Invasive Fetal Therapy, Genetic Counselling' 
    },
    { 
      icon: Shield, 
      title: 'Experience', 
      description: '23 Years in Armed Forces, Senior Consultant & Head at Amrita Hospital' 
    },
    { 
      icon: Award, 
      title: 'Recognition', 
      description: 'Presidential Certificate of Appreciation, Chief of Army Staff Commendation' 
    },
  ];

  const awards = [
    'Certificate of Appreciation by President of India (2022)',
    'Chief of Army Staff Commendation (2016)',
    'Army Commanders Commendation Card (2012)',
    'Mr. S. Bhattacharya & Dr. Ganguli\'s Gold Medal (2020)',
    'Dr. Neera Aggarwal Medal Best Paper, Silver Medal (2013)'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">About Dr. Reema Bhatt</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dedicated to <span className="text-primary">Fetal Medicine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Reema Bhatt is a Senior Consultant & Head of Fetal Medicine at Amrita Hospital, Faridabad, 
            with special expertise in invasive fetal procedures and 23 years of distinguished service in the Armed Forces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Dr. Reema Bhatt is passionately dedicated to the unborn fetus, aiming to provide the optimal 
                and best outcome for every pregnancy and fetus. With special expertise in invasive fetal 
                invasive procedures, she brings unparalleled experience to fetal medicine.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Having served in the Armed Forces for 23 years, Dr. Bhatt combines military precision with 
                medical excellence. Her approach focuses on "treating the baby even before the baby is born" 
                through advanced diagnostic techniques and compassionate care.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Our Philosophy</h3>
              <p className="text-green-700 italic">
                "Our sole purpose is to provide the utmost compassionate and accurate services to our patients, 
                thus rendering a beautiful and memorable experience in their journey of pregnancy."
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                <Languages className="h-5 w-5 mr-2" />
                Languages Known
              </h3>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Marathi'].map((language) => (
                  <Badge key={language} variant="secondary" className="bg-blue-100 text-blue-800">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Awards & Recognition
                </h3>
                <ul className="space-y-2">
                  {awards.map((award, index) => (
                    <li key={index} className="text-sm text-yellow-700 flex items-start">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {award}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}