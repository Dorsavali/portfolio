import FloatingIcon from "./FloatingIcon";

const icons = [
  {
    src: "/icons/hero/react.svg",
    alt: "React",
    className: "left-[2%] top-[22%] h-12 w-12 sm:h-16 sm:w-16",
    duration: 4.2,
    delay: 0.4,
    rotate: true,
  },
  {
    src: "/icons/hero/redux.svg",
    alt: "Redux",
    className: "left-[30%] top-[6%] h-11 w-11 sm:h-14 sm:w-14",
    duration: 5.3,
    delay: 0.55,
    rotate: true,
  },
  {
    src: "/icons/hero/typescript.svg",
    alt: "TypeScript",
    className: "right-[7%] top-[15%] h-11 w-11 sm:h-14 sm:w-14",
    duration: 4.8,
    delay: 0.7,
  },
  {
    src: "/icons/hero/javascript.svg",
    alt: "JavaScript",
    className: "right-[2%] top-[42%] h-12 w-12 sm:h-16 sm:w-16",
    duration: 3.8,
    delay: 0.8,
  },
  {
    src: "/icons/hero/tailwind.svg",
    alt: "Tailwind CSS",
    className: "right-[14%] bottom-[8%] h-12 w-12 sm:h-16 sm:w-16",
    duration: 4.9,
    delay: 0.9,
  },
  {
    src: "/icons/hero/vite.svg",
    alt: "Vite",
    className: "right-[40%] bottom-[2%] h-10 w-10 sm:h-12 sm:w-12",
    duration: 4.1,
    delay: 1,
  },
  {
    src: "/icons/hero/css.svg",
    alt: "CSS",
    className: "left-[13%] bottom-[10%] h-11 w-11 sm:h-14 sm:w-14",
    duration: 4.4,
    delay: 1.1,
  },
  {
    src: "/icons/hero/html.svg",
    alt: "HTML",
    className: "left-[3%] top-[50%] h-11 w-11 sm:h-14 sm:w-14",
    duration: 5.1,
    delay: 1.2,
  },
];

function FloatingIcons() {
  return (
    <>
      {icons.map((icon) => (
        <FloatingIcon key={icon.alt} {...icon} />
      ))}
    </>
  );
}

export default FloatingIcons;