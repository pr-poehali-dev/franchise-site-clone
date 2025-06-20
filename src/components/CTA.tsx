import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Начните свой успешный бизнес
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Станьте частью растущей сети образовательных центров. Получите
            бесплатную консультацию и узнайте все условия сотрудничества.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Icon name="Download" className="mr-2" />
              Скачать презентацию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Clock" className="text-yellow-300" size={24} />
              <span className="text-white/90">Быстрый запуск за 2 месяца</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" className="text-yellow-300" size={24} />
              <span className="text-white/90">Гарантия поддержки</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Star" className="text-yellow-300" size={24} />
              <span className="text-white/90">Рейтинг партнеров 4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
