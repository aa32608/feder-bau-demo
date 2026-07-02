import { useLanguage } from '../context/LanguageContext'
import { stats } from '../translations'
import { PlaceholderBox, PageHero, SectionEyebrow } from '../components/UI'
import { Link } from 'react-router-dom'

export default function About() {
  const { t, language } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow="1997 • Tetovo"
        title={t.aboutTitle}
        text={t.aboutText}
      />

      <section className="section about">
        <div className="about-media">
          <PlaceholderBox label="Fabrika Feder Bau" ratio="4 / 3" />
        </div>
        <div className="about-copy">
          <SectionEyebrow>Showroom</SectionEyebrow>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
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
        <div className="section-heading">
          <SectionEyebrow>Feder Bau</SectionEyebrow>
          <h2>{t.benefitsTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
        <div className="benefits-grid">
          {t.benefits.map((benefit, index) => (
            <div className="benefit-card tall" key={index}>
              <div className="benefit-icon">
                <PlaceholderBox label={`${index + 1}`} ratio="1 / 1" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about">
        <div className="about-copy">
          <SectionEyebrow>Craftsmanship</SectionEyebrow>
          <h2>{t.heroSlides[1].title}</h2>
          <p>{t.heroSlides[1].text}</p>
          <p style={{marginTop: '18px'}}>{t.aboutText}</p>
          <div style={{marginTop:'28px', display:'flex', gap:'14px', flexWrap:'wrap'}}>
            <Link to="/products" className="button primary">{t.heroSlides[0].cta}</Link>
            <Link to="/contact" className="button">{t.contactTitle}</Link>
          </div>
        </div>
        <div className="about-media">
          <PlaceholderBox label="Mjeshtëri" ratio="4 / 3" />
        </div>
      </section>
    </>
  )
}
