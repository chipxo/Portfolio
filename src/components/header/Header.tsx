import NavBar from "../nav/NavBar";

const Header = () => {
  return (
    <>
      <div className="absolute inset-0 -z-20 w-full bg-gradient-to-b from-secondary/10 from-10% to-background" />
      <header className="fixed top-0 z-[999] w-full">
        <NavBar />
      </header>
    </>
  );
};

export default Header;
