import PageShell from "../components/PageShell";

const experiencePoints = [
  {
    title: "Full-Stack Developer",
    text: "Working as a Full-Stack Developer at Nexcore Alliance, building scalable web applications across frontend and backend systems.",
  },
  {
    title: "Frontend implementation",
    text: "Crafting responsive interfaces with React, Next.js, HTML, CSS, and modern UI patterns.",
  },
  {
    title: "Backend & APIs",
    text: "Developing APIs, handling database integrations, and supporting data-driven product features.",
  },
];

export default function ExperiencePage() {
  return (
    <PageShell title="Experience" description="A look at my professional journey and the work I do today.">
      <div className="page-card">
        <p>
          I have hands-on experience building modern web products, delivering polished interfaces, and
          turning requirements into practical solutions.
        </p>
        <div className="page-grid">
          {experiencePoints.map((item) => (
            <div className="page-list-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
