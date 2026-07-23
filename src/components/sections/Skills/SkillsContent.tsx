import Button from "../../common/Button";
import SkillsTags from "./SkillsTags";

export default function SkillsContent() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-primary" />
        <span className="font-medium text-primary">My Skills</span>
      </div>

      <h2 className="max-w-xl text-3xl font-bold leading-[1.2] tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        Technologies I use to build
        <span className="text-primary"> modern experiences.</span>
      </h2>

      <SkillsTags />

      <Button onClick={scrollToProjects} className="mt-8">
        See My Projects
      </Button>
    </div>
  );
}