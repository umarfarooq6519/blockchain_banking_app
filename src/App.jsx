import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  // handles routing and base styles
  return (
    <section className="app text-primary bg-secondary container mx-auto min-h-screen items-center justify-center text-base">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
