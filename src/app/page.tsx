import Skills from '@/components/skills'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Project from '@/components/project'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
