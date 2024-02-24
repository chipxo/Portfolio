import { GitHubButton, LinkedinButton } from "../icons/icons";

const Socials = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex justify-end">
        <LinkedinButton />
      </div>
      <div>
        <GitHubButton />
      </div>
    </div>
  );
};

export default Socials;
