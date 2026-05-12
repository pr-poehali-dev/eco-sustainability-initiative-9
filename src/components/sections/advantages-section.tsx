import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AdvantagesSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
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
            Почему это
            <br />
            <span className="text-foreground/40">сработает</span>
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ключевые преимущества предложения</p>
        </div>

        <div className="space-y-0">
          {[
            {
              number: "01",
              title: "Целостная архитектура дня",
              body: "Утро и вечер связаны единой концепцией «Код будущего» и сквозным дизайн-кодом. Сотрудник чувствует себя участником цельного события, а не двух разных мероприятий.",
              direction: "left",
            },
            {
              number: "02",
              title: "Гибкость масштаба",
              body: "МТС Live Холл трансформируется под любой формат и закрывает все потребности без дополнительной логистики. Один подрядчик — минимум рисков.",
              direction: "right",
            },
            {
              number: "03",
              title: "Актуальный мерч с долгой жизнью",
              body: "Термокружки, power bank, ежедневники — полезные предметы ежедневного использования с высоким бренд-эффектом. Сотрудники продолжают «носить» событие после его окончания.",
              direction: "left",
            },
            {
              number: "04",
              title: "Баланс технологий и человечности",
              body: "VR и нейрографика соседствуют с живой музыкой и неформальным общением. Программа охватывает все категории сотрудников — от IT-команды до административного персонала.",
              direction: "right",
            },
            {
              number: "05",
              title: "Прозрачная смета без скрытых статей",
              body: "Детальная разбивка по каждому блоку, рыночные цены Екатеринбурга 2026 г., минимизация финансовых рисков. Вы точно знаете, за что платите.",
              direction: "left",
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
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-8">
                <span className="mt-1 font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-relaxed text-foreground/65 md:text-base">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(8)}>
            Связаться с организаторами
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
