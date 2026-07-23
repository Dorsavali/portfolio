const skillTags = [
  "Responsive Design",
  "REST APIs",
  "State Management",
  "Clean Architecture",
  "Accessibility",
  "Performance",
];

export default function SkillsTags() {
  return (
    <div className="mt-8 flex max-w-xl flex-wrap justify-center gap-3 lg:justify-start cursor-pointer">
      {skillTags.map((skill) => (
        <span key={skill} className="rounded-full border border-border bg-white px-4 py-2 text-sm text-text-secondary transition-colors duration-500 hover:border-primary/30 hover:text-primary">
          {skill}
        </span>
      ))}
    </div>
  );
}