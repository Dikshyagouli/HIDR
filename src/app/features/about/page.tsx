import { FaAward, FaUsers, FaHospital, FaHeartbeat } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Learn more about our mission and values</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Welcome to MEDDICAL Hospital</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                MEDDICAL Hospital has been at the forefront of healthcare excellence for over two decades. 
                We are committed to providing compassionate, high-quality medical care to our community.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Our state-of-the-art facilities, combined with our team of experienced healthcare professionals, 
                ensure that every patient receives personalized attention and the best possible treatment outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in a patient-centered approach, where your health and well-being are our top priorities. 
                From routine checkups to complex surgical procedures, we are here to support you every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl h-96 flex items-center justify-center text-white">
              <FaHospital size={100} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaHeartbeat />, title: 'Compassion', desc: 'We treat every patient with empathy and care' },
              { icon: <FaAward />, title: 'Excellence', desc: 'We strive for the highest standards in healthcare' },
              { icon: <FaUsers />, title: 'Teamwork', desc: 'We collaborate to provide the best care' },
              { icon: <FaHospital />, title: 'Innovation', desc: 'We embrace new technologies and methods' },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl text-secondary mb-5 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-5 text-secondary">Our Mission</h3>
                <p className="leading-relaxed">
                  To provide exceptional healthcare services that improve the health and well-being of our community 
                  through compassionate care, medical excellence, and innovative treatments.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-5 text-secondary">Our Vision</h3>
                <p className="leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our commitment to patient care, 
                  medical innovation, and community health improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}