import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FranchiseFormats = () => {
  const formats = [
    {
      title: "Мини-студия",
      price: "от 300 000 ₽",
      area: "20-40 м²",
      description: "Идеальный старт для новичков",
      features: [
        "До 15 детей в группе",
        "3-4 направления творчества",
        "Базовый набор материалов",
        "Обучение 1 педагога",
      ],
      popular: false,
      color: "border-blue-200 hover:border-blue-300",
    },
    {
      title: "Стандарт",
      price: "от 500 000 ₽",
      area: "50-80 м²",
      description: "Оптимальный баланс цены и возможностей",
      features: [
        "До 25 детей в группе",
        "6-8 направлений творчества",
        "Расширенный набор материалов",
        "Обучение 2-3 педагогов",
        "Возможность праздников",
      ],
      popular: true,
      color:
        "border-purple-300 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      title: "Премиум",
      price: "от 800 000 ₽",
      area: "100+ м²",
      description: "Максимальные возможности для развития",
      features: [
        "До 40 детей в группе",
        "10+ направлений творчества",
        "Полный набор оборудования",
        "Обучение команды педагогов",
        "Организация мероприятий",
        "VIP-зона для родителей",
      ],
      popular: false,
      color: "border-yellow-200 hover:border-yellow-300",
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
