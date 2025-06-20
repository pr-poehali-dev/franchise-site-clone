import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🚀 Запустите свой образовательный бизнес
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Франшиза детских
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              образовательных центров
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Присоединяйтесь к успешной сети образовательных центров. Полная
            поддержка от запуска до масштабирования бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Rocket" className="mr-2" />
              Стать партнёром
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть презентацию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                150+
              </div>
              <div className="text-white/80">Действующих центров</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                5000+
              </div>
              <div className="text-white/80">Успешных учеников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                2 года
              </div>
              <div className="text-white/80">Средняя окупаемость</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
