import { useState } from 'react'
import heroImage from '../assets/pfmb-logo.png'
import { cityServiceAreas } from '../data/cityServiceAreas'
import {
  BtnLink,
  ContactSection,
  CoverageIcon,
  Eyebrow,
  Footer,
  Header,
  IconCheck,
  IconShield,
  MobileList,
  SectionCard,
  SectionHeading,
  ServiceCard,
  Table,
} from './common'

const residentialServices = [
  'Standard Home Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Airbnb / Rental Cleaning',
]

const commercialServices = [
  'Office Cleaning',
  'Medical Office Cleaning',
  'Retail Cleaning',
  'Property Management Cleaning',
  'Move-In / Move-Out Cleaning',
  'Post-Construction Cleaning',
]

const trustBadges = [
  'Licensed & Insured',
  'Flexible Scheduling',
  'Free Walkthroughs',
  'Satisfaction Guaranteed',
  'Locally Owned',
]

const reasons = [
  'Reliable communication',
  'Flexible scheduling',
  'Professional cleaners',
  'Satisfaction guarantee',
  'Locally owned',
]

const builtForTrust = [
  'Clear communication',
  'Professional standards',
  'Flexible scheduling',
  'Residential and commercial experience',
  'Satisfaction guarantee',
]

const whoWeHelp = [
  'Offices',
  'Dental offices',
  'Medical offices',
  'Real estate offices',
  'Retail stores',
  'Property managers',
  'Small businesses',
]

const servicesIncluded = [
  'Dusting and surfaces',
  'Floors and vacuuming',
  'Restrooms',
  'Break rooms',
  'Trash removal',
  'Disinfection of high-touch areas',
  'Before/after business hours cleaning',
]

const faqItems = [
  {
    question: 'Do you offer recurring commercial cleaning?',
    answer: 'Yes. We offer weekly, bi-weekly, monthly, and custom recurring schedules.',
  },
  {
    question: 'Can you clean after business hours?',
    answer: 'Yes. We can work around your business schedule.',
  },
  {
    question: 'Do you bring supplies?',
    answer: 'Yes. We can bring supplies, or use your preferred products if requested.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes. We offer free quotes and walkthroughs for commercial spaces.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Orange County and nearby areas.',
  },
]

const whyChooseCards = [
  'Licensed & Insured',
  'Locally Owned',
  'Satisfaction Guaranteed',
  'Flexible Scheduling',
  'Residential & Commercial Cleaning',
  'Fast Response Times',
]

const orangeCountyCoverage = [
  { id: 'homes', label: 'Homes' },
  { id: 'offices', label: 'Offices' },
  { id: 'medical', label: 'Medical Offices' },
  { id: 'retail', label: 'Retail Stores' },
  { id: 'property', label: 'Property Managers' },
]

const standardPricing = [
  { homeSize: 'Studio / 1 Bed 1 Bath', time: '1.5–2 hrs', price: '$120' },
  { homeSize: '2 Bed / 1 Bath', time: '2–2.5 hrs', price: '$160' },
  { homeSize: '2 Bed / 2 Bath', time: '2.5–3 hrs', price: '$200' },
  { homeSize: '3 Bed / 2 Bath', time: '3–4 hrs', price: '$260' },
  { homeSize: '4 Bed / 3 Bath', time: '4–5 hrs', price: '$340' },
  { homeSize: '5 Bed / 4 Bath', time: '5–6 hrs', price: '$450+' },
]

const deepPricing = [
  { homeSize: '1 Bed / 1 Bath', price: '$200' },
  { homeSize: '2 Bed / 2 Bath', price: '$300' },
  { homeSize: '3 Bed / 2 Bath', price: '$420' },
  { homeSize: '4 Bed / 3 Bath', price: '$550' },
  { homeSize: '5 Bed / 4 Bath', price: '$700+' },
]

const movePricing = [
  { homeSize: 'Apartment', price: '$250' },
  { homeSize: '2 Bedroom Home', price: '$350' },
  { homeSize: '3 Bedroom Home', price: '$500' },
  { homeSize: '4 Bedroom Home', price: '$650+' },
]

const addOns = [
  { service: 'Inside Oven', price: '+$35' },
  { service: 'Inside Fridge', price: '+$35' },
  { service: 'Interior Windows', price: '+$8/window' },
  { service: 'Laundry', price: '+$30' },
  { service: 'Pet Hair Removal', price: '+$25–60' },
  { service: 'Baseboards', price: '+$40' },
  { service: 'Inside Cabinets', price: '+$50' },
  { service: 'Garage Sweep', price: '+$40' },
  { service: 'Balcony / Patio', price: '+$25–75' },
]

