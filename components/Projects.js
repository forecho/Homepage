import React, { useState } from "react";
import userData from "@constants/data";
import Card from "./ui/Card";
import Icons from "./Icons";

function ProjectCard({ project }) {
  const [h, setH] = useState(false);
  const Ic = Icons[project.icon];
  const hasLink = Boolean(project.link);
  const Tag = hasLink ? "a" : "div";
  const hover = hasLink && h;

  return (
    <Card
      tilt={project.tilt}
      interactive={hasLink}
      padding="26px"
      style={{ display: "block", opacity: hasLink ? 1 : 0.9 }}
    >
      <Tag
        href={hasLink ? project.link : undefined}
        target={hasLink ? "_blank" : undefined}
        rel={hasLink ? "noreferrer" : undefined}
        onMouseEnter={hasLink ? () => setH(true) : undefined}
        onMouseLeave={hasLink ? () => setH(false) : undefined}
        style={{ display: "block", color: "inherit", cursor: hasLink ? "pointer" : "default" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 22,
          }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 50,
              height: 50,
              color: hover ? "var(--on-accent)" : "var(--accent)",
              background: hover ? "var(--accent)" : "var(--surface)",
              border: "var(--bw-2) solid var(--border)",
              borderRadius: "var(--wobbly-circle)",
              transition: "all var(--dur-fast) ease",
            }}
          >
            <Ic />
          </span>
          {hasLink ? (
            <span
              style={{
                color: hover ? "var(--accent)" : "var(--muted)",
                transform: hover ? "translate(3px,-3px)" : "none",
                transition: "all var(--dur-fast) ease",
              }}
            >
              <Icons.out />
            </span>
          ) : (
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--muted)",
                border: "var(--bw-1) dashed var(--border)",
                borderRadius: "var(--wobbly-sm)",
                padding: "2px 10px",
                transform: "rotate(-2deg)",
              }}
            >
              已下线
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-xl)",
            margin: "0 0 6px",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            color: "var(--fg-soft)",
            fontSize: "var(--text-base)",
            margin: 0,
            lineHeight: 1.55,
          }}
        >
          {project.description}
        </p>
      </Tag>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="sec-head">
        <h2 className="sec-title">Projects</h2>
        <p className="sec-sub">Some things I&apos;ve built to solve my own problems.</p>
      </div>
      <div className="grid">
        {userData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
