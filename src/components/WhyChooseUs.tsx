import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Проверенная методика",
      description:
        "Авторские программы, разработанные педагогами и психологами",
      color: "text-yellow-500",
    },
    {
      icon: "Users",
      title: "Постоянная поддержка",
      description:
        "Персональный менеджер, горячая линия и регулярные консультации",
      color: "text-blue-500",
    },
    {
      icon: "TrendingUp",
      title: "Высокая прибыльность",
      description:
        "Средняя прибыль 150-300 тыс. руб/месяц при правильном ведении",
      color: "text-green-500",
    },
    {
      icon: "Palette",
      title: "Всё включено",
      description: "Материалы, инструменты, методички — полный стартовый пакет",
      color: "text-purple-500",
    },
    {
      icon: "Target",
      title: "Готовая аудитория",
      description: "Спрос на детское развитие растёт, клиенты найдутся везде",
      color: "text-pink-500",
    },
    {
      icon: "Shield",
      title: "Юридическая защита",
      description: "Полное оформление документов и защита торговой марки",
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали идеальную экосистему для успешного ведения бизнеса в
            сфере детского образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={advantage.icon}
                  size={32}
                  className={advantage.color}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
