import Container from "@/components/common/Container";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <Container>
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_38%,#faf8ff_66%,#eee8ff_100%)]  lg:h-[clamp(730px,75vh,760px)]">
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-purple-200/30 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-400/20 blur-[130px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:h-[clamp(720px,75vh,760px)] lg:flex-row lg:justify-between lg:gap-8 lg:px-12 lg:py-10">
        <HeroContent />
        <HeroIllustration />
      </div>
    </section>
    </Container>
  );
}

export default Hero;