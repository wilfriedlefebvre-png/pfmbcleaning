import logo from './assets/pfmb-logo.png'

const services = [
  'Standard Home Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Office Cleaning',
  'Airbnb / Rental Cleaning',
]

const reasons = [
  'Reliable cleaners',
  'Flexible scheduling',
  'Satisfaction-focused service',
  'Easy booking',
  'Locally owned',
]

const standardPricing = [
  { homeSize: 'Studio / 1 Bed 1 Bath', time: '1.5–2 hrs', team: '1 cleaner', price: '$120' },
  { homeSize: '2 Bed / 1 Bath', time: '2–2.5 hrs', team: '1 cleaner', price: '$160' },
  { homeSize: '2 Bed / 2 Bath', time: '2.5–3 hrs', team: '2 cleaners', price: '$200' },
  { homeSize: '3 Bed / 2 Bath', time: '3–4 hrs', team: '2 cleaners', price: '$260' },
  { homeSize: '4 Bed / 3 Bath', time: '4–5 hrs', team: '2 cleaners', price: '$340' },
  { homeSize: '5 Bed / 4 Bath', time: '5–6 hrs', team: '3 cleaners', price: '$450+' },
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

function SectionCard({ title, subtitle, children }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}

function MobileList({ rows, leftKey, rightKey }) {
  return (
    <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50">
      {rows.map((row) => (
        <li key={`${row[leftKey]}-${row[rightKey]}`} className="flex items-center justify-between p-4">
          <span className="text-sm font-medium text-slate-800">{row[leftKey]}</span>
          <span className="text-sm font-semibold text-slate-900">{row[rightKey]}</span>
        </li>
      ))}
    </ul>
  )
}

function Table({ columns, rows, rowKey }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((c) => (
                <th key={c.key} scope="col" className="px-4 py-3 font-semibold text-slate-900">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {rows.map((r) => (
              <tr key={rowKey(r)} className="align-top">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-slate-700">
                    <span className={c.emphasis ? 'font-semibold text-slate-900' : undefined}>
                      {r[c.key]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-600">
      <path
        d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-sky-600">
      <path
        d="M12 3L19 6V11.5C19 16 16 20 12 21C8 20 5 16 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="PFMB Cleaning logo"
              className="h-10 w-10 rounded-xl bg-white object-contain"
              loading="eager"
              decoding="async"
            />
            <p className="text-lg font-semibold text-slate-900">PFMB Cleaning</p>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-800">
              <IconSparkle />
              Orange County Trusted Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Professional Cleaning Services You Can Trust
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Reliable residential and commercial cleaning in Orange County.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:4242068097"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
              >
                424-206-8097
              </a>
            </div>
            <p className="mt-4 text-slate-600">
              Email:{' '}
              <a
                href="mailto:Pfmbcleaning@gmail.com"
                className="font-medium text-sky-700 hover:text-sky-600"
              >
                Pfmbcleaning@gmail.com
              </a>
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Why Clients Stay With Us</h2>
            <ul className="mt-5 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-sky-100 p-1.5">
                    <IconShield />
                  </span>
                  <span className="text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-600">
              Thorough, detail-focused cleaning for homes, offices, and rental properties.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-sky-100 p-2">
                    <IconSparkle />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{service}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                      { key: 'team', label: 'Team Size' },
                      { key: 'price', label: 'Starting Price', emphasis: true },
                    ]}
                    rows={standardPricing}
                    rowKey={(r) => r.homeSize}
                  />
                </div>
                <div className="sm:hidden">
                  <MobileList rows={standardPricing} leftKey="homeSize" rightKey="price" />
                  <p className="mt-3 text-xs text-slate-600">
                    Estimated time and team size vary by condition and add-ons.
                  </p>
                </div>
              </SectionCard>

              <SectionCard
                title="Deep Cleaning Pricing"
                subtitle="First-time cleans / neglected homes"
              >
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

        <section id="contact" className="bg-white py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact Us</h2>
              <p className="mt-2 text-slate-600">
                Tell us what you need and we will get back to you with a custom quote.
              </p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2"
                />
                <input
                  type="text"
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2">
                  <option value="">Type of cleaning</option>
                  <option>Standard Home Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move-In / Move-Out Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Airbnb / Rental Cleaning</option>
                </select>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="sm:col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 sm:px-6">
          <p className="text-lg font-semibold text-white">PFMB Cleaning</p>
          <p>Phone: 424-206-8097</p>
          <p>Email: Pfmbcleaning@gmail.com</p>
          <p>Serving Orange County, CA</p>
        </div>
      </footer>
    </div>
  )
}

export default App
