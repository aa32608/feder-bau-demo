import { useEffect, useState } from 'react'
import './App.css'
import { languages, products, collections, stats } from './translations'

const mapUrl =
  'https://www.google.com/maps?q=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia&output=embed'

function PlaceholderBox({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`placeholder-box ${className}`} style={{ aspectRatio: ratio }}>
      <span className="placeholder-label">{label}</span>
      <span className="placeholder-badge">Placeholder</span>
    </div>
  )
}

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

function HeroCarousel({ slides, ctaTarget = '#products' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goTo = (index) => setActive(index)
  const prev = () => setActive((active - 1 + slides.length) % slides.length)
  const next = () => setActive((active + 1) % slides.length)

  return (
    <section className="hero-carousel" aria-label="Hero slider">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index} aria-hidden={active !== index}>
            <div className="hero-slide-bg">
              <PlaceholderBox label={`Hero ${index + 1}`} ratio="16 / 9" />
            </div>
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content">
              <SectionEyebrow>{slide.eyebrow}</SectionEyebrow>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a className="button primary" href={ctaTarget}>
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow carousel-prev" onClick={prev} type="button" aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="carousel-arrow carousel-next" onClick={next} type="button" aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={active === index ? 'active' : ''}
            onClick={() => goTo(index)}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState('sq')
  const t = languages[language]

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Feder Bau home">
          <span className="brand-mark">FB</span>
          <span>Feder Bau</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={['#products', '#collections', '#about', '#location', '#contact'][index]}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+38971224805" aria-label="Call showroom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <div className="language-switcher" aria-label="Language">
            {Object.keys(languages).map((code) => (
              <button
                className={language === code ? 'active' : ''}
                key={code}
                onClick={() => setLanguage(code)}
                type="button"
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <HeroCarousel slides={t.heroSlides} />

        <section className="section categories" id="categories">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{t.categoriesTitle}</h2>
          <div className="category-list">
            {t.categories.map((category, index) => (
              <a className="category-card" href="#products" key={index}>
                <span className="category-icon">
                  <PlaceholderBox label={`Icon ${index + 1}`} ratio="1 / 1" />
                </span>
                <span className="category-name">{category}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-heading">
            <SectionEyebrow>Feder Bau</SectionEyebrow>
            <h2>{t.productsTitle}</h2>
            <p>{t.productsIntro}</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <PlaceholderBox label={product.name} ratio="4 / 3" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <span className="product-price">—</span>
                  <button className="product-cta" type="button">{t.productCta}</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section collections" id="collections">
          <div className="section-heading">
            <SectionEyebrow>{t.collectionsTitle}</SectionEyebrow>
            <h2>{t.collectionsTitle}</h2>
            <p>{t.collectionsIntro}</p>
          </div>
          <div className="collection-grid">
            {collections.map((collection, index) => (
              <article className="collection-card" key={index}>
                <div className="collection-media">
                  <PlaceholderBox label={collection.title} ratio="16 / 9" />
                </div>
                <div className="collection-content">
                  <h3>{collection.title}</h3>
                  <p>{collection.subtitle}</p>
                  <span className="link-arrow">{t.collectionCta} →</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-media">
            <PlaceholderBox label="Showroom" ratio="4 / 3" />
          </div>
          <div className="about-copy">
            <SectionEyebrow>1997</SectionEyebrow>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <div className="stats-row">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section benefits">
          <div className="section-heading centered">
            <SectionEyebrow>Feder Bau</SectionEyebrow>
            <h2>{t.benefitsTitle}</h2>
          </div>
          <div className="benefits-grid">
            {t.benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">
                  <PlaceholderBox label={`${index + 1}`} ratio="1 / 1" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section location" id="location">
          <div className="location-copy">
            <SectionEyebrow>Google Maps</SectionEyebrow>
            <h2>{t.locationTitle}</h2>
            <p>{t.locationText}</p>
            <address>
              <strong>Feder Bau</strong>
              <span>Golema Rechica 1200, Tetovo</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia"
                rel="noreferrer"
                target="_blank"
              >
                Open in Google Maps
              </a>
            </address>
          </div>
          <iframe
            className="map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
            title="Feder Bau location on Google Maps"
          />
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy">
            <SectionEyebrow>Kontakt</SectionEyebrow>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactIntro}</p>
            <address>
              <a href="tel:+38971224805">+389 (0) 71 224 805</a>
              <a href="tel:+38971224804">+389 (0) 71 224 804</a>
              <a href="tel:+38971224803">+389 (0) 71 224 803</a>
              <a href="tel:+38944482141">+389 (0) 44 482 141</a>
              <a href="mailto:info@feder-bau.com.mk">info@feder-bau.com.mk</a>
              <a
                href="https://www.facebook.com/Feder-Bau-280635381948835/?ref=page_internal"
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
            </address>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              {t.name}
              <input type="text" placeholder="Arben" />
            </label>
            <label>
              {t.phone}
              <input type="tel" placeholder="+389..." />
            </label>
            <label>
              {t.interest}
              <select defaultValue="Pocket">
                {products.map((product) => (
                  <option key={product.name}>{product.name}</option>
                ))}
              </select>
            </label>
            <button type="submit">{t.send}</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark">FB</span>
              <span>Feder Bau</span>
            </span>
            <p>{t.footerTagline}</p>
          </div>
          <div className="footer-links">
            <strong>Products</strong>
            <a href="#products">Mattresses</a>
            <a href="#products">Pillows</a>
            <a href="#products">Bases</a>
            <a href="#products">Accessories</a>
          </div>
          <div className="footer-links">
            <strong>Company</strong>
            <a href="#about">About</a>
            <a href="#location">Showroom</a>
            <a href="#contact">Contact</a>
            <a href="#products">Catalog</a>
          </div>
          <div className="footer-links">
            <strong>Support</strong>
            <a href="#contact">Service</a>
            <a href="#contact">Warranty</a>
            <a href="#location">Delivery</a>
            <a href="#contact">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.placeholderNotice}</p>
          <span>© {new Date().getFullYear()} Feder Bau</span>
        </div>
      </footer>
    </div>
  )
}

export default App
