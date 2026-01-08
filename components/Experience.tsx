'use client';

import { Calendar, MapPin, Building } from 'lucide-react';
import { Card } from './ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
    title: 'Software Developer Intern',
    company: 'Teliolabs Communication Inc.',
    location: 'Remote',
    period: 'July 2025 - August 2025',
    description:
      'Worked on data-driven reporting and analytics solutions, contributing to automated reporting, database analysis, and business intelligence dashboards.',
    achievements: [
      'Developed automated reports in Oracle OAP including requirement gathering, report creation, and validation.',
      'Built Power BI dashboards and utilization reports by analyzing database schemas.',
      'Wrote optimized SQL queries to extract, transform, and analyze large datasets.',
      'Collaborated with teams to ensure data accuracy and reporting efficiency.',
    ],
    technologies: [
      'SQL',
      'Oracle OAP',
      'Power BI',
      'DBeaver',
      'MobaXterm',
      'NetExtender',
    ],
  },
  {
    title: 'AI Engineer Intern',
    company: 'DBA Lounge Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Jan 2025 - July 2025',
    description:
      'Contributed to building AI-powered SaaS products and automation workflows using large language models and full-stack technologies.',
    achievements: [
      'Developed AI SaaS services including article generation, image generation, object removal, and background removal.',
      'Integrated Gemini API , Clerk authentication features into web applications using modern frontend and backend stacks.',
      'Built and deployed AI agents using n8n for workflow automation integrating WhatsApp API, Google Sheets, Stripe payments, gemini API',
      'Collaborated with cross-functional teams to deliver scalable AI-driven solutions.',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'PostgreSQL',
      'n8n',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'Jaypee Institute of Information Technology (JIIT)',
    location: 'Noida, India',
    period: '2024 - 2025',
    description:
      'Assisted students in building strong foundations in programming and problem-solving while supporting academic activities.',
    achievements: [
      'Mentored students in programming concepts and problem-solving techniques.',
      'Assisted in lab sessions and evaluations for computer science courses.',
    ],
    technologies: ['C/C++', 'Data Structures', 'Teaching', 'Problem Solving'],
  },
  {
    title: 'Vice President – Technical Committee',
    company: 'IIIT Vadodara',
    location: 'Gujarat, India',
    period: 'Aug 2023 - May 2024',
    description:
      'Played a leadership role in organizing technical events, workshops, and inter-institute activities.',
    achievements: [
      'Organized inter-institute technical fests and workshops.',
      'Coordinated with teams to conduct orientation programs and technical sessions.',
      'Enhanced student participation through well-structured academic and technical events.',
    ],
    technologies: ['Leadership', 'Event Management', 'Team Coordination'],
  },
  {
    title: 'Women in Tech Lead',
    company: 'GDSC IIIT Vadodara',
    location: 'Gujarat, India',
    period: 'Aug 2023 - May 2024',
    description:
      'Led initiatives focused on empowering women in technology through mentorship, awareness, and community-building programs.',
    achievements: [
      'Promoted women-focused mentorship programs and scholarships.',
      'Conducted awareness sessions to encourage participation in tech communities.',
      'Contributed to building an inclusive and supportive technical ecosystem.',
    ],
    technologies: ['Community Building', 'Leadership', 'Mentorship'],
  },
];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey through various roles and companies, showcasing growth and achievements 
            in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                {/* Experience card */}
                <div className="ml-16">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-foreground/70 mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <div className="flex items-center text-foreground/60 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-foreground/60">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-foreground/70 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
