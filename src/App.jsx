import { useState } from 'react'
import './App.css'

const languages = {
  sq: {
    nav: ['Prodhimet', 'Rreth nesh', 'Lokacioni', 'Kontakt'],
    tag: 'Dysheke nga Tetova qe nga viti 1997',
    title: 'Dysheke Feder Bau per gjume me te rehatshem',
    intro:
      'Nje demo e thjeshte per ta prezantuar Feder Bau si showroom modern online, me produktet kryesore, lokacionin dhe kontaktin ne plan te pare.',
    primary: 'Shiko produktet',
    secondary: 'Kontakto showroom-in',
    productsTitle: 'Produktet kryesore',
    productsIntro:
      'Pamje e shkurter e linjave ekzistuese, e pergatitur qe me vone te shtohen madhesite, cmimet dhe porosite.',
    aboutTitle: 'Prodhim lokal, fokus ne rehati',
    aboutText:
      'Feder Bau e paraqet misionin si krijim momentesh te kendshme permes dyshekeve profesional. Faqja aktuale permend fillimet ne vitin 1997 dhe zhvillimin drejt prodhimit te modernizuar.',
    locationTitle: 'Ku ndodhet Feder Bau',
    locationText:
      'Harta eshte vendosur per Feder Bau ne Golema Rechica, Tetove. Nese pronari ka linkun zyrtar te Google Business, mund ta vendosim direkt.',
    contactTitle: 'Kontakt i shpejte',
    contactIntro:
      'Klienti mund te telefonoje, te dergoje email ose te pergatise nje kerkese te shkurter per produkt.',
    name: 'Emri',
    phone: 'Numri i telefonit',
    interest: 'Produkti',
    send: 'Pergatit kerkesen',
    footer: 'Demo bazuar ne permbajtjen publike te Feder Bau.',
  },
  mk: {
    nav: ['Производи', 'За нас', 'Локација', 'Контакт'],
    tag: 'Душеци од Тетово од 1997',
    title: 'Feder Bau душеци за подобар сон',
    intro:
      'Едноставно демо за модерна онлајн презентација на Feder Bau, со главни производи, локација и контакт во прв план.',
    primary: 'Види производи',
    secondary: 'Контактирај салон',
    productsTitle: 'Главни производи',
    productsIntro:
      'Краток приказ на постојните линии, подготвен подоцна да се прошири со димензии, цени и нарачки.',
    aboutTitle: 'Локално производство, фокус на удобност',
    aboutText:
      'Feder Bau ја претставува својата мисија како создавање пријатни моменти преку професионални душеци. Тековната страница наведува почетоци во 1997 и развој кон модернизирано производство.',
    locationTitle: 'Каде се наоѓа Feder Bau',
    locationText:
      'Објавената адреса на постојната страница е Голема Речица 1200, Тетово. Мапата може да се замени со точен Google Maps линк ако го обезбеди сопственикот.',
    contactTitle: 'Брз контакт',
    contactIntro:
      'Клиентот може да се јави, да прати email или да подготви кратко барање за производ.',
    name: 'Име',
    phone: 'Телефон',
    interest: 'Производ',
    send: 'Подготви барање',
    footer: 'Демо базирано на јавната содржина на Feder Bau.',
  },
  en: {
    nav: ['Products', 'About', 'Location', 'Contact'],
    tag: 'Mattresses from Tetovo since 1997',
    title: 'Feder Bau mattresses for better sleep',
    intro:
      'A simple website demo that presents Feder Bau as a modern online showroom, with products, location, and contact up front.',
    primary: 'View products',
    secondary: 'Contact showroom',
    productsTitle: 'Featured products',
    productsIntro:
      'A short preview of existing product lines, ready to expand later with sizes, prices, and ordering.',
    aboutTitle: 'Local production, focused on comfort',
    aboutText:
      'Feder Bau presents its mission as creating pleasant moments through professional mattresses. The current site notes beginnings in 1997 and development toward modernized production.',
    locationTitle: 'Where to find Feder Bau',
    locationText:
      'The map is set to Feder Bau in Golema Rechica, Tetovo. If the owner has the official Google Business link, it can be placed directly.',
    contactTitle: 'Quick contact',
    contactIntro:
      'Customers can call, email, or prepare a short product inquiry before visiting the showroom.',
    name: 'Name',
    phone: 'Phone number',
    interest: 'Product',
    send: 'Prepare inquiry',
    footer: 'Demo interface based on public Feder Bau content.',
  },
}

const products = [
  {
    name: 'Viscoline',
    detail: 'Memory comfort',
    image: 'https://feder-bau.com.mk/assets/images/viscolin-2000x1250-77-2000x1250-64.jpg',
  },
  {
    name: 'Silent',
    detail: 'Balanced support',
    image: 'https://feder-bau.com.mk/assets/images/silent-2000x1250-3-2000x1250-22.jpg',
  },
  {
    name: 'Pocket',
    detail: 'Pocket spring',
    image: 'https://feder-bau.com.mk/assets/images/pocket-2000x1250-39-2000x1250-52.jpg',
  },
  {
    name: 'Memory Foam',
    detail: 'Pressure relief',
    image: 'https://feder-bau.com.mk/assets/images/memory-foam-2000x1250-60-2000x1250-86.jpg',
  },
  {
    name: 'Comfort',
    detail: 'Everyday comfort',
    image: 'https://feder-bau.com.mk/assets/images/comfort-2000x1250-22-2000x1250-88.jpg',
  },
  {
    name: 'Baby Dream',
    detail: 'For children',
    image: 'https://feder-bau.com.mk/assets/images/baby-dream-2000x1250-87-2000x1250-51.jpg',
  },
]

const mapUrl =
  'https://www.google.com/maps?q=Feder%20Bau%20Golema%20Rechica%20Tetovo%20North%20Macedonia&output=embed'

function App() {
  const [language, setLanguage] = useState('sq')
  const t = languages[language]

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Feder Bau home">
          <span className="brand-mark">FB</span>
          <span>Feder Bau</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={['#products', '#about', '#location', '#contact'][index]}>
              {item}
            </a>
          ))}
        </nav>
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
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.tag}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#products">
              {t.primary}
            </a>
            <a className="button secondary" href="#contact">
              {t.secondary}
            </a>
          </div>
        </div>
        <div className="hero-image" aria-label="Feder Bau mattress preview">
          <img
            src="https://feder-bau.com.mk/assets/images/majestic-2000x1250-800x500.jpg"
            alt="Feder Bau Majestic mattress"
          />
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Feder Bau</p>
          <h2>{t.productsTitle}</h2>
          <p>{t.productsIntro}</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name} mattress`} />
              </div>
              <div>
                <h3><br/><br/>{product.name}</h3>
                <p>{product.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">1997</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <p>{t.aboutText}</p>
      </section>

      <section className="section location" id="location">
        <div className="location-copy">
          <p className="eyebrow">Google Maps</p>
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
        <div>
          <p className="eyebrow">Kontakt</p>
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

      <footer>
        <span>Feder Bau</span>
        <p>{t.footer}</p>
      </footer>
    </main>
  )
}

export default App
