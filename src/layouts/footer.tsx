import reactLogo from "@/assets/icons/react.svg";
import tailwindLogo from "@/assets/icons/tailwind.svg";
import typescriptLogo from "@/assets/icons/typescript.svg";
import viteLogo from "/vite.svg";

import "@/styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Build with</p>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
          <img src={typescriptLogo} className="logo typescript" alt="Typescript logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
