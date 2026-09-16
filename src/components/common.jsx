import { useState } from 'react'
import logo from '../assets/pfmb-logo.png'
import { formAccessKey } from '../config/env'
import { cityServiceAreas } from '../data/cityServiceAreas'

export function SectionCard({ title, subtitle, children }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  )
}

export function MobileList({ rows, leftKey, rightKey }) {
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

export function Table({ columns, rows, rowKey }) {
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

export function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-600" aria-hidden="true">
      <path
        d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-sky-600" aria-hidden="true">
      <path
        d="M12 3L19 6V11.5C19 16 16 20 12 21C8 20 5 16 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true">
      <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M6.5 4h3l1.5 4-2 1.2a11 11 0 005.3 5.3L17.5 13l4 1.5v3a1.5 1.5 0 01-1.4 1.5C9.9 19.2 4.8 14.1 3 6.9A1.5 1.5 0 014.5 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CoverageIcon({ id }) {
  const className = 'h-6 w-6 text-sky-600'
  if (id === 'homes') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (id === 'medical') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (id === 'retail') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  if (id === 'property') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M7 4h10v16H7zM10 8h4M10 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 20V6l7-3 7 3v14H5z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function Eyebrow({ children, dark = false }) {
  const tone = dark
    ? 'border-sky-400/40 bg-white/10 text-sky-100'
    : 'border-sky-200/80 bg-sky-50 text-sky-800'
  return (
    <p className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${tone}`}>
      <IconSparkle />
      {children}
    </p>
  )
}

export function SectionHeading({ title, description, className = '' }) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-lg text-slate-600">{description}</p> : null}
    </div>
  )
}

export function BtnLink({ href, children, variant = 'primary', onClick, className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
  const variants = {
    primary: 'bg-sky-600 text-white shadow-sm shadow-sky-900/10 hover:bg-sky-500',
    secondary:
      'border border-slate-300 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700',
    dark: 'bg-slate-900 text-white hover:bg-slate-800',
  }
  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

export function ServiceCard({ title }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
      <div className="mb-4 inline-flex rounded-lg bg-sky-50 p-2 text-sky-600 ring-1 ring-sky-100 transition group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-600">
        <IconSparkle />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </article>
  )
}

export function Breadcrumbs({ items, onNavClick }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center gap-1.5">
            {index > 0 ? <span aria-hidden="true" className="text-slate-400">/</span> : null}
            {item.href ? (
              <a
                href={item.href}
                onClick={onNavClick}
                className="font-medium text-sky-700 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-medium text-slate-900" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  cleaningType: '',
  message: '',
}

export function ContactSection({ headline = 'Contact Us', cta = 'Request Commercial Quote' }) {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitViaMailto = () => {
    const subject = `Quote Request - ${formData.cleaningType || 'General Cleaning'}`
    const body = [
      'New quote request from PFMB Cleaning website:',
      '',
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Type of cleaning: ${formData.cleaningType || 'Not selected'}`,
      '',
      'Message:',
      formData.message || 'No message provided.',
    ].join('\n')
    window.location.href = `mailto:pfmbcleaning@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (event.currentTarget.elements.botcheck.checked) return
    setStatus('sending')

    if (!formAccessKey) {
      submitViaMailto()
      setStatus('idle')
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: formAccessKey,
          subject: `Quote Request - ${formData.cleaningType}`,
          from_name: 'PFMB Cleaning Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cleaning_type: formData.cleaningType,
          message: formData.message,
        }),
      })
      const result = await response.json()
      if (response.ok && result.success) {
        setFormData(emptyForm)
        setStatus('success')
        return
      }
    } catch {
      // fall through to error
    }
    setStatus('error')
  }

  return (
    <section id="contact" className="border-t border-slate-200 bg-gradient-to-b from-white to-sky-50/50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 sm:p-10">
          <SectionHeading
            title={headline}
            description="Tell us what you need and we will get back to you with a custom quote. You can also call (424) 206-8097 anytime."
          />
          {!formAccessKey ? (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              This form opens a draft in your email app. Send that email to complete your request, or call (424) 206-8097.
            </p>
          ) : null}
          {status === 'success' ? (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
              Thank you — your request was sent. We will get back to you soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
              Something went wrong. Please call{' '}
              <a href="tel:4242068097" className="font-semibold underline">
                (424) 206-8097
              </a>{' '}
              or email{' '}
              <a href="mailto:pfmbcleaning@gmail.com" className="font-semibold underline">
                pfmbcleaning@gmail.com
              </a>
              .
            </p>
          ) : null}
          <noscript><p>Please call <a href="tel:4242068097">424-206-8097</a> or email <a href="mailto:pfmbcleaning@gmail.com">pfmbcleaning@gmail.com</a> to request a quote.</p></noscript>
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <input
              type="text"
              name="name"
              aria-label="Name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2 disabled:opacity-60"
            />
            <input
              type="tel"
              name="phone"
              aria-label="Phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2 disabled:opacity-60"
            />
            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2 disabled:opacity-60"
            />
            <select
              name="cleaningType"
              aria-label="Type of cleaning"
              value={formData.cleaningType}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2 disabled:opacity-60"
            >
              <option value="">Type of cleaning</option>
              <option>Standard Home Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move-In / Move-Out Cleaning</option>
              <option>Office Cleaning</option>
              <option>Medical Office Cleaning</option>
              <option>Retail Cleaning</option>
              <option>Property Management Cleaning</option>
            </select>
            <textarea
              rows="5"
              name="message"
              aria-label="Cleaning details"
              placeholder="Tell us about your space, schedule, and any special requests"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
              className="sm:col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none ring-sky-300 transition focus:ring-2 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="sm:col-span-2 rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-sm shadow-sky-900/15 transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending…' : formAccessKey ? cta : 'Continue in Email App'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Header({ onNavClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-slate-900/5 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex min-w-0 items-center gap-3" onClick={onNavClick}>
          <img
            src={logo}
            alt="PFMB Cleaning logo"
            className="h-11 w-11 shrink-0 rounded-xl bg-white object-contain ring-1 ring-slate-200"
            loading="eager"
            decoding="async"
          />
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold text-slate-900">PFMB Cleaning</p>
            <p className="hidden text-xs text-slate-500 sm:block">Orange County, CA</p>
          </div>
        </a>
        <nav className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-700 sm:gap-2">
          <a
            className="hidden rounded-full px-3 py-1.5 hover:bg-slate-100 sm:inline"
            href="/"
            onClick={onNavClick}
          >
            Home
          </a>
          <a
            className="hidden rounded-full px-3 py-1.5 hover:bg-slate-100 md:inline"
            href="/service-areas"
            onClick={onNavClick}
          >
            Service Areas
          </a>
          <a
            className="hidden rounded-full px-3 py-1.5 hover:bg-slate-100 md:inline"
            href="/commercial-cleaning"
            onClick={onNavClick}
          >
            Commercial
          </a>
          <a
            href="tel:4242068097"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-2 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 sm:px-4"
          >
            <IconPhone />
            <span className="hidden sm:inline">(424) 206-8097</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-500 sm:px-4"
          >
            <span className="hidden sm:inline">Free Walkthrough</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer({ onNavClick }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-semibold text-white">PFMB Cleaning</p>
            <p className="mt-2 text-slate-400">Residential & commercial cleaning in Orange County</p>
            <p className="mt-4">
              <a href="mailto:pfmbcleaning@gmail.com" className="text-sky-300 hover:text-sky-200">
                pfmbcleaning@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Service Areas</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cityServiceAreas.map((city) => (
                <li key={city.slug}>
                  <a
                    href={city.path}
                    onClick={onNavClick}
                    className="text-sm text-slate-300 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  >
                    {city.city}, CA
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:items-start lg:items-end">
            <a
              href="tel:4242068097"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500"
            >
              <IconPhone />
              (424) 206-8097
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-sky-500 hover:text-sky-200"
            >
              Request a quote
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