const recurringDiscounts = [
  { frequency: 'Weekly', discount: '15% Off' },
  { frequency: 'Bi-Weekly', discount: '10% Off' },
  { frequency: 'Monthly', discount: '5% Off' },
]

const paymentMethods = ['Zelle', 'Venmo', 'Credit Card', 'Cash']

const cityPagePaths = new Set(cityServiceAreas.map((city) => city.path))

const serviceAreaCities = [
  { name: 'Aliso Viejo', path: '/house-cleaning-aliso-viejo' },
  { name: 'Anaheim', path: null },
  { name: 'Brea', path: null },
  { name: 'Costa Mesa', path: null },
  { name: 'Cypress', path: null },
  { name: 'Fountain Valley', path: null },
  { name: 'Fullerton', path: null },
  { name: 'Garden Grove', path: null },
  { name: 'Huntington Beach', path: null },
  { name: 'Irvine', path: '/house-cleaning-irvine' },
  { name: 'Laguna Beach', path: '/house-cleaning-laguna-beach' },
  { name: 'Laguna Niguel', path: '/house-cleaning-laguna-niguel' },
  { name: 'Lake Forest', path: '/house-cleaning-lake-forest' },
  { name: 'Ladera Ranch', path: '/house-cleaning-ladera-ranch' },
  { name: 'Mission Viejo', path: '/house-cleaning-mission-viejo' },
  { name: 'Newport Beach', path: null },
  { name: 'Orange', path: null },
  { name: 'San Clemente', path: '/house-cleaning-san-clemente' },
  { name: 'San Juan Capistrano', path: '/house-cleaning-san-juan-capistrano' },
  { name: 'Santa Ana', path: null },
  { name: 'Tustin', path: null },
  { name: 'Westminster', path: null },
  { name: 'Yorba Linda', path: null },
]

const galleryPhotos = [
  {
    src: heroImage,
    alt: 'Clean, bright home interior after professional cleaning',
    label: 'Residential cleaning',
    bundled: true,
  },
  {
    src: '/images/commercial.jpg',
    alt: 'Professional office and commercial cleaning',
    label: 'Commercial spaces',
    fileHint: 'commercial.jpg',
  },
  {
    src: '/images/team.jpg',
    alt: 'PFMB Cleaning team at work',
    label: 'Our team',
    fileHint: 'team.jpg',
  },
  {
    src: '/images/detail.jpg',
    alt: 'Detail-focused cleaning service',
    label: 'Every detail matters',
    fileHint: 'detail.jpg',
  },
]

function GalleryPhoto({ photo }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-dashed border-sky-200 bg-gradient-to-br from-sky-50 to-slate-50 p-6 text-center">
        <p className="mt-3 text-sm font-medium text-slate-700">{photo.label}</p>
        <p className="mt-2 text-xs text-slate-500">
          Add your photo as{' '}
          <code className="rounded bg-white px-1.5 py-0.5 text-sky-800">
            public/images/{photo.fileHint}
          </code>
        </p>
      </div>
    )
  }

  return (
    <figure className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80">
      <img
        src={photo.src}
        alt={photo.alt}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setMissing(true)}
      />
      <figcaption className="bg-white px-4 py-3 text-sm font-medium text-slate-800">
        {photo.label}
      </figcaption>
    </figure>
  )
}

