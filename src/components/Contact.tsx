import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-[#1A1F2C] text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Готов обсудить ваш проект и воплотить идеи в жизнь. Давайте создадим
            что-то великолепное вместе!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">alexey@developer.ru</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-gray-300">+7 (999) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#9b87f5] p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Локация</div>
                  <div className="text-gray-300">Москва, Россия</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4">Время ответа</h4>
              <p className="text-gray-300 mb-4">
                Обычно отвечаю в течение 2-4 часов в рабочие дни
              </p>
              <div className="text-[#9b87f5] font-semibold">
                Пн-Пт: 9:00 - 18:00 (MSK)
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Как вас зовут?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6] text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 w-5 h-5" />
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
