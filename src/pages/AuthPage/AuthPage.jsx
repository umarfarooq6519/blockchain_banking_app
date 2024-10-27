import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

import WrapperSect from "./sections/Auth.Wrapper";
import ContentSect from "./sections/Auth.Content";

function AuthPage() {
  const { user, signInWithGoogle } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user signed in or not
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleGoogleAuth = async () => {
    const result = await signInWithGoogle();
    if (result) {
      navigate("/dashboard");
      console.log("user signed in");
    } else console.log("Error signing in");
  };

  // #################### AuthPage ####################

  return (
    <div className="grid min-h-screen grid-cols-6 gap-4">
      <WrapperSect />
      <ContentSect handleGoogleAuth={handleGoogleAuth} />
    </div>
  );
}

export default AuthPage;
