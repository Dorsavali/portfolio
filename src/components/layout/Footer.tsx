import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-8 md:flex-row md:items-end lg:px-10">
        <div>

          <h2 className="mt-6 text-3xl font-medium sm:text-4xl font-[geo]">
            Dorsa Valli
          </h2>

          <p className="mt-3 text-white/75 font-[geo]">
            Front-End Developer
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="flex items-center gap-4">
            <a href="https://github.com/Dorsavali" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 hover:-translate-y-1">
             <img src="/images/footer/github.svg" alt="github" />
            </a>

            <a href="https://www.linkedin.com/in/dorsavalli/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 hover:-translate-y-1">
              <img src="/images/footer/LinkedIn.svg" alt="linkedin"  className="self-center"/>
            </a>

            <a href="mailto:dorsavali@yahoo.com" aria-label="Email" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 hover:-translate-y-1">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-6 text-sm text-white/80 font-[geo] sm:text-base">
            © 2026 Dorsa Valli. All Rights Reserved.
          </p>

          <p className="mt-3 text-sm text-white/80 font-[geo] sm:text-base">
            Designed and developed by Dorsa Valli
          </p>
        </div>
      </div>

      <button type="button" onClick={scrollToTop} aria-label="Back to top" className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary-hover text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
}