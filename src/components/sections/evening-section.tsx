import { useReveal } from "@/hooks/use-reveal"

export function EveningSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-5 transition-all duration-700 md:mb-7 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Вечер
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 13:00–20:00 · МТС Live Холл, Екатеринбург</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              code: "01",
              title: "Welcome-зона",
              body: "8 хостес в корпоративной форме. Безалкогольное игристое / лимонад с мятой и лаймом. Живое джазовое трио (рояль, контрабас, саксофон). LED-арка «Добро пожаловать в будущее!».",
              sub: "~120 000 руб.",
              direction: "top",
            },
            {
              code: "02",
              title: "Фуршет",
              body: "Брускетта с ростбифом, канапе с сёмгой, тарталетки с крабом, мини-бургеры, овощные роллы, фруктовые десерты. Выход ~500–600 г/чел. Premium-посуда, 12–15 официантов.",
              sub: "~2 200 руб./чел. · ~3 300 000 руб.",
              direction: "right",
            },
            {
              code: "03",
              title: "Шоу-программа",
              body: "Кавер-группа 6 музыкантов — 40 минут живого звука. Профессиональный танцевальный номер. Стендап 15 минут. DJ-сет 3 часа. Всё на одной сцене 8×4 м.",
              sub: "~275 000 руб.",
              direction: "left",
            },
            {
              code: "04",
              title: "Зоны отдыха",
              body: "Лаунж с мягкими пуфами и диванами, настольные игры. 2 профессиональные караоке-будки (50 000+ треков). Фотозона «LED-калейдоскоп / Неоновый тоннель» 1×2×2 м.",
              sub: "~245 000 руб.",
              direction: "bottom",
            },
          ].map((item, i) => {
            const getReveal = () => {
              if (!isVisible) {
                switch (item.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-12 opacity-0"
                  case "bottom": return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }
            return (
              <div
                key={i}
                className={`group transition-all duration-700 ${getReveal()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">{item.code}</span>
                </div>
                <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{item.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-foreground/80 md:text-base">{item.body}</p>
                <p className="font-mono text-xs text-foreground/50">{item.sub}</p>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-10 border-t border-foreground/10 pt-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <div className="flex flex-wrap gap-8 md:gap-16">
            {[
              { label: "Техника + сцена", value: "~550 000 руб." },
              { label: "Декор", value: "~200 000 руб." },
              { label: "Итого вечер", value: "≈ 4 690 000 руб." },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-mono text-xs text-foreground/50 mb-1">{stat.label}</p>
                <p className="font-sans text-lg font-light text-foreground md:text-xl">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}