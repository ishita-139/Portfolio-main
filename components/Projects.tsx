'use client';

import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    users?: string;
  };
}

export function Projects() {
  const projects: Project[] = [
    {
    title: 'AI Finance Platform',
    description:
      'Built an AI-powered finance management platform with a user-friendly dashboard featuring charts, tables, and AI-based receipt scanning. Integrated Gemini AI to generate financial insights, automate recurring transactions, and send budget alerts. Implemented secure authentication, rate limiting, and bot protection.',
    image: '/ai-finance-platform.png', // add image in public/
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Gemini AI',
      'Prisma',
      'Shadcn UI',
      'Inngest',
      'Arcjet',
    ],
    githubUrl: 'https://github.com/ishita-139/AI-Finance-PLatform',
    featured: true,
  },
    {
    title: 'Fake News Detection',
    description:
      'Developed a Fake News Detection system using NLP techniques with TF-IDF feature extraction. Trained and evaluated multiple machine learning models including Logistic Regression, Naive Bayes, KNN, Decision Tree, and Random Forest to classify news as real or fake and compare performance metrics.',
    image: '/fake-news-detection.png', // add image in public/
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Pandas',
      'NumPy',
      'Seaborn',
    ],
    githubUrl: 'https://github.com/ishita-139/Fake-News-Detection-Using-MLr',
    featured: true,
  },
     {
    title: 'AI Quiz Generator App',
    description:
      'Created an AI-powered Quiz Generator using Python, Streamlit, and OpenAI LLMs. The application accepts user-provided text, allows selection of difficulty levels (Easy/Medium/Hard), and dynamically generates quizzes in real time using prompt engineering.',
    image: '/ai-quiz-generator.png', // add image in public/
    technologies: [
      'Python',
      'OpenAI',
      'LLM',
      'Streamlit',
      'Pandas',
      'NumPy',
    ],
    githubUrl: 'https://github.com/ishita-139/AI-powered-Quiz-Generator',
    featured: true,
  },
];
   

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my best work, featuring full-stack applications and innovative solutions 
            built with modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.stats && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Github className="h-4 w-4 mr-1" />
                      {project.stats.forks}
                    </div>
                    <div>
                      {project.stats.users} users
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {project.title}
                </h4>
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary/30 text-foreground/60 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-foreground/70 mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            asChild
          >
            <a
              href="https://github.com/rajat-kumar-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
