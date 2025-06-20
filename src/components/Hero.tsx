import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 to-pink-400 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-green-300 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-orange-300 rounded-full opacity-50 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Откройте свою студию
            <span className="block text-yellow-300">детского творчества!</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Присоединяйтесь к успешной франшизе детских мастер-классов. Полная
            поддержка от запуска до процветания!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="Rocket" className="mr-2" />
              Стать партнёром
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть видео
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-sm opacity-80">Действующих студий</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-yellow-300">1000+</div>
              <div className="text-sm opacity-80">Довольных детей</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-yellow-300">3 мес</div>
              <div className="text-sm opacity-80">До окупаемости</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
