import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg bg-grid text-ink font-body selection:bg-signal">
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
