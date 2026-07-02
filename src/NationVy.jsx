import { useState, useEffect } from 'react'
import { NATIONER, dragUppdrag } from './missions.js'

function lagringsnyckel(slug) {
  return `sr-uppdrag-${slug}`
}

export default function NationVy({ slug }) {
  const nation = NATIONER.find((n) => n.slug === slug)
  const [historik, setHistorik] = useState([])
  const [aktuellt, setAktuellt] = useState(null)
  const [avslojat, setAvslojat] = useState(false)

  useEffect(() => {
    try {
      const rådata = localStorage.getItem(lagringsnyckel(slug))
      if (rådata) {
        const sparat = JSON.parse(rådata)
        const giltigt = sparat.aktuellt && typeof sparat.aktuellt.replik === 'string' && typeof sparat.aktuellt.drag === 'string'
        setHistorik(giltigt ? (sparat.historik || []) : [])
        setAktuellt(giltigt ? sparat.aktuellt : null)
      }
    } catch {
      // tomt lager, inget att göra
    }
  }, [slug])

  function draNytt() {
    const nytt = dragUppdrag(slug, historik)
    const nyHistorik = [...historik, nytt.kod]
    setHistorik(nyHistorik)
    setAktuellt(nytt)
    setAvslojat(false)
    try {
      localStorage.setItem(lagringsnyckel(slug), JSON.stringify({ historik: nyHistorik, aktuellt: nytt }))
    } catch {
      // localStorage otillgängligt — uppdraget fungerar ändå denna session
    }
  }

  if (!nation) {
    return (
      <div className="rum">
        <div className="rum__vignette" />
        <p className="tomrum">Okänd nation. Kontrollera länken eller QR-koden.</p>
      </div>
    )
  }

  return (
    <div className="rum">
      <div className="rum__vignette" />
      <header className="topp">
        <span className="topp__eyebrow">Endast för dina ögon</span>
        <h1 className="topp__titel">{nation.namn}</h1>
        <p className="topp__underrubrik">Ditt hemliga uppdrag för kvällen</p>
      </header>

      <main className="konsol">
        {!aktuellt && (
          <>
            <p className="tomrum">
              Du har inget uppdrag ännu. Dra ett — det gäller för resten av
              spelet, om ni inte kommer överens om annat.
            </p>
            <button className="sigill sigill--liten" onClick={draNytt}>
              <span className="sigill__ring" />
              <span className="sigill__text">Dra ditt{'\n'}uppdrag</span>
            </button>
          </>
        )}

        {aktuellt && !avslojat && (
          <div className="dossier-dold">
            <p className="tomrum">Du har redan ett uppdrag. Tryck för att läsa det igen.</p>
            <button className="länk-knapp" onClick={() => setAvslojat(true)}>Visa mitt uppdrag</button>
          </div>
        )}

        {aktuellt && avslojat && (
          <article className="telegram">
            <div className="telegram__topprad">
              <span>HEMLIGT UPPDRAG</span>
              <span>{aktuellt.kod}</span>
            </div>
            <p className="telegram__etikett">Draget att forcera — riktat mot {aktuellt.till}</p>
            <p className="telegram__direktiv telegram__direktiv--stor">{aktuellt.drag}</p>
            <p className="telegram__kontext">{aktuellt.mal}</p>
            <div className="telegram__delare" />
            <p className="telegram__etikett">Din replik — säg ordagrant, till {aktuellt.till}</p>
            <p className="telegram__replik">&ldquo;{aktuellt.replik}&rdquo;</p>
            <div className="telegram__delare" />
            <p className="telegram__fotnot">
              Visa inte skärmen för de andra. Röj hellre uppdraget genom hur du spelar.
            </p>
          </article>
        )}

        {aktuellt && (
          <button className="länk-knapp" onClick={draNytt} style={{ marginTop: '1rem' }}>
            Dra ett nytt uppdrag istället
          </button>
        )}
      </main>

      <footer className="sidfot">
        <a className="tillbaka-lank" href={window.location.origin}>Öppna huvudrummet</a>
      </footer>
    </div>
  )
}
