import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

interface MouseFollowProps {
  children: ReactNode;
  containerRef: RefObject<HTMLElement | null>;
  /** Fraction of the distance between center and cursor to travel (0-1). */
  factor?: number;
  className?: string;
}

/**
 * Moves its content toward the cursor's position anywhere inside
 * `containerRef`, clamped so the element never moves past the edges of that
 * container. Clamping is asymmetric: it's computed from the element's own
 * resting position (which may be off-center, e.g. anchored to the bottom),
 * so it never pushes the element past the container bounds in any
 * direction.
 */
export default function MouseFollow({
  children,
  containerRef,
  factor = 0.18,
  className,
}: MouseFollowProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const translateRef = useRef({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const el = elRef.current;
    if (!container || !el) return;

    function handleMouseMove(e: MouseEvent) {
      if (!container || !el) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Recover the element's un-translated ("resting") rect by removing
      // the currently applied transform from its measured rect.
      const restLeft = elRect.left - translateRef.current.x;
      const restTop = elRect.top - translateRef.current.y;
      const restRight = elRect.right - translateRef.current.x;
      const restBottom = elRect.bottom - translateRef.current.y;

      const maxLeft = Math.max(0, restLeft - containerRect.left);
      const maxRight = Math.max(0, containerRect.right - restRight);
      const maxUp = Math.max(0, restTop - containerRect.top);
      const maxDown = Math.max(0, containerRect.bottom - restBottom);

      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;

      const rawDx = (e.clientX - centerX) * factor;
      const rawDy = (e.clientY - centerY) * factor;

      const dx = Math.max(-maxLeft, Math.min(maxRight, rawDx));
      const dy = Math.max(-maxUp, Math.min(maxDown, rawDy));

      translateRef.current = { x: dx, y: dy };
      setTranslate({ x: dx, y: dy });
    }

    function handleMouseLeave() {
      translateRef.current = { x: 0, y: 0 };
      setTranslate({ x: 0, y: 0 });
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, factor]);

  return (
    <div
      ref={elRef}
      className={className}
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: "transform 0.35s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
