import { useReveal } from "@/hooks/use-reveal"

export function MorningSection() {
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
            Утро
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ 08:00–12:00 · Офис банка</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              code: "01",
              title: "Кофе-зона",
              body: "4 станции бариста: эспрессо, капучино, латте, американо, чай. Не менее 2 порций на человека. Канапе, мини-круассаны, макарон, тарталетки, фрукты — выход ≥ 400 г/чел.",
              sub: "~900 руб./чел. · ~1 350 000 руб.",
              direction: "top",
            },
            {
              code: "02",
              title: "Активности",
              body: "VR-тренажёр публичных выступлений, арт-станция «Нейрографика», кикер-турнир / аэрохоккей, квиз-спринт «Финансы. IT. История банка». Ведущие: 3–4 чел.",
              sub: "~320 000 руб.",
              direction: "bottom",
            },
            {
              code: "03",
              title: "Фотозона и декор",
              body: "Проекционная фотозона: баннерный фон 450×240 см, проектор 5000 лм, сенсорный стол, моментальная отправка ролика. Арка из живых растений, LED-элементы, брендированные панно.",
              sub: "Декор офиса ~150 000 руб.",
              direction: "top",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : item.direction === "top"
                    ? "-translate-y-12 opacity-0"
                    : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                <span className="font-mono text-xs text-foreground/60">{item.code}</span>
              </div>
              <h3 className="mb-3 font-sans text-2xl font-light text-foreground md:text-3xl">{item.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/80 md:text-base">{item.body}</p>
              <p className="font-mono text-xs text-foreground/50">{item.sub}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 border-t border-foreground/10 pt-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-wrap gap-8 md:gap-16">
            {[
              { label: "Участников", value: "до 1 500" },
              { label: "Техника (звук + свет)", value: "~250 000 руб." },
              { label: "Итого утро", value: "≈ 3 390 000 руб." },
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