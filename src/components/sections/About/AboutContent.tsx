import Button from "../../common/Button";
import AboutStats from "./AboutStats";

export default function AboutContent() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-[2px] w-10 bg-primary" />
        <span className="font-medium text-primary font-[geo]">What I Do</span>
      </div>

      <h2 className="max-w-xl text-3xl font-bold leading-[1.2] tracking-tight text-text-primary sm:text-5xl lg:text-4xl font-[geo]">
        I’m a web developer who loves building
        <span className="text-primary"> beautiful things.</span>
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-md font-[geo]">
        I enjoy turning ideas into modern, responsive and user-friendly web experiences. My goal is to create interfaces that look great and feel natural to use.
      </p>

      <AboutStats />

      <Button onClick={scrollToProjects} className="mt-8">
        View My Work
      </Button>
    </div>
  );
}