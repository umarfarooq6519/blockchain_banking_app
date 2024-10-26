import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

function Dashboard() {
  const { user, Signout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user signed in or not
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleClick = async () => {
    const result = await Signout();
    if (result) navigate("/");
    else console.log("Error signing out");
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Sign out
      </button>
    </div>
  );
}

export default Dashboard;
