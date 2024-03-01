import { GitHubButton, LinkedinButton } from "../icons/icons";
import HomeTitle from "./HomeTitle";
import HomeImg from "./HomeImg";
import ContactMe from "./ContactMe";
import MyResume from "./MyResume";

const Home = () => {
  return (
    <section
      id="home"
      className="border-none bg-transparent bg-gradient-to-br from-primary/40 via-transparent to-transparent pt-16 lg:pt-20"
    >
      <div className="container grid gap-4 gap-y-6 lg:grid-cols-[0.5fr_1fr]">
        <HomeImg />
        <div className="flex flex-col gap-y-6">
          <HomeTitle />
          <div className="grid flex-grow grid-cols-2 items-end justify-evenly gap-4 pb-4 md:flex lg:justify-end">
            <ContactMe />
            <MyResume />
            <LinkedinButton isHome />
            <GitHubButton isHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
