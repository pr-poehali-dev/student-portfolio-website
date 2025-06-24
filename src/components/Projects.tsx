import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Современная платформа электронной коммерции с админ-панелью и системой платежей",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Приложение для управления задачами с real-time обновлениями и командной работой",
      image:
        "https://images.unsplash.com/photo-1611224923853-70c4ddc2b5b1?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      github: "#",
      demo: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Интерактивная панель аналитики с визуализацией данных и отчетами",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "Социальная платформа с лентой новостей, чатами и системой рекомендаций",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tech: ["React Native", "GraphQL", "MongoDB", "Redis"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Мои проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подборка лучших работ, демонстрирующих мой опыт в создании
            современных веб-приложений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#F1F0FB] text-[#9b87f5] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white px-8 py-4 rounded-full transition-all duration-300"
          >
            Все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
