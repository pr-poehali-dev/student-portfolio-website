import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "Современные подходы к State Management в React",
      excerpt:
        "Разбираем Zustand, Jotai и другие современные решения для управления состоянием в React-приложениях",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      date: "15 июня 2024",
      readTime: "8 мин",
      category: "React",
    },
    {
      title: "TypeScript: продвинутые типы и их применение",
      excerpt:
        "Изучаем conditional types, mapped types и другие мощные возможности TypeScript для создания типобезопасного кода",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      date: "8 июня 2024",
      readTime: "12 мин",
      category: "TypeScript",
    },
    {
      title: "Оптимизация производительности Next.js приложений",
      excerpt:
        "Практические советы по улучшению скорости загрузки и SEO-оптимизации веб-приложений на Next.js",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      date: "2 июня 2024",
      readTime: "10 мин",
      category: "Next.js",
    },
  ];

  return (
    <section className="py-20 bg-[#F1F0FB] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Блог и заметки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Делюсь опытом, изучаю новые технологии и рассказываю о лучших
            практиках разработки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#9b87f5] text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{article.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1A1F2C] mb-3 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-[#9b87f5] hover:text-[#8B5CF6] hover:bg-[#F1F0FB] p-0 h-auto font-semibold"
                >
                  Читать далее
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-4 rounded-full transition-all duration-300"
          >
            Все статьи
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
