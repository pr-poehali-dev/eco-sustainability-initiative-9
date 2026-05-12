import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-5 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Площадки
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Две рекомендуемые локации · Екатеринбург</p>
        </div>

        <div className="space-y-0">
          {[
            {
              number: "01",
              title: "МТС Live Холл",
              category: "Приоритет · бульвар Экспо, 2",
              detail: "Трансформируемый зал от 1 500 до 5 000 зрителей. Дополнительные выставочные и открытые площади до 60 000 м². Полный цикл мероприятий без дополнительной логистики — одна площадка закрывает весь день.",
              cap: "до 5 000 чел.",
              direction: "left",
            },
            {
              number: "02",
              title: "УЦРД Горького",
              category: "Альтернатива · ул. Горького, 4а",
              detail: "Атриумное пространство площадью более 7 000 м², рассчитано на 1 500+ гостей. Центр города, современный архитектурный дизайн. Подходит для камерного вечернего формата.",
              cap: "1 500+ чел.",
              direction: "right",
            },
            {
              number: "03",
              title: "Офис банка",
              category: "Утренняя часть · 08:00–12:00",
              detail: "Привычное и комфортное пространство для сотрудников. Оформление в едином стиле: входная арка из живых растений, брендированный ресепшн, живые цветы и гирлянды тёплого белого света в open space.",
              cap: "1 500 чел.",
              direction: "left",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group border-b border-foreground/10 py-7 transition-all duration-700 hover:border-foreground/20 md:py-9 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : item.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="mt-1 font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mb-2 font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">{item.detail}</p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-foreground/30 md:text-sm">{item.cap}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}