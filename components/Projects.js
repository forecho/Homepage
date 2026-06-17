import React, { useState } from "react";
import userData from "@constants/data";
import Card from "./ui/Card";
import Icons from "./Icons";

function ProjectCard({ project }) {
  const [h, setH] = useState(false);
  const Ic = Icons[project.icon];
  const hasLink = Boolean(project.link);
  const Tag = hasLink ? "a" : "div";

  return (
    <Card tilt={project.tilt} interactive padding="26px" style={{ display: "block" }}>
      <Tag
        href={hasLink ? project.link : undefined}
        target={hasLink ? "_blank" : undefined}
        rel="noreferrer"
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{ display: "block", color: "inherit" }}
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
              color: h ? "var(--on-accent)" : "var(--accent)",
              background: h ? "var(--accent)" : "var(--surface)",
              border: "var(--bw-2) solid var(--border)",
              borderRadius: "var(--wobbly-circle)",
              transition: "all var(--dur-fast) ease",
            }}
          >
            <Ic />
          </span>
          <span
            style={{
              color: h ? "var(--accent)" : "var(--muted)",
              transform: h ? "translate(3px,-3px)" : "none",
              transition: "all var(--dur-fast) ease",
            }}
          >
            <Icons.out />
          </span>
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
