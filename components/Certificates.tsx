'use client';

import { Award } from 'lucide-react';
import { Card } from './ui/card';

const certificates = [
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'March 2024',
    description:
      'Covered core deep learning concepts including neural networks, backpropagation, CNNs, and model optimization.',
    image: '/certificate_deeplearning.png',
    url: 'https://courses.nvidia.com/certificates/38a49b678d524ade967b39a9c86e5d33',
  },
  {
    title: 'Amazon ML Summer School Scholar',
    issuer: 'Amazon & IBM (Cognitive Class)',
    date: 'May 2023',
    description:
      'Selected as a scholar for Amazon ML Summer School and certified in Machine Learning fundamentals by IBM.',
    image: '/certificate_amazon_ml.png',
    url: 'https://courses.cognitiveclass.ai/certificates/40996b54d02c4be69127434c0bc1a261',
  },
   {
    title: 'Beta Microsoft Learn Student Ambassador',
    issuer: 'Microsoft',
    date: 'July 2023',
    description:
      'Recognized as a Beta Microsoft Learn Student Ambassador for contributions to technical communities and peer learning.',
    image: '/certificate_mlsa.png',
    url: 'https://drive.google.com/file/d/1emwH1fC_ZqtsahPdiBS8RI2o-BVnEp6i/view?usp=sharing',
  },
  {
    title: 'Google Cloud Arcade – Skill Badges',
    issuer: 'Google Cloud',
    date: '2023 – 2024',
    description:
      'Earned 40+ skill badges and certifications covering cloud fundamentals, data, and ML workflows.',
    image: '/certificate_gcp.png',
    url: 'https://www.cloudskillsboost.google/public_profiles/50b30910-9c3d-4981-89d3-2012289a0e31',
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certificates
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Recognitions and certifications earned for technical expertise and specialization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <Card key={idx} className="p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-contain mb-2 rounded"
                />
              )}
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-primary" />
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary hover:underline">
                    {cert.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                )}
              </div>
              <div className="text-foreground/70 text-sm mb-1">
                <span className="font-medium">{cert.issuer}</span> &middot; {cert.date}
              </div>
              <div className="text-foreground/80 text-base">
                {cert.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
