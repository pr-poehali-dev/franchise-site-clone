import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FranchiseFormats = () => {
  const formats = [
    {
      title: "Мини",
      price: "от 800 000 ₽",
      area: "от 40 м²",
      description: "Компактный формат для старта",
      features: [
        "Площадь: от 40 кв.м",
        "Инвестиции: от 800 000 руб",
        "Паушальный взнос: 300 000 руб",
        "Роялти: 5%",
        "До 50 учеников одновременно",
      ],
      popular: false,
    },
    {
      title: "Стандарт",
      price: "от 1 500 000 ₽",
      area: "от 80 м²",
      description: "Оптимальный выбор для развития",
      features: [
        "Площадь: от 80 кв.м",
        "Инвестиции: от 1 500 000 руб",
        "Паушальный взнос: 500 000 руб",
        "Роялти: 5%",
        "До 100 учеников одновременно",
      ],
      popular: true,
    },
    {
      title: "Премиум",
      price: "от 2 500 000 ₽",
      area: "от 150 м²",
      description: "Максимальный потенциал развития",
      features: [
        "Площадь: от 150 кв.м",
        "Инвестиции: от 2 500 000 руб",
        "Паушальный взнос: 700 000 руб",
        "Роялти: 4%",
        "До 200 учеников одновременно",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Форматы франшизы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий формат под ваши возможности и цели
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                format.popular
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {format.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {format.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {format.price}
                </div>
                <div className="text-gray-500 mb-4">{format.area}</div>
                <p className="text-gray-600">{format.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {format.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      className="text-green-500 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-bold py-3 ${
                  format.popular
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                Получить условия
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseFormats;
