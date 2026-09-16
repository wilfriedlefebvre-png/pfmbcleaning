import {
  addOnServices,
  coreServices,
  deepCleaningIncludes,
  getNearbyCities,
  moveCleaningIncludes,
  standardCleaningIncludes,
  whyChooseItems,
} from '../data/cityServiceAreas'
import {
  Breadcrumbs,
  BtnLink,
  ContactSection,
  IconCheck,
  IconPhone,
  SectionCard,
  SectionHeading,
  ServiceCard,
} from './common'

function FaqSection({ faqs }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
        <SectionHeading
          title="Frequently asked questions"
          description="Common questions about residential cleaning with PFMB Cleaning."
        />
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/50">
          {faqs.map((item) => (
            <details key={item.question} className="group px-5 py-4">
              <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900">
                {item.question}
                <span className="text-xl leading-none text-sky-600 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CityServicePage({ city, onNavClick }) {
  const nearbyCities = getNearbyCities(city)
  const services = city.includeAirbnb
    ? [...coreServices, 'Airbnb and vacation-rental turnovers']
    : coreServices

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50/90 via-white to-slate-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
          <Breadcrumbs
            onNavClick={onNavClick}
            items={[
              { label: 'Home', href: '/' },
              { label: 'Service Areas', href: '/service-areas' },
              { label: city.city },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            House Cleaning in {city.city}, CA
          </h1>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
            {city.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <BtnLink href="#contact">Get a Free Quote</BtnLink>
            <a
              href="tel:4242068097"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <IconPhone />
              Call 424-206-8097
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            title={`Cleaning services in ${city.city}`}
            description={city.servicesIntro}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service} title={service} />
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50/60 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">Available add-ons</h3>
            <p className="mt-2 text-slate-600">
              Customize your visit with optional extras. Carpet vacuuming is available; carpet shampooing is not offered as a standard service.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {addOnServices.map((addon) => (
                <li key={addon} className="inline-flex items-start gap-2 text-slate-700">
                  <IconCheck />
                  {addon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading title={city.localSection.title} />
          <div className="mt-6 max-w-3xl space-y-4 text-slate-700">
            {city.localSection.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
            <SectionHeading
              title="Why choose PFMB Cleaning"
              description={`Trusted residential and commercial cleaning serving ${city.city} and Orange County.`}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseItems.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-sky-200 hover:bg-white hover:shadow-sm"
                >
                  <p className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
                    <IconCheck />
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-6 ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading
            title={`Neighborhoods and communities in ${city.city}`}
            description="We serve homeowners, renters, and businesses throughout these areas and nearby streets."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {city.neighborhoods.map((neighborhood) => (
              <li key={neighborhood}>
                <span className="inline-block rounded-full border border-sky-200/80 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm">
                  {neighborhood}
                </span>
              </li>
            ))}
          </ul>
          {nearbyCities.length > 0 ? (
            <div className="mt-8 border-t border-sky-100 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">Nearby service areas</h3>
              <p className="mt-2 text-slate-600">Explore cleaning services in neighboring Orange County communities.</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {nearbyCities.map((nearby) => (
                  <li key={nearby.slug}>
                    <a
                      href={nearby.path}
                      onClick={onNavClick}
                      className="text-sm font-semibold text-sky-700 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      {nearby.city}, CA
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            title="What's included"
            description="Scope varies by service type. These overviews help you choose the right visit for your home."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SectionCard title="Standard cleaning">
              <ul className="space-y-2">
                {standardCleaningIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="Deep cleaning">
              <ul className="space-y-2">
                {deepCleaningIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="Move-in / move-out cleaning">
              <ul className="space-y-2">
                {moveCleaningIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionCard>
            <SectionCard title="Add-on services">
              <ul className="space-y-2">
                {addOnServices.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <IconCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <BtnLink href="/" onClick={onNavClick} variant="secondary">
              View homepage services and pricing
            </BtnLink>
            <BtnLink href="/commercial-cleaning" onClick={onNavClick} variant="secondary">
              Commercial cleaning services
            </BtnLink>
            <BtnLink href="#contact">Request a custom quote</BtnLink>
          </div>
        </div>
      </section>

      <FaqSection faqs={city.faqs} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-sky-900 p-8 text-white sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight">Request Your {city.city} Cleaning Quote</h2>
          <p className="mt-4 max-w-2xl text-slate-100">
            Tell us about your property in {city.city} and the type of cleaning you need. We will follow up with a custom estimate based on size, condition, and add-ons — or call{' '}
            <a href="tel:4242068097" className="font-semibold text-white underline hover:text-sky-100">
              (424) 206-8097
            </a>{' '}
            to speak with us directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BtnLink href="#contact">Get a Free Quote</BtnLink>
            <a
              href="tel:4242068097"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <IconPhone />
              Call 424-206-8097
            </a>
          </div>
        </div>
      </section>

      <ContactSection
        headline={`Request Your ${city.city} Cleaning Quote`}
        cta={`Request ${city.city} Cleaning Quote`}
      />
    </main>
  )
}
