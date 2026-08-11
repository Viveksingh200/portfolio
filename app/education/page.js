import PageShell from "../components/PageShell";

const educationEntries = [
  {
    title: "MSc.IT - Cloud Computing",
    text: "Pursuing a Master of Science in Information Technology with a specialization in Cloud Computing from B.K. Birla College, Kalyan.",
  },
  {
    title: "BSc.IT",
    text: "Completed Bachelor of Science in Information Technology from Siddharth College of Arts, Commerce and Science, affiliated with Mumbai University.",
  },
  {
    title: "12th Grade",
    text: "Completed my 12th grade from Siddharth College Maharashtra Board.",
  },
  {
    title: "MERN Stack Course",
    text: "Completed a MERN Stack course from Apna College online.",
  },
];

export default function EducationPage() {
  return (
    <PageShell title="Education" description="My academic background and the learning path that shaped my development career.">
      <div className="page-card">
        <div className="page-list">
          {educationEntries.map((item) => (
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
