import React, { useState } from "react";
import userData from "@constants/data";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Avatar from "./ui/Avatar";
import Icons from "./Icons";

const SOCIAL_ORDER = ["github", "twitter", "instagram", "linkedin", "telegram"];

function Social({ name, href }) {
  const [h, setH] = useState(false);
  const Ic = Icons[name];
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "grid",
        placeItems: "center",
        width: 46,
        height: 46,
        color: h ? "var(--on-accent)" : "var(--fg)",
        background: h ? "var(--accent)" : "var(--surface)",
        border: "var(--bw-2) solid var(--border)",
        borderRadius: "var(--wobbly-sm)",
        boxShadow: h ? "1px 1px 0 0 var(--border)" : "var(--shadow-sm)",
        transform: h ? "translate(2px,2px) rotate(-4deg)" : "none",
        transition: "all var(--dur-fast) ease",
      }}
    >
      <Ic />
    </a>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <Badge variant="note">Developer · Writer · Trader</Badge>
          <h1 className="headline">
            Hey, I&apos;m <span className="name">forecho</span>
          </h1>
          <p className="bio">
            我曾是一名软件工程师，有 13 年的开发经验，也是开源爱好者、独立博客作者，以及一名野生价格行为交易员。目前正在努力成为一名
            <span className="hl">成功的交易员</span>。你可以通过浏览
            <a href={userData.blogUrl} target="_blank" rel="noreferrer">
              我的博客
            </a>
            进一步了解我，我会在那里分享我的代码、书单、生活点滴以及投资经验。
          </p>
          <div className="socials">
            {SOCIAL_ORDER.map((name) => (
              <Social key={name} name={name} href={userData.socialLinks[name]} />
            ))}
          </div>
          <div className="cta-row">
            <Button
              variant="primary"
              size="lg"
              href={userData.blogUrl}
              iconRight={<Icons.arrow />}
            >
              浏览我的博客
            </Button>
            <svg
              className="cta-deco"
              width="92"
              height="54"
              viewBox="0 0 92 54"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M88 8C66 10 42 18 28 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="3 6"
              />
              <path
                d="M28 42l-4-13M28 42l13 1"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="avatar-wrap">
          <Avatar src={userData.avatarUrl} alt="forecho" size={300} tape tilt={2} />
        </div>
      </div>
    </section>
  );
}
