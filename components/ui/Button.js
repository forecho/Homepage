import React, { useState } from "react";

export default function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  href,
  disabled = false,
  icon = null,
  iconRight = null,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const active = hover && !disabled;

  const sizes = {
    sm: { padding: "8px 18px", fontSize: "16px" },
    md: { padding: "13px 26px", fontSize: "19px" },
    lg: { padding: "17px 34px", fontSize: "23px" },
  };

  const fill = {
    primary: "var(--accent)",
    secondary: "var(--accent-2)",
    ghost: "var(--hover)",
  }[variant];

  const normalBg = {
    primary: "var(--surface)",
    secondary: "var(--surface-alt)",
    ghost: "transparent",
  }[variant];

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-body)",
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    color: active ? (variant === "ghost" ? "var(--fg)" : "var(--on-accent)") : "var(--fg)",
    background: active ? fill : normalBg,
    border: `${variant === "ghost" ? "var(--bw-2)" : "var(--bw-3)"} ${
      variant === "ghost" ? "dashed" : "solid"
    } var(--border)`,
    borderRadius: "var(--wobbly)",
    boxShadow:
      variant === "ghost"
        ? "none"
        : press
        ? "0 0 0 0 var(--border)"
        : active
        ? "var(--shadow-press)"
        : "var(--shadow)",
    transform:
      variant === "ghost"
        ? "none"
        : press
        ? "translate(5px,5px)"
        : active
        ? "translate(2px,2px)"
        : "none",
    transition:
      "transform var(--dur-fast) ease, background var(--dur-fast) ease, color var(--dur-fast) ease, box-shadow var(--dur-fast) ease",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    ...sizes[size],
    ...style,
  };

  const Tag = href ? "a" : "button";
  const handlers = disabled
    ? {}
    : {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setPress(false);
        },
        onMouseDown: () => setPress(true),
        onMouseUp: () => setPress(false),
        onClick,
      };

  return (
    <Tag
      href={href}
      disabled={Tag === "button" ? disabled : undefined}
      style={base}
      {...handlers}
      {...rest}
    >
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
      {children}
      {iconRight && (
        <span style={{ display: "inline-flex", alignItems: "center" }}>{iconRight}</span>
      )}
    </Tag>
  );
}
