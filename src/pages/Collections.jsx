import { useLanguage } from '../context/LanguageContext'
import { collections } from '../translations'
import { PlaceholderBox, PageHero, SectionEyebrow } from '../components/UI'
import { Link } from 'react-router-dom'

export default function Collections() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero 
        eyebrow={t.nav[0]}
        title={t.collectionsTitle}
        text={t.collectionsIntro}
      />

      <section className="section collections" style={{paddingTop: '40px'}}>
        <div className="collection-grid large">
          {collections.map((collection, index) => (
            <article className="collection-card" key={index}>
              <div className="collection-media">
                <PlaceholderBox label={collection.title} ratio="16 / 9" />
              </div>
              <div className="collection-content">
                <SectionEyebrow>{'0'+(index+1)}</SectionEyebrow>
                <h3>{collection.title}</h3>
                <p>{collection.subtitle}</p>
                <Link to="/products" className="link-arrow">{t.collectionCta} →</Link>
              </div>
            </article>
          ))}
          {/* duplicate for visual density */}
          {collections.map((collection, index) => (
            <article className="collection-card subtle" key={'b'+index}>
              <div className="collection-media">
                <PlaceholderBox label={collection.title + ' II'} ratio="16 / 9" />
              </div>
              <div className="collection-content">
                <h3>{t.categories[index+3] || collection.title}</h3>
                <p>{t.productsIntro}</p>
                <Link to="/products" className="link-arrow">{t.collectionCta} →</Link>
              </div>
            </article>
          ))}
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
    </>
  )
}
