import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-5 transition-all duration-700 md:mb-8 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Концепция
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ «Код будущего: версия 2.0» · Четыре кода успеха</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              title: "Код команды",
              description: "Единый день для 1 500 сотрудников — утро в привычном офисе и вечер на площадке создают ощущение сопричастности и общего пути. Командообразование через активности, живое общение и совместный опыт.",
              direction: "top",
            },
            {
              title: "Код технологий",
              description: "VR-тренажёры, проекционная фотозона, цифровой экран с программой дня, моментальная отправка видео гостям — технологии присутствуют на каждом шагу и подчёркивают образ банка будущего.",
              direction: "right",
            },
            {
              title: "Код доверия",
              description: "Прозрачная смета, проверенные подрядчики, детальный тайминг. Единый дизайн-код: корпоративные цвета + белый + серебристый/металлик + акценты зелёного — от входной арки до салфеток на столах.",
              direction: "left",
            },
            {
              title: "Код движения",
              description: "Формат «2-в-1» — целый день насыщенных событий. Живая музыка, DJ-сет, танцевальные номера, стендап, кавер-группа и неформальные зоны держат энергию от первого кофе до последнего трека.",
              direction: "bottom",
            },
          ].map((service, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                switch (service.direction) {
                  case "left": return "-translate-x-16 opacity-0"
                  case "right": return "translate-x-16 opacity-0"
                  case "top": return "-translate-y-16 opacity-0"
                  case "bottom": return "translate-y-16 opacity-0"
                  default: return "translate-y-12 opacity-0"
                }
              }
              return "translate-x-0 translate-y-0 opacity-100"
            }
            return (
              <div
                key={i}
                className={`group transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
                  <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}