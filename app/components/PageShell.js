import Link from "next/link";

export default function PageShell({ title, description, children }) {
  return (
    <main className="page-shell">
      <header className="page-header">
        <div className="container">
          <nav className="page-nav">
            <Link href="/" className="logo-title">
              <h1>Vivek</h1>
            </Link>
            <div className="page-links">
              <Link href="/experience">Experience</Link>
              <Link href="/education">Education</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/">Home</Link>
            </div>
          </nav>
          <div className="page-hero">
            <p>{description}</p>
            <h1 className="page-title">{title}</h1>
          </div>
        </div>
      </header>
      <section className="page-content">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}
