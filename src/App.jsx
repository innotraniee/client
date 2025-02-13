import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DevelopmentModeWarning } from "./components/DevelopmentModeWarning";

function App() {
  return (
    <>
      <Header />
      <DevelopmentModeWarning/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
