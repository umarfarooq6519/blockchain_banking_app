import PropTypes from "prop-types";
import google_icon from "/google_icon.svg";

const GoogleBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex min-h-12 w-full min-w-60 items-center justify-center gap-1 rounded-full bg-secondary hover:opacity-80"
      onClick={onClick}
    >
      <span className="icon-wrapper">
        <img src={google_icon} className="icon h-8 w-8" />
      </span>
      <span className="text text-sm font-normal">Continue with Google</span>
    </button>
  );
};

GoogleBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleBtn;
