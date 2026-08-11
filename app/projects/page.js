import PageShell from "../components/PageShell";

const projects = [
  {
    title: "amfah.com",
    url: "https://amfah.com",
    description: "Live website: amfah.com",
    image: "/thumbs/amfah.png",
    stack: "",
  },
  {
    title: "workernear.com",
    url: "https://workernear.com",
    description: "Live website: workernear.com",
    image: "/thumbs/workernear.png",
    stack: "",
  },
  {
    title: "Hotel Booking",
    url: "https://hotel-booking-omega-brown.vercel.app/",
    description: "Hotel booking application (live)",
    image: "/thumbs/hotel.png",
    stack: "",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell title="Projects" description="A selection of projects that reflect my hands-on experience across full-stack web development.">
      <div className="page-card">
        <div className="page-grid">
          {projects.map((project) => (
            <div className="page-list-item" key={project.title}>
                        {project.image ? (
                          <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={`${project.title} thumbnail`} style={{ width: '100%', borderRadius: '8px', display: 'block', marginBottom: '12px' }} />
                          </a>
                        ) : null}

                        <h3>
                          {project.url ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <p>{project.description}</p>
                        {project.stack ? <p className="project-stack">{project.stack}</p> : null}
                      </div>
                    ))}
        </div>
      </div>
    </PageShell>
  );
}
