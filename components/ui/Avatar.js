import React from "react";

export default function Avatar({
  src,
  alt = "",
  size = 96,
  tilt = 2,
  tape = false,
  shape = "wobbly", // "wobbly" | "circle"
  style = {},
  ...rest
}) {
  const radius = shape === "circle" ? "var(--wobbly-circle)" : "var(--wobbly-md)";

  const wrap = {
    position: "relative",
    display: "inline-block",
    transform: `rotate(${tilt}deg)`,
    ...style,
  };

  const img = {
    display: "block",
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    objectFit: "cover",
    border: "var(--bw-3) solid var(--border)",
    borderRadius: radius,
    boxShadow: "var(--shadow-lg)",
    background: "var(--surface-alt)",
  };

  return (
    <span style={wrap} {...rest}>
      {tape && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            zIndex: 2,
            top: "-15px",
            left: "50%",
            width: "42%",
            height: "30px",
            transform: "translateX(-50%) rotate(-4deg)",
            background: "rgba(150,150,150,.26)",
            border: "1px dashed rgba(90,90,90,.4)",
          }}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={img} />
    </span>
  );
}
