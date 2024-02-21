import { motion } from "framer-motion";
import { GitHubButton, LinkedinButton } from "../icons/icons";
import Form from "./Form";
import footerBg from "@/assets/footerBg.svg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative z-50 mt-4 scroll-mt-12 border-t border-primary/30 bg-background py-10 font-Raleway drop-shadow-md md:scroll-mt-20 lg:mt-10 lg:py-14"
    >
      <img
        src={footerBg}
        alt="Bachground image"
        className="absolute inset-0 -z-10 h-full w-full opacity-20"
      />
      <motion.div
        // initial={{ scale: 0 }}
        // whileInView={{ scale: 1 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.3, ease: "linear" }}
        className="container space-y-4"
      >
        <h2 className="mb-6 text-center">Contact me</h2>
        <Form />
        <div className="grid grid-cols-2 gap-10">
          <div className="flex justify-end">
            <LinkedinButton />
          </div>
          <div>
            <GitHubButton />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
