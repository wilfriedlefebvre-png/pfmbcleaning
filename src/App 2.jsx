import { useEffect, useState } from 'react'
import CityServicePage from './components/CityServicePage'
import ServiceAreasPage from './components/ServiceAreasPage'
import { CommercialCleaningPage, Footer, Header, HomePage } from './components/sitePages'
import { getCityByPath } from './data/cityServiceAreas'
import { updatePageSeo } from './utils/seo'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    updatePageSeo(pathname)
  }, [pathname])

  const handleNavClick = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return
    }
    if (href.startsWith('/') && window.location.pathname !== href) {
      event.preventDefault()
      window.history.pushState({}, '', href)
      setPathname(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const cityPage = getCityByPath(pathname)
  const isCommercialPage = pathname === '/commercial-cleaning'
  const isServiceAreasPage = pathname === '/service-areas'

  let pageContent
  if (cityPage) {
    pageContent = <CityServicePage city={cityPage} onNavClick={handleNavClick} />
  } else if (isCommercialPage) {
    pageContent = <CommercialCleaningPage onNavClick={handleNavClick} />
  } else if (isServiceAreasPage) {
    pageContent = <ServiceAreasPage onNavClick={handleNavClick} />
  } else {
    pageContent = <HomePage onNavClick={handleNavClick} />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header onNavClick={handleNavClick} />
      {pageContent}
      <Footer onNavClick={handleNavClick} />
    </div>
  )
}

export default App
