import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";

import { useAuthContext } from "../../contexts/authContext";

import PrimaryBtn from "../../components/PrimaryBtn";
import GoogleBtn from "../../components/GoogleBtn";

import authAnimation from "../../assets/authAnimation.json";
import brand_logo from "/brand_logo.svg";
import arrow_right from "/arrow_right.svg";

function AuthPage() {
  const { user, signInWithGoogle, signinWithEmail } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user signed in or not
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const emailRef = useRef();

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    try {
      let result = await signinWithEmail(email);
      if (result) console.log("email saved to localStorage");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();

    const result = await signInWithGoogle();
    if (result) {
      navigate("/dashboard");
      console.log("user signed in");
    } else console.log("Error signing in");
  };

  const AuthWrapperSect = () => {
    return (
      <div className="wrapper flex-center max-md:hidden md:col-span-2 xl:col-span-3">
        <div className="animation w-full max-w-sm">
          <Lottie animationData={authAnimation} />
        </div>
      </div>
    );
  };

  const AuthContentSect = () => {
    return (
      <div className="content col-span-6 flex flex-col items-center justify-center gap-10 border bg-white px-4 py-14 shadow-lg md:col-span-4 md:m-2 md:rounded-xl xl:col-span-3">
        <div className="heading flex-center w-full max-w-xs flex-col">
          <img src={brand_logo} alt="" className="mb-6 h-10 w-10" />
          <h2>Welcome back!</h2>
          <p className="mt-2 text-sm">Please sign in to continue</p>
        </div>

        <form className="w-full max-w-xs" onSubmit={handleEmailAuth}>
          <div className="email-pass-container flex flex-col gap-2">
            <input
              className="border-primary placeholder:text-primary border-b bg-transparent px-1 py-3 text-base placeholder:text-sm focus:outline-none"
              type="email"
              name="email"
              ref={emailRef}
              placeholder={"Email"}
              required
              autoFocus
            />
          </div>

          <div className="btn-container divide-dim mt-10 flex flex-col divide-y divide-opacity-20">
            <div className="pb-4">
              <PrimaryBtn text={"Continue"} icon={arrow_right} />
            </div>
            <div className="pt-4">
              <GoogleBtn onClick={handleGoogleAuth} />
            </div>
          </div>
        </form>

        <div className="footer">
          <p className="text-sm">
            Don&apos;t have an account?
            <Link className="ml-1 text-sm font-medium">Sign up</Link>
          </p>
        </div>
      </div>
    );
  };

  // #################### AuthPage ####################

  return (
    <div className="grid min-h-screen grid-cols-6 gap-4">
      <AuthWrapperSect />
      <AuthContentSect />
    </div>
  );
}

export default AuthPage;
