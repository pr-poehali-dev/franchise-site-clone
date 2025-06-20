import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Нужен ли опыт в сфере образования?",
      answer:
        "Нет, опыт не обязателен. Мы предоставляем полное обучение всем методикам преподавания, управлению центром и работе с родителями. Главное — желание развиваться в этой сфере.",
    },
    {
      question: "Сколько времени займёт окупаемость?",
      answer:
        "При соблюдении наших рекомендаций центр окупается в среднем за 12-18 месяцев. Скорость окупаемости зависит от локации, активности продвижения и качества работы.",
    },
    {
      question: "Какую поддержку вы предоставляете?",
      answer:
        "Полная поддержка включает: обучение команды, помощь в поиске помещения, маркетинговые материалы, методические пособия, техподдержку и персонального менеджера.",
    },
    {
      question: "Можно ли работать в небольшом городе?",
      answer:
        "Да, наша модель адаптируется под любой размер города. В небольших городах конкуренция ниже, что может быть преимуществом при правильном позиционировании.",
    },
    {
      question: "Что входит в стартовый пакет?",
      answer:
        "Стартовый пакет включает: обучающие материалы, методические пособия, брендбук, рекламные материалы, программное обеспечение и начальный набор оборудования.",
    },
    {
      question: "Как защищена территория партнера?",
      answer:
        "Мы предоставляем эксклюзивную территорию в радиусе 3 км от вашего центра, что исключает появление другого нашего партнера в этой зоне.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашей франшизе
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
