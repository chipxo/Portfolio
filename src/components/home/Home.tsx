import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CV_photo from "@/assets/CV_photo.jpg";
import CV from "@/assets/CV.pdf";

const Home = () => {
  return (
    <section id="home" className="mt-14">
      <div className="container grid gap-4 gap-y-6 lg:grid-cols-[0.5fr_1fr]">
        <div className="drop-shadow-ViteIcon mx-auto w-32 rounded-full border-transparent bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-border md:w-64">
          <img
            src={CV_photo}
            alt="Serhii Chyipesh Photo"
            className="aspect-square h-full w-full rounded-full object-cover p-1.5"
          />
        </div>
        <div className="flex flex-col gap-y-6">
          <h2 className="mx-auto w-fit text-center text-xl font-extrabold sm:text-2xl md:text-4xl lg:text-end">
            Hi,{" "}
            <span className="bg-gradient-to-r from-[#6710c2] to-primary bg-clip-text text-transparent">
              I'm Serhii.
            </span>{" "}
            I'm a{" "}
            <span className="bg-gradient-to-r from-[#6710c2] to-primary bg-clip-text text-transparent">
              front-end developer.
            </span>{" "}
            I enjoy building websites. My focus is{" "}
            <span className="drop-shadow-TsIcon bg-gradient-to-r from-blue-600 from-50% to-blue-400 bg-clip-text text-transparent">
              React.js.
            </span>
          </h2>
          <div className="grid flex-grow grid-cols-2 items-end justify-evenly gap-4 pb-4 md:flex lg:justify-end">
            <Button variant="outline" size="lg">
              <a href="#contact">Contact me</a>
            </Button>
            <Button variant="outline" size="lg">
              <a
                href={CV}
                download="Serhii Chyipesh CV"
                target="_blank"
                rel="noreferrer"
              >
                My CV <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-2xl max-md:hidden"
            >
              <a href="https://github.com/chipxo" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-2xl max-md:hidden"
            >
              <a
                href="https://www.linkedin.com/in/serhii-chyipesh-b57488275/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
