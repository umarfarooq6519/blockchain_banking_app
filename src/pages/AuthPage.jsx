import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

function AuthPage() {
  const { user, signInWithGoogle } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user signed in or not
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleClick = async () => {
    const result = await signInWithGoogle();
    if (result) {
      navigate("/dashboard");
      console.log("user signed in");
    } else console.log("Error signing in");
  };

  // #################### AuthPage ####################

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Sign in
      </button>
    </div>
  );
}

export default AuthPage;
