import Form from "./Form";
import Socials from "./Socials";
import FooterBg from "./FooterBg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative z-50 scroll-mt-12 border-t border-primary/30 bg-background py-10 font-Raleway drop-shadow-md md:scroll-mt-20 lg:py-14"
    >
      <FooterBg />
      <div className="container space-y-4">
        <h2 className="mb-6 text-center">Contact me</h2>
        <Form />
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
