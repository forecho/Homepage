import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import userData from "@constants/data";
import Icons from "./Icons";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme === "dark";

  return (
    <header className="topbar">
      <div className="brand">
        forecho<span className="dot">.</span>
      </div>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href={userData.blogUrl} target="_blank" rel="noreferrer">
          Blog
        </a>
        <button
          className="icon-btn"
          aria-label="切换明暗"
          type="button"
          onClick={() => setTheme(dark ? "light" : "dark")}
        >
          {mounted && (dark ? <Icons.sun /> : <Icons.moon />)}
        </button>
      </nav>
    </header>
  );
}
