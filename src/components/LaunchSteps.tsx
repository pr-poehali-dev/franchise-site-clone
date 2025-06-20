import Icon from "@/components/ui/icon";

const LaunchSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Подача заявки",
      description: "Заполните форму и получите консультацию специалиста",
      icon: "FileText",
      color: "bg-blue-100 text-blue-600",
    },
    {
      number: "02",
      title: "Обучение",
      description: "Пройдите комплексное обучение методикам и управлению",
      icon: "GraduationCap",
      color: "bg-green-100 text-green-600",
    },
    {
      number: "03",
      title: "Поиск помещения",
      description: "Поможем найти идеальное место с высоким трафиком",
      icon: "MapPin",
      color: "bg-orange-100 text-orange-600",
    },
    {
      number: "04",
      title: "Запуск",
      description: "Торжественное открытие с поддержкой маркетинговой команды",
      icon: "Rocket",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Этапы запуска студии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы проведём вас через каждый шаг на пути к успешному бизнесу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-gray-300">
                    {step.number}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}
                  >
                    <Icon name={step.icon} size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchSteps;
