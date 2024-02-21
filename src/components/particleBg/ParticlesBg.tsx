import ParticlesBg from "particles-bg";
import particleConfig from "./particleConfig";

const ParticlesElement = () => {
  return (
    <div className="fixed inset-0 -z-50 max-sm:hidden">
      <ParticlesBg type="custom" config={particleConfig} bg={true} />
    </div>
  );
};

export default ParticlesElement;
