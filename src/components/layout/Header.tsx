import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../data/Menu";
import Container from "../common/Container";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const linkClass =
    "relative inline-block w-fit pb-2 transition-colors duration-300 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full";

  return (
    <Container>
      <div className="relative flex h-12 w-full overflow-x-hidden pt-3 lg:h-16 lg:pt-0">
        <div className="flex w-1/2 items-center bg-background pl-4 lg:pl-30">
          <NavLink to="/" onClick={handleMenuClose}>
            <img
              src="/images/logoHeader.png"
              alt="Dorsa Valli logo"
              className="w-40 lg:w-48"
            />
          </NavLink>
        </div>

        <div className="relative flex w-1/2 items-center justify-end bg-background pr-4 lg:pr-30">
          <button
            type="button"
            onClick={handleMenuClick}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu"
            className="cursor-pointer"
          >
            <img
              src="/icons/menu-purple.svg"
              alt=""
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </button>
        </div>
      </div>

      <div
       className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ease-out ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={handleMenuClose}
      />

      <aside
        id="menu"
        className={`fixed right-0 top-0 z-50 h-screen w-[80%] bg-background  transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:w-1/2 lg:w-180 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-5">
          <button
            type="button"
            onClick={handleMenuClose}
            aria-label="Close menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center"
          >
            <span className="text-3xl leading-none text-primary">×</span>
          </button>
        </div>

        <nav className="flex flex-col items-start gap-5 px-8 pt-4 font-[geo] lg:gap-8 lg:px-16 lg:pt-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={handleMenuClose}
              className={({ isActive }) =>
                `${linkClass} text-lg font-medium lg:text-xl ${isActive ? "text-primary after:w-full" : "text-text-primary"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>
    </Container>
  );
}

export default Header;
