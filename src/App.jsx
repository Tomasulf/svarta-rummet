import { useState, useRef, useEffect } from 'react'
import { dragHandelse } from './events.js'
import { NATIONER } from './missions.js'
import NationVy from './NationVy.jsx'

const SITE_URL = 'https://svarta-rummet.vercel.app' // uppdatera efter deploy

function qrUrl(data) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&color=1a1d24&bgcolor=ede3ce&data=${encodeURIComponent(data)}`
}

function nationUrl(slug) {
  return `${SITE_URL}?nation=${slug}`
}

export default function App() {
  const nationSlug = new URLSearchParams(window.location.search).get('nation')
  if (nationSlug) {
    return <NationVy slug={nationSlug} />
  }
  return <SvartaRummetKonsol />
}

function SvartaRummetKonsol() {
  const [kort, setKort] = useState(null)
  const [historik, setHistorik] = useState([])
  const [stampar, setStampar] = useState(false)
  const [visaQR, setVisaQR] = useState(false)
  const [visaUppdrag, setVisaUppdrag] = useState(false)
  const [akt, setAkt] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    if (kort && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [kort])

  function dra() {
    setStampar(true)
    window.setTimeout(() => {
      const ny = dragHandelse(historik)
      setKort(ny)
      setHistorik((h) => [...h, ny.kod])
      setAkt((a) => a + 1)
      setStampar(false)
    }, 420)
  }

  function nollstall() {
    setKort(null)
    setHistorik([])
    setAkt(0)
  }

  return (
    <div className="rum">
      <div className="rum__vignette" />

      <header className="topp">
        <span className="topp__eyebrow">Konfidentiellt — endast för spelledarens ögon</span>
        <h1 className="topp__titel">Svarta Rummet</h1>
        <p className="topp__underrubrik">Depescher från kanslierna, öppnade i pausen</p>
      </header>

      <main className="konsol">
        <div className="sigill-wrap">
          <button
            className={`sigill ${stampar ? 'sigill--stamp' : ''}`}
            onClick={dra}
            aria-label="Dra en depesch"
          >
            <span className="sigill__ring" />
            <span className="sigill__text">
              {kort ? 'Dra nästa\ndepesch' : 'Öppna\nrummet'}
            </span>
          </button>
          {akt > 0 && <div className="akt-räknare">Akt {String(akt).padStart(2, '0')}</div>}
        </div>

        {kort && (
          <article className={`telegram ${stampar ? 'telegram--dold' : ''}`} ref={cardRef}>
            <div className="telegram__topprad">
              <span>DEPESCH №{String(akt).padStart(3, '0')}</span>
              <span>{kort.kod}</span>
            </div>
            <h2 className="telegram__titel">{kort.titel}</h2>
            <p className="telegram__text">{kort.text}</p>
            <div className="telegram__delare" />
            <p className="telegram__direktiv">
              <span className="telegram__direktiv-etikett">Direktiv till bordet —</span> {kort.direktiv}
            </p>
          </article>
        )}

        {!kort && (
          <p className="tomrum">
            Rummet väntar. Tryck på sigillet när ni gör paus i spelet — en ny depesch
            dras och läses högt av spelledaren för hela bordet.
          </p>
        )}

        <div className="verktyg">
          {historik.length > 0 && (
            <button className="länk-knapp" onClick={nollstall}>Nollställ akterna</button>
          )}
          <button className="länk-knapp" onClick={() => setVisaQR((v) => !v)}>
            {visaQR ? 'Dölj QR-kod' : 'Visa QR-kod för bordet'}
          </button>
          <button className="länk-knapp" onClick={() => setVisaUppdrag((v) => !v)}>
            {visaUppdrag ? 'Dölj nationsuppdrag' : 'Dela ut nationsuppdrag'}
          </button>
        </div>

        {visaQR && (
          <div className="qr-kort">
            <img src={qrUrl(SITE_URL)} alt="QR-kod till Svarta Rummet" width="180" height="180" />
            <p>Låt en spelare skanna för att öppna rummet på sin egen telefon.</p>
          </div>
        )}

        {visaUppdrag && (
          <section className="uppdrags-sektion">
            <h2 className="uppdrags-sektion__titel">Hemliga uppdrag per nation</h2>
            <p className="tomrum" style={{ marginBottom: '1.5rem' }}>
              Varje spelare skannar QR-koden för sin egen nation vid speluppstart
              och drar ett personligt uppdrag som ingen annan ser.
            </p>
            <div className="uppdrags-grid">
              {NATIONER.map((n) => (
                <div className="uppdrags-kort" key={n.slug}>
                  <img src={qrUrl(nationUrl(n.slug))} alt={`QR-kod för ${n.namn}`} width="120" height="120" />
                  <span>{n.namn}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="sidfot">
        {historik.length > 0
          ? `${historik.length} depesch${historik.length === 1 ? '' : 'er'} öppnade denna kväll`
          : 'Inga depescher öppnade ännu'}
      </footer>
    </div>
  )
}
