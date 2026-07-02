import { Link } from 'react-router-dom'
import { PageHero } from '../components/UI'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Faqja nuk u gjet"
        text="The page you’re looking for doesn’t exist. Kthehu në faqen kryesore."
      />
      <section className="section" style={{textAlign:'center', paddingTop:0}}>
        <Link to="/" className="button primary">Kthehu te Kreu →</Link>
      </section>
    </>
  )
}
