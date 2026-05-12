import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Укрупнённая
                <br />
                смета
                <br />
                <span className="text-foreground/40">2026</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="space-y-2">
                {[
                  { label: "Сувенирная продукция (1 500 наборов)", value: "1 200 000" },
                  { label: "Фотозона + украшение офиса", value: "270 000" },
                  { label: "Кофе-брейк + закуски", value: "1 350 000" },
                  { label: "Техника, активности (утро)", value: "570 000" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between gap-4 border-b border-foreground/10 pb-2">
                    <span className="text-sm text-foreground/70">{row.label}</span>
                    <span className="shrink-0 font-mono text-sm text-foreground/90">{row.value} ₽</span>
                  </div>
                ))}
                <div className="flex justify-between gap-4 pt-1">
                  <span className="text-sm font-medium text-foreground">Итого утро</span>
                  <span className="font-mono text-sm font-medium text-foreground">≈ 3 390 000 ₽</span>
                </div>
              </div>

              <p className="pt-2 text-xs leading-relaxed text-foreground/40">
                * Цены ориентировочные, рассчитаны по рынку Екатеринбурга на 2026 г., могут варьироваться в зависимости от сезона и финального меню/райдера.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 space-y-2 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {[
                { label: "Welcome-зона + фуршет", value: "3 420 000" },
                { label: "Шоу-программа (DJ, кавер, стендап)", value: "275 000" },
                { label: "Развлечения (караоке, фотозона)", value: "245 000" },
                { label: "Техника + сцена + декор", value: "750 000" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between gap-4 border-b border-foreground/10 pb-2">
                  <span className="text-sm text-foreground/70">{row.label}</span>
                  <span className="shrink-0 font-mono text-sm text-foreground/90">{row.value} ₽</span>
                </div>
              ))}
              <div className="flex justify-between gap-4 pt-1">
                <span className="text-sm font-medium text-foreground">Итого вечер</span>
                <span className="font-mono text-sm font-medium text-foreground">≈ 4 690 000 ₽</span>
              </div>
            </div>

            <div
              className={`mt-6 border-t border-foreground/20 pt-6 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-baseline gap-4">
                <div className="text-4xl font-light text-foreground md:text-6xl">8,08</div>
                <div>
                  <div className="font-sans text-xl font-light text-foreground">млн руб.</div>
                  <div className="font-mono text-xs text-foreground/60">Общий бюджет · ~5 380 руб./чел.</div>
                </div>
              </div>
            </div>

            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(8)}>
                Обсудить детали
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(3)}>
                Программа дня
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
