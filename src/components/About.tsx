import { ArrowRight, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-[#F1F0FB] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
            Обо мне
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Создаю современные веб-приложения, которые решают реальные задачи
            бизнеса. Специализируюсь на React-экосистеме и имею опыт работы с
            проектами любой сложности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
              alt="Рабочее место разработчика"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-[#9b87f5] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#1A1F2C]">50+</div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Clock className="w-8 h-8 text-[#9b87f5] mx-auto mb-3" />
                <div className="text-2xl font-bold text-[#1A1F2C]">5+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">
                Ключевые навыки
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">React & TypeScript</span>
                    <span className="text-[#9b87f5]">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#9b87f5] h-3 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Node.js & API</span>
                    <span className="text-[#9b87f5]">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#9b87f5] h-3 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">UI/UX Design</span>
                    <span className="text-[#9b87f5]">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#9b87f5] h-3 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              Подробнее обо мне
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
