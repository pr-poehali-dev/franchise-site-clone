import Icon from "@/components/ui/icon";

const LaunchSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Заявка и консультация",
      description:
        "Оставьте заявку и получите персональную консультацию по развитию бизнеса",
      icon: "MessageSquare",
    },
    {
      number: "02",
      title: "Обучение команды",
      description:
        "Пройдите комплексное обучение методикам преподавания и управлению центром",
      icon: "GraduationCap",
    },
    {
      number: "03",
      title: "Подбор локации",
      description: "Поможем найти идеальное помещение с высокой проходимостью",
      icon: "MapPin",
    },
    {
      number: "04",
      title: "Запуск и поддержка",
      description: "Торжественное открытие с полной маркетинговой поддержкой",
      icon: "Rocket",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Этапы запуска
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговый план от идеи до успешно работающего центра
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-gray-200">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon
                        name={step.icon}
                        className="text-blue-600"
                        size={24}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-10">
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSteps;
