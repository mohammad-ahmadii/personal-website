import Nav from './components/Nav'
import Hero from './components/Hero'
import Languages from './components/Languages'
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
        
        <Timeline />
        <Projects />
        <Skills />
        <Education />
        <Languages />
      </main>
      <Footer />
    </div>
  )
}
