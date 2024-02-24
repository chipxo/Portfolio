import footerBg from "@/assets/footerBg.svg";

const FooterBg = () => {
  return (
    <img
      src={footerBg}
      alt="Bachground image"
      className="absolute inset-0 -z-10 h-full w-full opacity-20"
    />
  );
};

export default FooterBg;
