import Resume from "@/assets/Resume_Serhii_Chyipesh.pdf";
import { Button } from "../ui/button";
import { ArrowDown } from "../icons/icons";

const MyResume = () => {
  return (
    <a
      href={Resume}
      download="Serhii Chyipesh Resume"
      target="_blank"
      rel="noreferrer"
      className="max-md:mx-auto"
    >
      <Button variant="default" size="lg">
        My Resume {ArrowDown}
      </Button>
    </a>
  );
};

export default MyResume;
