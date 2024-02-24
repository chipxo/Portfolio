import Tilt from "react-parallax-tilt";
import CV_photo from "@/assets/CV_photo.jpg";

const HomeImg = () => {
  return (
    <Tilt>
      <div className="mx-auto w-32 rounded-full border-transparent bg-primary/60 from-transparent to-primary bg-clip-border md:w-64">
        <img
          src={CV_photo}
          alt="Serhii Chyipesh Photo"
          className="aspect-square h-full w-full rounded-full object-cover p-1.5"
        />
      </div>
    </Tilt>
  );
};

export default HomeImg;
