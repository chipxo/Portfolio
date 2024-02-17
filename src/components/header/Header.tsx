import NavBar from "../nav/NavBar";

const Header = () => {
  return (
    <>
      <div className="absolute left-0 top-0 -z-20 h-[120vh] w-full bg-gradient-to-b from-violet-900/20 to-background" />
      <header className="fixed top-0 z-[999] w-full">
        <NavBar />
      </header>
    </>
  );
};

export default Header;
