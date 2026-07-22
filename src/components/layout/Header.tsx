import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import type { MenuItem } from "../../types/Menu";
import Container from "../common/Container";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data = [] } = useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await api.get("");
      return response.data?.menu ?? [];
    },
  });

  const handleMenuClick = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const linkClass =
    "relative inline-block w-fit pb-2 transition-colors duration-300 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-background after:transition-all after:duration-300 after:ease-out hover:after:w-full";

  return (
    <Container>
      <div className="relative flex h-12 w-full overflow-x-hidden lg:h-16 pt-3 lg:pt-0">
        <div className="flex w-1/2 items-center bg-background pl-4 lg:pl-30">
          <img
            src="/images/logoHeader.png"
            alt="logo"
            className="w-40 lg:w-48"
          />
        </div>
        <div className="relative flex w-1/2 items-center justify-end bg-background pr-4  lg:pr-30">
          <button
            type="button"
            onClick={handleMenuClick}
            aria-label="Open menu"
            className="cursor-pointer"
          >
            <img
              src="/icons/menu-purple.svg"
              alt=""
              className="h-8 w-8 lg:h-10 lg:w-10 "
            />
           
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 ease-in-out ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={handleMenuClose}
      />
      <div
        id="menu"
        className={`fixed right-0 top-0 z-50 h-screen w-1/2 bg-background transition-transform duration-500 ease-in-out lg:w-180 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-3 lg:hidden">
          <button
            type="button"
            onClick={handleMenuClose}
            aria-label="Close menu"
            className="flex h-8 w-8 cursor-pointer items-center justify-center"
          >
            <span className="text-3xl leading-none text-primary">×</span>
          </button>
        </div>
        <nav className="flex flex-col items-start gap-5 px-5 pt-2 font-[geo] lg:gap-8 lg:pt-5">
          {data.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={linkClass}
              onClick={handleMenuClose}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </Container>
  );
}

export default Header;
