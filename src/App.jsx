import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  // handles routing
  return (
    <section className="app flex min-h-screen items-center justify-center p-2">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
