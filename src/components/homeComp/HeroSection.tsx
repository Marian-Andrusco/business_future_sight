import { FaBalanceScaleLeft } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className=" mb-8 grid grid-cols-2 gap-3">
      <div>
        <h1 className="font-bold text-6xl mb-8 primary">
          Grow and Scale
          <hr className="line" />
        </h1>

        <h4 className="mb-2">How our business can help your business?</h4>
        <h4 className="mb-2">From a business to another business</h4>
        <h4 className="mb-2">Partner to Partner </h4>
        <p>
          Scroll to find out about our product and what it offers to you. Our
          final goal is for you to grow your business as much as you like.
        </p>
      </div>
      <div className="flex justify-center primary">
        <FaBalanceScaleLeft className="text-[250px]" />
      </div>
    </div>
  );
};

export default HeroSection;
