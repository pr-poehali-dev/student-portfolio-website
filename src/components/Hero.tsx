import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2A2F3C] to-[#1A1F2C] text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Портрет разработчика"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-[#9b87f5] shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#9b87f5] bg-clip-text text-transparent">
            Алексей Иванов
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Веб-разработчик полного цикла
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Code className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400">React, TypeScript, Next.js</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Zap className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Palette className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-gray-400">UI/UX, Figma, Tailwind</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Мои проекты
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
