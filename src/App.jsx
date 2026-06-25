import "./index.css";
import Nav from "./components/nav";
import Home from "./home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // animate only once
      offset: 100, // start animation a bit earlier
    });
  }, []);
  return (
    <>
      <Nav />

      <Home />
    </>
  );
}

export default App;
