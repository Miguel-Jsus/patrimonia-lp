import { useEffect } from 'react'

import Header        from './components/Header/Header'
import Hero          from './components/Hero/Hero'
import Vantagens     from './components/sections/Vantagens'
import Process       from './components/sections/Process'
import Differentials from './components/sections/Differentials'
import Authority     from './components/sections/Authority'
import FAQ           from './components/sections/FAQ'
import Contact       from './components/sections/Contact'
import Footer        from './components/Footer/Footer'
import WaFloat       from './components/WaFloat/WaFloat'

/**
 * Patrimônia LP — componente raiz.
 * Configura o IntersectionObserver global para animar
 * todos os elementos com a classe `.rev` ao entrarem na viewport.
 */
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.11 }
    )

    document.querySelectorAll('.rev').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vantagens />
        <Process />
        <Differentials />
        <Authority />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
