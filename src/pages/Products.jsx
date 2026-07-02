import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { products } from '../translations'
import { PlaceholderBox, SectionEyebrow, PageHero } from '../components/UI'
import { Link } from 'react-router-dom'

export default function Products() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...t.categories.slice(0,4)]

  return (
    <>
      <PageHero
        eyebrow="Feder Bau • Tetovo"
        title={t.productsTitle}
        text={t.productsIntro}
      />

      <section className="section products" style={{ paddingTop: '40px' }}>
        <div className="product-filters">
          {categories.map((c, i) => (
            <button 
              key={c}
              onClick={()=>setFilter(c)}
              className={filter === c ? 'active':''}
              type="button"
            >
              {i===0 ? ({sq:'Të gjitha', mk:'Сите', en:'All'}[t.nav ? 'en' : 'en']) || 'All' : c}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <PlaceholderBox label={product.name} ratio="4 / 3" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <div className="product-meta">
                  <span className="product-price">—</span>
                  <span className="product-tag">Made in Tetovo</span>
                </div>
                <div className="product-actions">
                  <Link to="/contact" className="product-cta">{t.productCta}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="product-help">
          <h3>{t.benefits[2].title}</h3>
          <p>{t.benefits[2].text}</p>
          <Link to="/contact" className="button primary">{t.contactTitle}</Link>
        </div>
      </section>
    </>
  )
}
