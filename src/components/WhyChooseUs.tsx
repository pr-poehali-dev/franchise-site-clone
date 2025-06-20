import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "TrendingUp",
      title: "Востребованность на рынке",
      description:
        "Услуги детских центров всегда пользуются спросом, так как родители постоянно ищут возможности для всестороннего развития своих детей",
      color: "text-blue-500",
    },
    {
      icon: "BarChart3",
      title: "Потенциал для роста и масштабирования",
      description:
        "Бизнес-модель позволяет стабильно увеличивать прибыль за счет расширения спектра услуг и добавления новых востребованных направлений",
      color: "text-green-500",
    },
    {
      icon: "Heart",
      title: "Социальная значимость",
      description:
        "Ваш бизнес будет нести важную социальную миссию, способствуя развитию и воспитанию подрастающего поколения",
      color: "text-red-500",
    },
    {
      icon: "MapPin",
      title: "Гибкость в выборе локации",
      description:
        "«Продленка в каждый дом» — концепция позволяет открыть несколько небольших центров в разных районах, оптимизируя затраты",
      color: "text-purple-500",
    },
    {
      icon: "Users",
      title: "Комплексный подход к развитию ребенка",
      description:
        "Гармоничное сочетание воспитания и образования в едином процессе, обеспечивающее всестороннее развитие личности",
      color: "text-orange-500",
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
