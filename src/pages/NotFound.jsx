import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Oops 😢 Looks like you are lost!{" "}
      <Link to="/" className="underline">
        Go back
      </Link>
    </div>
  );
}

export default NotFound;
