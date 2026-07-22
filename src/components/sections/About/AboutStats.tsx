const stats = [
  {
    value: "2+",
    title: "Years",
    description: "Experience",
  },
  {
    value: "10+",
    title: "Projects",
    description: "Completed",
  },
  {
    value: "100+",
    title: "Hours",
    description: "of Coding",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.title} className="rounded-2xl border border-border bg-white px-5 py-5 transition-colors duration-700 ease-in-out hover:border-primary/30 hover:bg-primary/[0.025]">
          <div className="flex items-baseline justify-center gap-1 lg:justify-start">
            <span className="text-2xl font-bold text-primary">{stat.value}</span>
            <span className="font-medium text-text-primary">{stat.title}</span>
          </div>

          <p className="mt-1 text-sm text-text-secondary">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}