import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { NavBar } from "./components/navBar/NavBar";
import "../src/styles/App.scss";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
