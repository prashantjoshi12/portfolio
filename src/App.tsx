import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App

