const DEFAULT_WHATSAPP_URL =
  "https://wa.me/5527988164241?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20or%C3%A7amento%20de%20uma%20landing%20page%21";

interface ContactButtonProps {
  href?: string;
  label?: string;
}

export default function ContactButton({
  href = DEFAULT_WHATSAPP_URL,
  label = "Faça seu orçamento!",
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90 whitespace-nowrap"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </a>
  );
}
