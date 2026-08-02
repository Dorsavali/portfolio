import { Download, Mail } from "lucide-react";
import Button from "../../common/Button";

export default function Contact() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/document/DorsaValli.pdf";
    link.download = "/document/DorsaValli.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="bg-white px-4 pb-10 font-[geo] sm:px-6 sm:py-24 lg:py-5 lg:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[36px] bg-primary px-6 py-16 text-center text-white sm:px-10 sm:py-20 lg:px-20 lg:py-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl">
            <span className="text-sm font-medium font-[geo] uppercase tracking-[0.3em] text-white/70 font-[geo]">
              Get In Touch
            </span>

            <h2 className="mt-5 text-xl font-bold leading-tight sm:text-5xl lg:text-3xl font-[geo]">
              Let&apos;s build something
              <span className="block">amazing together.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[12px] leading-8 text-white/75 sm:text-lg font-[geo]">
              I&apos;m always open to discussing new projects, creative ideas
              and opportunities to create modern digital experiences.
            </p>

            <div className="mt-10 flex flex-nowrap items-center justify-center gap-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mrs.dorsa.vali@gmail.com&su=Portfolio%20Contact"
                target="_blank"
                rel="noreferrer"
                className="w-36 sm:w-40"
              >
                <Button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap px-3 py-2 text-sm hover:bg-primary-hover"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Send Email
                </Button>
              </a>

              <Button
                variant="outline"
                className="flex w-36 items-center justify-center gap-2 whitespace-nowrap border-white/70 px-3 py-2 text-sm text-white hover:bg-white/10 sm:w-40"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4 shrink-0" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
