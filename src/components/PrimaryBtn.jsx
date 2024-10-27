import PropTypes from "prop-types";

const PrimaryBtn = ({ text, icon }) => {
  return (
    <button
      type="submit"
      className="bg-primary inline-flex min-h-12 w-full min-w-60 items-center justify-center gap-1 rounded-full hover:opacity-90"
    >
      <span className="icon-wrapper">
        <img src={icon} className="icon h-5 w-5" />
      </span>
      <span className="text text-secondary text-sm font-normal">{text}</span>
    </button>
  );
};

PrimaryBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default PrimaryBtn;
