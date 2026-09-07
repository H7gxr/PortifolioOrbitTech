import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

const BASE_IMG =
  "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute sm:top-[4%] sm:left-[2%] md:left-[4%] sm:w-[120px] md:w-[160px] lg:w-[210px] pointer-events-none"
      >
        <img src={`${BASE_IMG}/moon_icon.11395d36.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute sm:bottom-[8%] sm:left-[6%] md:left-[10%] sm:w-[100px] md:w-[140px] lg:w-[180px] pointer-events-none"
      >
        <img src={`${BASE_IMG}/p59_1.4659672e.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute sm:top-[4%] sm:right-[2%] md:right-[4%] sm:w-[120px] md:w-[160px] lg:w-[210px] pointer-events-none"
      >
        <img src={`${BASE_IMG}/lego_icon-1.703bb594.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute sm:bottom-[8%] sm:right-[6%] md:right-[10%] sm:w-[130px] md:w-[170px] lg:w-[220px] pointer-events-none"
      >
        <img src={`${BASE_IMG}/Group_134-1.2e04f3ce.png`} alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Sobre nós
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
            text="A Orbit Tech nasceu para dar presença digital ao seu negócio. Criamos sites e landing pages que aumentam sua visibilidade, atraem mais visitantes e transformam esse alcance em clientes reais. Vamos colocar sua marca no topo dos resultados!"
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
