import Services from "@/components/sections/Service/Service";
import { Helmet } from "react-helmet-async";

function ServicesPage() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Services | Dorsa Valli</title>

        <meta
          name="description"
          content="Services Dorsa Valli, a Front-End Developer specializing in React, TypeScript, Tailwind CSS and modern web development."
        />

        <meta
          name="keywords"
          content="Dorsa Valli, Frontend Developer, React Developer, TypeScript, Portfolio"
        />

        <meta property="og:title" content="Services | Dorsa Valli" />

        <meta
          property="og:description"
          content="Frontend Developer specializing in React and modern web technologies."
        />

        <meta
          property="og:image"
          content="https://dorsavalli.com/images/logo.webp"
        />

        <meta property="og:url" content="https://dorsavalli.com/services" />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://dorsavalli.com/services" />
      </Helmet>

      <div className="relative overflow-hidden ">
        <Services />
      </div>
    </main>
  );
}

export default ServicesPage;
