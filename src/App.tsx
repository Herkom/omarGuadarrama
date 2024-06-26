import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Gallery from "./layouts/gallery";
import Footer from "./layouts/footer";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <ModeToggle />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
