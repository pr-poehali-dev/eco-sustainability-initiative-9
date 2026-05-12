import { useReveal } from "@/hooks/use-reveal"

export function MerchSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Сувениры
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 4 вида · 1 500 наборов · ~700–900 руб./набор</p>
        </div>

        <div className="space-y-0">
          {[
            {
              number: "01",
              title: "Термокружка 350 мл",
              detail: "Нержавеющая сталь, крышка — пищевой пластик. Лазерная гравировка логотипа. Упаковка: крафтовая коробка с логотипом банка.",
              direction: "left",
            },
            {
              number: "02",
              title: "Беспроводной Power Bank 5000 мАч",
              detail: "Корпус ABS-пластик. УФ-печать логотипа. Индивидуальный картонный конверт. Практичный и запоминающийся подарок.",
              direction: "right",
            },
            {
              number: "03",
              title: "Ежедневник А5 на пружине",
              detail: "Обложка экокожа / soft-touch. Тиснение или шелкография. Упаковка в плёнку. Высокий бренд-эффект при ежедневном использовании.",
              direction: "left",
            },
            {
              number: "04",
              title: "Стикербук + металлическая ручка",
              detail: "Гравировка на ручке. Упаковка: крафт-бокс с ложементом. Комплект выглядит как премиальный подарок.",
              direction: "right",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group flex items-start justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/20 md:py-6 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : item.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-8">
                <span className="mt-1 font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
                  {item.number}
                </span>
                <div>
                  <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-foreground/60 md:text-base">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <p className="font-mono text-sm text-foreground/50">
            Итого сувенирная продукция (1 500 наборов): <span className="text-foreground/80">≈ 1 200 000 руб.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
