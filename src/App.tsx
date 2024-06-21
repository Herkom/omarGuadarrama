import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import { Button } from "@/components/ui/button"
import Gallery from './layouts/gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <ModeToggle/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <section className="flex justify-center">
        <Gallery />
      </section>
    </ThemeProvider>
  )
}

export default App
