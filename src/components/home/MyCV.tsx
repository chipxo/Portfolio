import CV from "@/assets/CV.pdf";
import { Button } from "../ui/button";
import { ArrowDown } from "../icons/icons";

const MyCV = () => {
  return (
    <a
      href={CV}
      download="Serhii Chyipesh CV"
      target="_blank"
      rel="noreferrer"
      className="max-md:mx-auto"
    >
      <Button variant="default" size="lg">
        My CV {ArrowDown}
      </Button>
    </a>
  );
};

export default MyCV;
