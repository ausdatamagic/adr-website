import { useState } from 'react'
import { config } from './config'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getStripeUrl = (service) => {
    const linkKey = service.stripe_link
    const linkPath = linkKey.split('.')[1]
    return config.stripe[linkPath]
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-2xl font-bold text-stone-50">{config.company.shortName}</h1>
            <div className="w-px h-6 bg-yellow-600 opacity-60"></div>
            <p className="text-xs font-light tracking-wider text-stone-400 uppercase leading-tight max-w-20">
              {config.company.name}
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="text-stone-400 hover:text-stone-100 transition-colors">Services</a>
            <a href="#how-it-works" className="text-stone-400 hover:text-stone-100 transition-colors">How It Works</a>
            <a href="#contact" className="text-stone-400 hover:text-stone-100 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-800 bg-black">
            <nav className="flex flex-col gap-4 px-6 py-4 text-sm">
              <a href="#services" className="text-stone-400 hover:text-stone-100" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#how-it-works" className="text-stone-400 hover:text-stone-100" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#contact" className="text-stone-400 hover:text-stone-100" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-stone-50 mb-6 leading-tight tracking-tight">
            YOUR NAME IS NOT A PRODUCT.
          </h2>
          
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Your personal information can end up on broker sites, people-search directories, and public databases without your clear consent. We manually investigate where it appears, document the exposure, and help you reduce it through lawful, human-led action.
          </p>

          {/* Trust line */}
          <p className="text-sm text-stone-400 mb-12 uppercase tracking-wider">
            {config.trust.join(' · ')}
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={getStripeUrl(config.services.audit)}
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 font-semibold transition-colors text-center"
            >
              START YOUR ${config.services.audit.price} EXPOSURE AUDIT
            </a>
            
            <a
              href="#services"
              className="inline-block border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-stone-100 px-8 py-4 font-semibold transition-colors text-center"
            >
              SEE WHAT'S INCLUDED
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-stone-950 border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-center text-stone-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light text-lg">
            We find where your personal information is exposed online, show you what was found, and help you remove or reduce it using lawful, manual processes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - FEATURED (Audit) */}
            <div className={`border p-8 transition-all ${config.services.audit.featured ? 'border-yellow-600 bg-black shadow-lg shadow-yellow-600/10' : 'border-stone-700 bg-black hover:border-stone-600'}`}>
              <h3 className="font-serif text-2xl font-light text-stone-100 mb-2">
                {config.services.audit.name}
              </h3>
              <div className="text-3xl font-serif text-yellow-600 mb-6">
                ${config.services.audit.price}
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed whitespace-pre-line text-sm">
                {config.services.audit.description}
              </p>
              <a
                href={getStripeUrl(config.services.audit)}
                className="block w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 text-center font-semibold transition-colors"
              >
                {config.services.audit.cta}
              </a>
            </div>

            {/* Service 2 - Cleanup */}
            <div className="border border-stone-700 p-8 bg-black hover:border-stone-600 transition-all">
              <h3 className="font-serif text-2xl font-light text-stone-100 mb-2">
                {config.services.cleanup.name}
              </h3>
              <div className="text-3xl font-serif text-yellow-600 mb-6">
                ${config.services.cleanup.price}
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed whitespace-pre-line text-sm">
                {config.services.cleanup.description}
              </p>
              <a
                href={getStripeUrl(config.services.cleanup)}
                className="block w-full border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-stone-100 py-3 text-center font-semibold transition-colors"
              >
                {config.services.cleanup.cta}
              </a>
            </div>

            {/* Service 3 - Founding */}
            <div className="border border-stone-700 p-8 bg-black hover:border-stone-600 transition-all">
              <div className="mb-4">
                <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wider">
                  {config.services.founding.limit_text}
                </p>
              </div>
              <h3 className="font-serif text-2xl font-light text-stone-100 mb-2">
                {config.services.founding.name}
              </h3>
              <div className="text-3xl font-serif text-yellow-600 mb-6">
                ${config.services.founding.price}
              </div>
              <p className="text-stone-400 mb-8 leading-relaxed whitespace-pre-line text-sm">
                {config.services.founding.description}
              </p>
              <a
                href={getStripeUrl(config.services.founding)}
                className="block w-full border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-stone-100 py-3 text-center font-semibold transition-colors"
              >
                {config.services.founding.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING MEMBER SECTION */}
      <section id="founding-section" className="bg-stone-900 border-b border-stone-800">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-100 mb-6">
            Why Join as a Founding Member?
          </h2>
          
          <p className="text-stone-400 mb-12 leading-relaxed font-light">
            For early clients who want priority access at launch. Founding Members receive the audit included, priority placement for clean-up work, and light ongoing exposure checks during the founding period. Limited to 500 places.
          </p>

          <a
            href={getStripeUrl(config.services.founding)}
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 font-semibold transition-colors"
          >
            {config.services.founding.cta}
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-stone-950 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-100 mb-6 text-center">
            How It Works
          </h2>
          
          <p className="text-center text-stone-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            A simple, confidential process handled by a real person from start to finish.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {config.process.map((item, idx) => (
              <div key={item.step} className="relative">
                {/* Step number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 border border-yellow-600 rounded-full flex items-center justify-center">
                    <span className="font-serif text-yellow-600 text-lg font-light">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-light text-stone-100 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-400 text-center leading-relaxed">
                  {item.description}
                </p>

                {/* Connector line (not on last) */}
                {idx < config.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-8 h-px bg-stone-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-stone-900 border-b border-stone-800">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-stone-100 mb-6">
            Confidential Contact
          </h2>
          
          <p className="text-stone-400 mb-8 leading-relaxed font-light">
            Have a question before you begin? Get in touch and speak with a real person about your situation.
          </p>

          <p className="text-stone-400 mb-12 leading-relaxed font-light text-sm">
            All enquiries are handled confidentially in Australia. Most messages receive a response within 1 business day.
          </p>

          <div className="mb-12">
            <p className="text-stone-300 mb-2 font-light">
              <a href={`mailto:${config.company.email}`} className="text-yellow-600 hover:text-yellow-500 font-semibold transition-colors">
                {config.company.email}
              </a>
            </p>
            <p className="text-stone-400 text-sm">
              {config.company.location}
            </p>
          </div>

          <a
            href={config.forms.contact}
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 font-semibold transition-colors"
          >
            START CONFIDENTIAL ASSESSMENT
          </a>

          <p className="text-stone-500 text-xs mt-8 font-light">
            No obligation. Human-reviewed from first contact.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-8 pb-8 border-b border-stone-800">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-serif text-xl font-bold text-stone-100">{config.company.shortName}</h3>
              <div className="w-px h-6 bg-yellow-600 opacity-60"></div>
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-2xl font-light">
              {config.company.name} · Est. {config.company.year}<br/>
              {config.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Contact</h4>
              <a href={`mailto:${config.company.email}`} className="text-stone-300 hover:text-stone-100 transition-colors">
                {config.company.email}
              </a>
              <p className="text-stone-500 text-sm mt-2">
                {config.company.location}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#services" className="hover:text-stone-100 transition-colors">Exposure Audit</a></li>
                <li><a href="#services" className="hover:text-stone-100 transition-colors">Digital Clean-Up</a></li>
                <li><a href="#services" className="hover:text-stone-100 transition-colors">Founding Member</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Information</h4>
              <p className="text-stone-500 text-sm">
                ABN {config.company.abn}
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-stone-700 font-light">
            &copy; {config.company.year} {config.company.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
