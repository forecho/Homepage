import React from "react";

export default function Badge({
  children,
  variant = "note", // "note" (post-it) | "solid" (accent) | "outline"
  tilt = -1.5,
  style = {},
  ...rest
}) {
  const palettes = {
    note: { background: "var(--note)", color: "var(--fg)", border: "var(--border)" },
    solid: { background: "var(--accent)", color: "var(--on-accent)", border: "var(--border)" },
    outline: { background: "var(--surface)", color: "var(--fg)", border: "var(--border)" },
  };
  const p = palettes[variant];

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    lineHeight: 1.2,
    padding: "5px 13px",
    color: p.color,
    background: p.background,
    border: `var(--bw-1) ${variant === "outline" ? "dashed" : "solid"} ${p.border}`,
    borderRadius: "var(--wobbly-sm)",
    boxShadow: "var(--shadow-sm)",
    transform: `rotate(${tilt}deg)`,
    ...style,
  };

  return (
    <span style={base} {...rest}>
      {children}
    </span>
  );
}
