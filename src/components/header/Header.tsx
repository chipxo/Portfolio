import MobileNav from "../mobileNav/MobileNav";
import NavBar from "../nav/NavBar";

const Header = () => {
  return (
    <header className="fixed top-0 z-[999] w-full">
      <NavBar />

      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
