import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { NavBar } from "./components/navBar/NavBar";
import "../src/styles/reset.scss";
function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