export function WorkGallery() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/80">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Our work"
          description="Real spaces we clean across Orange County. Replace the placeholder slots with your own photos anytime."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {galleryPhotos.map((photo) => (
            <GalleryPhoto key={photo.label} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function AreasWeServe({ onNavClick }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-6 ring-1 ring-slate-900/5 sm:p-10">
        <SectionHeading
          title="Areas we serve"
          description="Based in Orange County. Browse service-area pages for detailed local information, or contact us if you do not see your city."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {serviceAreaCities.map((city) => (
            <li key={city.name}>
              {city.path && cityPagePaths.has(city.path) ? (
                <a
                  href={city.path}
                  onClick={onNavClick}
                  className="inline-block rounded-full border border-sky-200/80 bg-white px-3 py-1.5 text-sm font-medium text-sky-800 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
                >
                  {city.name}
                </a>
              ) : (
                <span className="inline-block rounded-full border border-sky-200/80 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm">
                  {city.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-600">
          <a href="/service-areas" onClick={onNavClick} className="font-semibold text-sky-700 hover:text-sky-600">
            View all service areas
          </a>{' '}
          · Prefer to talk now?{' '}
          <a href="tel:4242068097" className="font-semibold text-sky-700 hover:text-sky-600">
            Call (424) 206-8097
          </a>
        </p>
      </div>
    </section>
  )
}

export function HomePage({ onNavClick }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50/90 via-white to-slate-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-20">
          <div className="relative">
            <Eyebrow>Orange County trusted team</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
              Professional cleaning in Orange County
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Reliable, insured residential and commercial cleaning for homes, offices, medical
              suites, retail, and property-managed buildings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink href="#contact">Schedule a free walkthrough</BtnLink>
              <BtnLink href="/commercial-cleaning" variant="secondary" onClick={onNavClick}>
                Commercial services
              </BtnLink>
            </div>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <p
                  key={badge}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <IconCheck />
                  {badge}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-slate-900/10 ring-1 ring-slate-200/80">
              <img
                src={heroImage}
                alt="Bright, professionally cleaned living space"
                className="aspect-[5/4] w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 to-transparent px-5 py-5">
                <p className="text-sm font-medium text-white">Licensed & insured · Locally owned</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Why clients stay with us</h2>
              <ul className="mt-5 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-sky-50 p-1.5 ring-1 ring-sky-100">
                      <IconShield />
                    </span>
                    <span className="text-slate-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <BtnLink
                href="/commercial-cleaning"
                variant="dark"
                onClick={onNavClick}
                className="mt-6 px-5 py-2.5 text-sm"
              >
                Request commercial quote
              </BtnLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            title="Our services"
            description="Thorough, detail-focused cleaning for homes, offices, and rental properties across Orange County."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {residentialServices.map((service) => (
              <ServiceCard key={service} title={service} />
            ))}
          </div>
        </div>
      </section>

    

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading
            title="Why choose PFMB Cleaning"
            description="Local, responsive, and built for homes and businesses that need consistent quality."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseCards.map((card) => (
              <article
                key={card}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-sky-200 hover:bg-white hover:shadow-sm"
              >
                <p className="inline-flex items-center gap-2 text-base font-semibold text-slate-900">
                  <IconCheck />
                  {card}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Serving Orange County</h3>
            <p className="mt-3 max-w-2xl text-slate-600">
              Homeowners, offices, medical practices, retail, and property managers across the county.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {orangeCountyCoverage.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white bg-white px-4 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm"
                >
                  <CoverageIcon id={item.id} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
            <SectionHeading
              title="Commercial cleaning"
              description="Keep your business clean, professional, and ready for clients, staff, and visitors."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {commercialServices.map((service) => (
                <ServiceCard key={service} title={service} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BtnLink href="/commercial-cleaning" onClick={onNavClick}>
                Request commercial quote
              </BtnLink>
              <BtnLink href="#contact" variant="secondary">
                Get 20% off first cleaning
              </BtnLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading title="Built for trust" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {builtForTrust.map((item) => (
              <p
                key={item}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-slate-700"
              >
                <IconCheck />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AreasWeServe onNavClick={onNavClick} />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-sky-900 p-8 text-white sm:p-10">
            <h2 className="text-3xl font-bold tracking-tight">Pricing</h2>
            <p className="mt-4 max-w-3xl text-slate-100">
              Custom quotes based on home size and cleaning needs. Prices below are starting
              points.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <SectionCard title="Standard Cleaning Pricing" subtitle="Residential starting prices">
              <div className="hidden sm:block">
                <Table
                  columns={[
                    { key: 'homeSize', label: 'Home Size' },
                    { key: 'time', label: 'Estimated Time' },
                    { key: 'price', label: 'Starting Price', emphasis: true },
                  ]}
                  rows={standardPricing}
                  rowKey={(r) => r.homeSize}
                />
              </div>
              <div className="sm:hidden">
                <MobileList rows={standardPricing} leftKey="homeSize" rightKey="price" />
                <p className="mt-3 text-xs text-slate-600">
                  Estimated time may vary by condition and add-ons.
                </p>
              </div>
            </SectionCard>

            <SectionCard title="Deep Cleaning Pricing" subtitle="First-time cleans / neglected homes">
              <div className="hidden sm:block">
                <Table
                  columns={[
                    { key: 'homeSize', label: 'Home Size' },
                    { key: 'price', label: 'Starting Price', emphasis: true },
                  ]}
                  rows={deepPricing}
                  rowKey={(r) => r.homeSize}
                />
              </div>
              <div className="sm:hidden">
                <MobileList rows={deepPricing} leftKey="homeSize" rightKey="price" />
              </div>
            </SectionCard>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <SectionCard title="Move-In / Move-Out Cleaning" subtitle="Residential starting prices">
              <div className="hidden sm:block">
                <Table
                  columns={[
                    { key: 'homeSize', label: 'Home Size' },
                    { key: 'price', label: 'Starting Price', emphasis: true },
                  ]}
                  rows={movePricing}
                  rowKey={(r) => r.homeSize}
                />
              </div>
              <div className="sm:hidden">
                <MobileList rows={movePricing} leftKey="homeSize" rightKey="price" />
              </div>
            </SectionCard>

            <SectionCard title="Add-On Services" subtitle="Optional extras">
              <div className="grid gap-2">
                {addOns.map((a) => (
                  <div
                    key={a.service}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-800">{a.service}</span>
                    <span className="text-sm font-semibold text-slate-900">{a.price}</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Recurring Discounts" subtitle="Save with routine service">
              <div className="grid gap-2">
                {recurringDiscounts.map((d) => (
                  <div
                    key={d.frequency}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-800">{d.frequency}</span>
                    <span className="text-sm font-semibold text-slate-900">{d.discount}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <SectionCard title="Suggested PFMB Cleaning Policy">
              <div className="space-y-3 text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Initial Cleaning</p>
                  <p className="mt-1">
                    First-time cleanings may require additional time and cost depending on
                    condition.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Cancellation Policy</p>
                  <p className="mt-1">24-hour notice required to avoid cancellation fee.</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Payment Methods" subtitle="Pay the way that’s easiest">
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      <ContactSection headline="Contact Us" cta="Schedule a Free Walkthrough" />
    </main>
  )
}

export function CommercialCleaningPage({ onNavClick }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow dark>Commercial cleaning · Orange County</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Office & facility cleaning businesses trust
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            Medical offices, retail, property management, and small offices — flexible schedules and
            clear communication from a local team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BtnLink href="#contact">Schedule a free walkthrough</BtnLink>
            <BtnLink href="/" variant="secondary" onClick={onNavClick}>
              Residential services
            </BtnLink>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <SectionCard title="Who we help">
            <div className="grid gap-3 sm:grid-cols-2">
              {whoWeHelp.map((item) => (
                <p key={item} className="inline-flex items-center gap-2 text-slate-700">
                  <IconCheck />
                  {item}
                </p>
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Services included">
            <div className="grid gap-3">
              {servicesIncluded.map((item) => (
                <p key={item} className="inline-flex items-center gap-2 text-slate-700">
                  <IconCheck />
                  {item}
                </p>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard title="Why choose PFMB Cleaning">
            <div className="grid gap-3">
              {[
                'Reliable communication',
                'Flexible scheduling',
                'Professional cleaners',
                'Local Orange County company',
                'Satisfaction guarantee',
                'Free estimates',
              ].map((item) => (
                <p key={item} className="inline-flex items-center gap-2 text-slate-700">
                  <IconCheck />
                  {item}
                </p>
              ))}
            </div>
          </SectionCard>
          <SectionCard title="Free walkthrough process">
            <ol className="space-y-3 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">1. Quick call:</span> Share your
                building type, schedule, and cleaning goals.
              </li>
              <li>
                <span className="font-semibold text-slate-900">2. Walkthrough:</span> We tour your
                space and identify service priorities and timing.
              </li>
              <li>
                <span className="font-semibold text-slate-900">3. Custom plan:</span> You receive a
                clear scope, frequency, and pricing.
              </li>
            </ol>
          </SectionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading title="FAQ" description="Common questions about commercial cleaning with PFMB." />
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50/50">
            {faqItems.map((item) => (
              <details key={item.question} className="group px-5 py-4">
                <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900">
                  {item.question}
                  <span className="text-xl leading-none text-sky-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection headline="Request Commercial Cleaning Service" cta="Request Commercial Quote" />
    </main>
  )
}

export { ContactSection, Footer, Header }
