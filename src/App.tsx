import "@/styles/App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/layouts/footer";
import Gallery from "@/layouts/gallery";
import History from "@/layouts/history";
import Intro from "@/layouts/intro";
import NavBar from "@/layouts/navbar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <Intro />
      <ModeToggle />
      <Gallery />
      <History />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
