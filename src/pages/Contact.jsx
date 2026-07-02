import { useLanguage } from '../context/LanguageContext'
import { products } from '../translations'
import { PageHero, SectionEyebrow } from '../components/UI'

const mapUrl =
  'https://www.google.com/maps?q=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia&output=embed'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={t.contactTitle}
        text={t.contactIntro}
      />

      <section className="section contact">
        <div className="contact-copy">
          <SectionEyebrow>Showroom</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <address>
            <strong>Feder Bau</strong>
            <span>Golema Rechica 1200, Tetovo<br/>North Macedonia</span>
            <div style={{display:'grid', gap:'6px', marginTop:'10px'}}>
              <a href="tel:+38971224805">+389 (0) 71 224 805</a>
              <a href="tel:+38971224804">+389 (0) 71 224 804</a>
              <a href="tel:+38971224803">+389 (0) 71 224 803</a>
              <a href="tel:+38944482141">+389 (0) 44 482 141</a>
              <a href="mailto:info@feder-bau.com.mk">info@feder-bau.com.mk</a>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia"
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Maps →
            </a>
          </address>

          <div className="contact-hours">
            <strong>Orari / Работно време</strong>
            <p>Mon – Sat: 08:00 – 19:00<br/>Sunday: Closed</p>
          </div>
        </div>

        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            {t.name}
            <input type="text" placeholder="Arben" required />
          </label>
          <label>
            {t.phone}
            <input type="tel" placeholder="+389..." required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            {t.interest}
            <select defaultValue="Pocket">
              {products.map((product) => (
                <option key={product.name}>{product.name}</option>
              ))}
            </select>
          </label>
          <label>
            Mesazhi / Порака
            <textarea rows="4" placeholder="..." style={{width:'100%', border:'none', borderBottom:'1px solid var(--line)', padding:'10px', fontFamily:'inherit', fontSize:'1rem', resize:'vertical'}}></textarea>
          </label>
          <button type="submit">{t.send}</button>
          <p style={{fontSize:'0.78rem', color:'var(--muted)', margin:0}}>
            {t.placeholderNotice}
          </p>
        </form>
      </section>

      <section className="section location">
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
    </>
  )
}
