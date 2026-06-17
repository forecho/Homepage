import React, { useState } from "react";

export default function Card({
  children,
  variant = "default", // "default" | "note" | "speech"
  decoration = "none", // "none" | "tape" | "tack"
  tilt = 0,
  interactive = false,
  padding = "28px",
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const lifted = interactive && hover;

  const bg = variant === "note" ? "var(--note)" : "var(--surface)";

  const base = {
    position: "relative",
    background: bg,
    border: "var(--bw-2) solid var(--border)",
    borderRadius: "var(--wobbly-md)",
    boxShadow: lifted ? "var(--shadow-lift)" : "var(--shadow)",
    padding,
    transform: lifted ? "rotate(0deg) translate(-2px,-2px)" : `rotate(${tilt}deg)`,
    transition: "transform var(--dur) var(--ease-snap), box-shadow var(--dur) ease",
    ...style,
  };

  const handlers = interactive
    ? {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
      }
    : {};

  return (
    <div style={base} {...handlers} {...rest}>
      {decoration === "tape" && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            width: "104px",
            height: "30px",
            transform: "translateX(-50%) rotate(-4deg)",
            background: "rgba(150,150,150,.26)",
            border: "1px dashed rgba(90,90,90,.4)",
          }}
        />
      )}
      {decoration === "tack" && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-11px",
            left: "50%",
            width: "20px",
            height: "20px",
            transform: "translateX(-50%)",
            background: "var(--accent)",
            border: "var(--bw-1) solid var(--border)",
            borderRadius: "var(--wobbly-circle)",
            boxShadow: "1px 2px 0 0 var(--border)",
          }}
        />
      )}
      {children}
      {variant === "speech" && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "38px",
            bottom: "-18px",
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: "20px solid var(--border)",
          }}
        />
      )}
      {variant === "speech" && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "41px",
            bottom: "-13px",
            width: 0,
            height: 0,
            borderLeft: "11px solid transparent",
            borderRight: "11px solid transparent",
            borderTop: "16px solid var(--surface)",
          }}
        />
      )}
    </div>
  );
}
