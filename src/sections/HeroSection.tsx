import FadeIn from "../components/FadeIn";
import FitText from "../components/FitText";
import ContactButton from "../components/ContactButton";

const NAV_LINKS = [
  { label: "Sobre", href: "#about" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative bg-cover bg-center"
      style={{ overflowX: "clip", backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.4) 45%, rgba(12,12,12,0.75) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <FadeIn as="nav" delay={0} y={-20} className="w-full">
          <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading overflow-hidden w-full block">
          <FitText
            text="Somos Orbit Tech"
            className="font-black uppercase tracking-tight mt-6 sm:mt-4 md:-mt-5"
          />
        </FadeIn>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              criamos presença digital que gera visibilidade e mais clientes para o seu negócio
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
