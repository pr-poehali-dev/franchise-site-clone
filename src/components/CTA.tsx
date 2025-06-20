import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-300 opacity-15 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Готовы начать?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Присоединяйтесь к нашей семье успешных предпринимателей в сфере
            детского образования
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
            >
              <Icon name="Download" className="mr-2" />
              Скачать презентацию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Clock" className="text-yellow-300" size={24} />
              <span>Консультация за 15 минут</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Shield" className="text-yellow-300" size={24} />
              <span>Гарантия поддержки</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Star" className="text-yellow-300" size={24} />
              <span>Рейтинг 4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
