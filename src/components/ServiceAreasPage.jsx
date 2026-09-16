import { cityServiceAreas } from '../data/cityServiceAreas'
import { Breadcrumbs, BtnLink, ContactSection, Eyebrow, SectionHeading } from './common'

export default function ServiceAreasPage({ onNavClick }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50/90 via-white to-slate-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
          <Breadcrumbs
            onNavClick={onNavClick}
            items={[
              { label: 'Home', href: '/' },
              { label: 'Service Areas' },
            ]}
          />
          <Eyebrow>Orange County service-area business</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Service Areas
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            PFMB Cleaning provides residential and commercial cleaning across Orange County, California.
            We are a service-area business — select your city below to learn about local cleaning options,
            neighborhoods we serve, and how to request a custom quote.
          </p>
          <div className="mt-8">
            <BtnLink href="#contact">Get a Free Quote</BtnLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Cities we serve"
          description="Each page includes service details, local property insights, FAQs, and a quote form for that community."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityServiceAreas.map((city) => (
            <li key={city.slug}>
              <a
                href={city.path}
                onClick={onNavClick}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700">
                  {city.city}, CA
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {city.seo.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-sky-700 group-hover:text-sky-600">
                  View {city.city} cleaning services →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-slate-600">
          Do not see your city?{' '}
          <a href="#contact" className="font-semibold text-sky-700 hover:text-sky-600">
            Contact us
          </a>{' '}
          — we may still serve your area. Call{' '}
          <a href="tel:4242068097" className="font-semibold text-sky-700 hover:text-sky-600">
            (424) 206-8097
          </a>{' '}
          or browse our{' '}
          <a href="/" onClick={onNavClick} className="font-semibold text-sky-700 hover:text-sky-600">
            homepage
          </a>{' '}
          for full service and pricing information.
        </p>
      </section>

      <ContactSection headline="Contact Us" cta="Schedule a Free Walkthrough" />
    </main>
  )
}
