import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FranchiseFormats = () => {
  const formats = [
    {
      title: "Мини",
      price: "от 500 000 ₽",
      area: "от 38 м²",
      description: "Компактный формат для начинающих",
      features: [
        "Площадь: от 38 кв.м.",
        "Инвестиции: от 500 000 руб.",
        "Паушальный взнос: от 250 000 руб.",
        "Роялти: 5%, но не менее 15 000 руб.",
      ],
      popular: false,
      color: "border-blue-200 hover:border-blue-300",
    },
    {
      title: "Стандарт",
      price: "от 1 200 000 ₽",
      area: "от 75 м²",
      description: "Расширенные возможности для развития",
      features: [
        "Площадь: от 75 кв.м.",
        "Инвестиции: от 1 200 000 руб.",
        "Паушальный взнос: от 450 000 руб.",
        "Роялти: 5%, но не менее 15 000 руб.",
      ],
      popular: true,
      color:
        "border-purple-300 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Форматы франшизы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий формат под ваши возможности и амбиции
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 p-8 transition-all duration-300 hover-scale animate-fade-in ${format.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {format.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {format.title}
                </h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
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
                className={`w-full ${
                  format.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    : "bg-gray-800 hover:bg-gray-900"
                } text-white font-bold py-3`}
              >
                Узнать подробнее
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseFormats;
