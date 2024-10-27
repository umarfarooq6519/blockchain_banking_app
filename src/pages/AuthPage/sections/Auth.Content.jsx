import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import PrimaryBtn from "../../../components/PrimaryBtn";
import GoogleBtn from "../../../components/GoogleBtn";

import brand_logo from "/brand_logo.svg";
import arrow_right from "/arrow_right.svg";

const ContentSect = ({ handleGoogleAuth, handleEmailAuth }) => {
  const AuthContentForm = () => {
    return (
      <form className="w-full max-w-xs">
        <div className="email-pass-container flex flex-col gap-2">
          <input
            className="border-primary placeholder:text-primary border-b bg-transparent px-1 py-3 text-base placeholder:text-sm focus:outline-none"
            type="email"
            name="email"
            placeholder={"Email"}
            required
          />
          <input
            className="border-primary placeholder:text-primary border-b bg-transparent px-1 py-3 text-base placeholder:text-sm focus:outline-none"
            type="password"
            name="password"
            placeholder={"Password"}
            required
          />
        </div>

        {/* <div className="options mt-3 flex items-center justify-between">
          <span>
            <input type="checkbox" name="remember_me" />
            <label htmlFor="remember_me" className="ml-1 text-sm">
              Remember Me
            </label>
          </span>
          <Link className="dim-text">Forgot Password?</Link>
        </div> */}

        <div className="btn-container divide-dim mt-10 flex flex-col divide-y divide-opacity-20">
          <div className="pb-4">
            <PrimaryBtn
              onClick={handleEmailAuth}
              text={"Continue"}
              icon={arrow_right}
            />
          </div>
          <div className="pt-4">
            <GoogleBtn onClick={handleGoogleAuth} />
          </div>
        </div>
      </form>
    );
  };

  //   #################### Auth Content Section ####################

  return (
    <div className="content col-span-6 flex flex-col items-center justify-center gap-10 border bg-white px-4 py-14 shadow-lg md:col-span-4 md:m-2 md:rounded-xl xl:col-span-3">
      <div className="heading flex-center w-full max-w-xs flex-col">
        <img src={brand_logo} alt="" className="mb-6 h-10 w-10" />
        <h2>Welcome Back!</h2>
        <p className="mt-2 text-sm">Please enter your credentials.</p>
      </div>

      <AuthContentForm />

      <div className="footer">
        <p className="dim-text">
          Don&apos;t have an account?
          <Link className="text-primary ml-1 text-sm font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

ContentSect.propTypes = {
  handleGoogleAuth: PropTypes.func.isRequired,
  handleEmailAuth: PropTypes.func,
};

export default ContentSect;
