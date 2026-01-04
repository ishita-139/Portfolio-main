'use client';

import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Card } from './ui/card';
import { useState, useEffect } from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
            <img
              src="/profile2.png"
              alt="Ishita Agarwal profile"
              className="w-40 h-40 rounded-full border-4 border-primary object-cover shadow-lg mb-6 lg:mb-0"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                About Me
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Hi, I&apos;m Ishita Agarwal, a computer Science graduate from IIIT Vadodara  with a passion for AI, software engineering, and impactful technology solutions. I thrive on building innovative projects, optimizing systems, and mentoring peers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture and Professional Summary */}
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Professional Summary</h3>
              <p className="text-foreground/80 leading-relaxed">
  I am a highly motivated Computer Science graduate and Chairperson’s Gold Medalist, currently pursuing an M.Tech in Computer Science and Engineering. With a strong academic foundation and hands-on industry experience, I have worked on AI-driven applications, data-centric systems, and full-stack development projects that focus on scalability and real-world impact.
</p>

<p className="text-foreground/80 leading-relaxed">
  My technical expertise includes C/C++, Python, JavaScript, React, Next.js, Node.js, SQL, MongoDB, Machine Learning, NLP, and data visualization tools such as Power BI. I am passionate about applying intelligent systems and modern technologies to solve complex problems while continuously expanding my skill set.
</p>

<p className="text-foreground/80 leading-relaxed">
  Beyond technical work, I have mentored students, led technical and academic committees, and contributed to knowledge-sharing through teaching assistance and technical writing. I value collaboration, structured problem-solving, and building solutions that deliver meaningful user experiences.
</p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Role</p>
                    <p className="font-medium text-foreground">Aspiring Software Engineer</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-medium text-foreground">Ghaziabad, India</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Experience</p>
                    <p className="font-medium text-foreground">Internships </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Award className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Projects</p>
                    <p className="font-medium text-foreground">5+ Major Projects</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Personal Background */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Personal Background</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-foreground/80 leading-relaxed mb-6">
                My journey into software development began with a strong foundation in computer science 
                and a passion for creating innovative digital solutions. I&apos;ve had the opportunity to work 
                on diverse projects ranging from AI models to building applications for daily use, always 
                focusing on delivering high-quality, scalable solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I believe in continuous learning and staying updated with the latest industry trends. 
                My experience includes building scalable applications using modern development practices, automating workflows, and optimizing system performance to deliver reliable and efficient user experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I&apos;m passionate about clean code, best practices, and creating solutions that not only 
                meet business requirements but also provide excellent user experiences. I enjoy 
                collaborating with cross-functional teams and contributing to the entire software 
                development lifecycle.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
