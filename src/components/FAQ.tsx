import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Нужен ли опыт работы с детьми?",
      answer:
        "Нет, опыт не обязателен. Мы предоставляем полное обучение нашим методикам, психологии работы с детьми и управлению студией. Главное — желание работать и развиваться в этой сфере.",
    },
    {
      question: "Сколько времени займёт окупаемость инвестиций?",
      answer:
        "При соблюдении наших рекомендаций студия окупается в среднем за 3-6 месяцев. Многое зависит от местоположения, активности продвижения и качества работы.",
    },
    {
      question: "Какая поддержка предоставляется после открытия?",
      answer:
        "Вы получаете постоянную поддержку: персональный менеджер, горячая линия, регулярные вебинары, обновление методических материалов, помощь в маркетинге и решении любых вопросов.",
    },
    {
      question: "Можно ли работать без собственного помещения?",
      answer:
        "Да, возможен выездной формат работы. Вы можете проводить мастер-классы в детских садах, школах, на праздниках и мероприятиях. Это требует меньших инвестиций на старте.",
    },
    {
      question: "Какие материалы входят в стартовый пакет?",
      answer:
        "Стартовый пакет включает: все материалы для творчества на 3 месяца, методические пособия, рекламные материалы, брендинг студии, программное обеспечение для ведения учёта.",
    },
    {
      question: "Есть ли ограничения по территории?",
      answer:
        "Мы предоставляем эксклюзивную территорию в радиусе 3-5 км в зависимости от плотности населения. Это защищает ваш бизнес от внутренней конкуренции.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
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
                className="border rounded-2xl px-6 animate-fade-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-purple-600 py-6">
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
