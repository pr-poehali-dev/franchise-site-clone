import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "TrendingUp",
      title: "Растущий рынок",
      description:
        "Сфера детского образования показывает стабильный рост 15% в год",
    },
    {
      icon: "Users",
      title: "Проверенная модель",
      description: "Более 150 успешных партнеров уже работают по нашей системе",
    },
    {
      icon: "BookOpen",
      title: "Уникальные методики",
      description: "Авторские программы, разработанные ведущими педагогами",
    },
    {
      icon: "Headphones",
      title: "Полная поддержка",
      description: "Персональный менеджер и техподдержка 24/7",
    },
    {
      icon: "BarChart3",
      title: "Высокая рентабельность",
      description: "Рентабельность до 40% при правильном ведении бизнеса",
    },
    {
      icon: "Shield",
      title: "Эксклюзивная территория",
      description: "Защита от конкуренции в радиусе 3 км от вашего центра",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали идеальную экосистему для успешного ведения бизнеса в
            сфере детского образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Icon
                  name={advantage.icon}
                  className="text-blue-600"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
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
