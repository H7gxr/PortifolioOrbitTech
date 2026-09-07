import FadeIn from "../components/FadeIn";

const PROCESS_STEPS = [
  {
    number: "01",
    name: "Diagnóstico",
    description:
      "Entendemos seu negócio, seu público e seus objetivos para desenhar a estratégia certa desde o primeiro contato.",
  },
  {
    number: "02",
    name: "Estratégia & Design",
    description:
      "Criamos um layout exclusivo, alinhado à sua marca e pensado para guiar o visitante até a conversão.",
  },
  {
    number: "03",
    name: "Desenvolvimento",
    description:
      "Colocamos a página no ar com performance, responsividade e integrações prontas para captar clientes.",
  },
  {
    number: "04",
    name: "Suporte Contínuo",
    description:
      "Acompanhamos os resultados e ajustamos o que for preciso para manter sua presença sempre em alta.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="processo"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center"
        style={{
          color: "#0C0C0C",
          fontSize: "clamp(3rem, 12vw, 160px)",
          marginBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        Processo
      </h2>

      <div className="max-w-5xl mx-auto">
        {PROCESS_STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {step.number}
              </span>
              <div className="flex flex-col justify-center gap-2 sm:gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {step.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: "#0C0C0C",
                    opacity: 0.6,
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
