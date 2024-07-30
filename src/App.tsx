import { useEffect, useState } from "react";

import "@/styles/App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/layouts/footer";
import Gallery from "@/layouts/gallery";
import History from "@/layouts/history";
import Intro from "@/layouts/intro";
import Loading from "@/layouts/loading";
import NavBar from "@/layouts/navbar";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isVisited, setIsVisited] = useState(true);

  useEffect(() => {
    const userFirstVisit = () => {
      if (localStorage.getItem("firstVisit") === null) {
        localStorage.setItem("firstVisit", "true");
        return true;
      } else {
        return false;
      }
    };

    const handleWindowLoad = () => {
      setLoading(false);
      setIsVisited(userFirstVisit());
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* Loading component is rendered first */ loading && <Loading />}
      <NavBar isVisited={isVisited} />
      <Intro />
      <ModeToggle />
      <Gallery />
      <History />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
