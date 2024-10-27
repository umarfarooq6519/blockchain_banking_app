import Lottie from "lottie-react";
import authAnimation from "../../../assets/authAnimation.json";

const WrapperSect = () => {
  return (
    <div className="wrapper flex-center max-md:hidden md:col-span-2 xl:col-span-3">
      <div className="animation w-full max-w-sm">
        <Lottie animationData={authAnimation} />
      </div>
    </div>
  );
};

export default WrapperSect;
