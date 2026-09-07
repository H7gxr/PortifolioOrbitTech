import { Camera, Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn from "../components/FadeIn";

interface Contact {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

const CONTACTS: Contact[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Fale direto com a gente",
    href: "https://wa.me/5527988164241?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20or%C3%A7amento%20de%20uma%20landing%20page%21",
  },
  {
    icon: Camera,
    label: "Instagram",
    value: "@orbit.techoficial",
    href: "https://www.instagram.com/orbit.techoficial/",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato.userorbittech@gmail.com",
    href: "mailto:contato.userorbittech@gmail.com",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center"
        style={{
          color: "#0C0C0C",
          fontSize: "clamp(3rem, 12vw, 160px)",
          marginBottom: "clamp(1rem, 3vw, 1.5rem)",
        }}
      >
        FAQ
      </h2>
      <p
        className="text-center font-light"
        style={{
          color: "#0C0C0C",
          opacity: 0.6,
          fontSize: "clamp(1rem, 2vw, 1.35rem)",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        Escolha o canal que preferir e fale com a gente
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 sm:gap-5">
        {CONTACTS.map((contact, i) => {
          const Icon = contact.icon;
          return (
            <FadeIn key={contact.label} delay={i * 0.1}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 sm:gap-6 rounded-3xl px-6 sm:px-8 py-5 sm:py-6 transition-colors hover:bg-black/5"
                style={{ border: "1px solid rgba(12, 12, 12, 0.15)" }}
              >
                <Icon size={28} color="#0C0C0C" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span
                    className="font-medium uppercase tracking-wide"
                    style={{ color: "#0C0C0C", fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)" }}
                  >
                    {contact.label}
                  </span>
                  <span
                    className="font-light"
                    style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.8rem, 1.4vw, 1rem)" }}
                  >
                    {contact.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
