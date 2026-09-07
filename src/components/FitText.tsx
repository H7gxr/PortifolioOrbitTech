import { useLayoutEffect, useRef, useState } from "react";

interface FitTextProps {
  text: string;
  className?: string;
  fallbackVw?: number;
}

/**
 * Renders `text` sized so it always spans exactly 100% of its container's
 * width, regardless of how many characters it has. Measures the text at a
 * fixed baseline font-size and scales up/down to fill the available width,
 * re-measuring on resize and once the webfont finishes loading.
 */
export default function FitText({ text, className, fallbackVw = 10 }: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const BASE_PX = 100;

    function fit() {
      const container = containerRef.current;
      const measure = measureRef.current;
      if (!container || !measure) return;
      const containerWidth = container.offsetWidth;
      const textWidth = measure.scrollWidth;
      if (textWidth === 0 || containerWidth === 0) return;
      setFontSize((containerWidth / textWidth) * BASE_PX);
    }

    fit();

    const fontsReady = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts
      ?.ready;
    fontsReady?.then(fit).catch(() => {});

    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [text]);

  return (
    <div ref={containerRef} className="w-full">
      <span
        ref={measureRef}
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          fontSize: "100px",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
      <span
        className={className}
        style={{
          display: "block",
          whiteSpace: "nowrap",
          fontSize: fontSize ? `${fontSize}px` : `${fallbackVw}vw`,
          lineHeight: 1,
        }}
      >
        {text}
      </span>
    </div>
  );
}
