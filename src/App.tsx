import "@/styles/App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Intro from "@/layouts/intro";
import Gallery from "@/layouts/gallery";
import History from "@/layouts/history";
import Footer from "@/layouts/footer";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Intro />
      <ModeToggle />
      <Gallery />
      <History />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
