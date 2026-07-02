// Stormakterna i spelet. Används för att fylla i {MAKT} i vissa depescher.
export const MAKTER = [
  'England',
  'Frankrike',
  'Tyskland',
  'Italien',
  'Österrike-Ungern',
  'Ryssland',
  'Turkiet',
]

function slumpMakt(uteslut) {
  const val = MAKTER.filter((m) => m !== uteslut)
  return val[Math.floor(Math.random() * val.length)]
}

// Varje händelse har:
// kod       — kort etikett (visas som "AKT №")
// titel     — rubrik på depeschen
// text      — brödtext, kan innehålla {MAKT}
// direktiv  — en konkret instruktion till spelarna vid bordet, läses högt av spelledaren
export const HANDELSER = [
  {
    kod: 'AVLYSSNING',
    titel: 'Ett avlyssnat telegram',
    text: 'Underrättelsetjänsten har fångat upp ett chiffrerat meddelande skickat från {MAKT}s ambassad sent i natt. Innehållet är oklart, men avsändaren är känd för att aldrig skriva utan anledning.',
    direktiv: 'Spelledaren pekar ut en spelare. Den spelaren måste, innan nästa runda börjar, viska en (sann eller falsk) hemlighet till exakt en annan spelare vid bordet.',
  },
  {
    kod: 'SKANDAL',
    titel: 'Skandal i societeten',
    text: 'Ett rykte sprider sig genom huvudstädernas salonger: en högt uppsatt diplomat har setts i sällskap som inte tål dagsljus. Ingen namnger honom öppet — ännu.',
    direktiv: 'Den spelare som senast bröt ett löfte (enligt gruppens minne) måste besvara en fråga från valfri annan spelare fullständigt sanningsenligt.',
  },
  {
    kod: 'GRÄNSINCIDENT',
    titel: 'Gränsincident',
    text: 'Skottlossning har rapporterats vid en avlägsen gränspostering nära {MAKT}s territorium. Ingen vet ännu vem som sköt först, och båda sidor skyller på den andra.',
    direktiv: 'De två spelare som sitter närmast varandra vid bordet måste offentligt förklara sina avsikter för nästa spelomgång — inför alla.',
  },
  {
    kod: 'DUBBELSPEL',
    titel: 'Anklagelse om dubbelspel',
    text: 'En anonym källa hävdar att en av stormakterna för hemliga förhandlingar med två motparter samtidigt, och lovar bådadera samma territorium.',
    direktiv: 'Alla spelare röstar tyst (peka samtidigt) på vem de tror är skyldig. Den mest utpekade spelaren måste dricka en klunk/äta en tugga och svara på en fråga.',
  },
  {
    kod: 'DEPESCHFEL',
    titel: 'Depeschen kom bort',
    text: 'Ett brådskande meddelande avsett för {MAKT} har av misstag levererats till fel ambassad. Budbäraren insisterar på att det inte var hans fel.',
    direktiv: 'Spelledaren väljer en spelare. Den spelaren måste avslöja en sann detalj om sin faktiska spelplan för hela bordet.',
  },
  {
    kod: 'HEMLIG_GÄST',
    titel: 'En oväntad gäst',
    text: 'En resande utan pass eller titel har synts vid hovet. Han talar flytande fyra språk och minns namnen på alla han möter.',
    direktiv: 'Utse en spelare till "spionen" fram till nästa paus. Om spionen kan visa att hen fått en annan spelare att avslöja en sann plan, vinner spionen en fördel (spelledaren avgör vilken).',
  },
  {
    kod: 'ULTIMATUM',
    titel: 'Ett ultimatum lämnas',
    text: '{MAKT} kräver ett omedelbart svar i en fråga som inte specificeras. Tonen i skrivelsen lämnar föga utrymme för tvetydighet.',
    direktiv: 'Spelaren som styr den nämnda makten måste inom 60 sekunder högt deklarera en (sann) prioritet för sin nästa order.',
  },
  {
    kod: 'MUTA',
    titel: 'Ett diskret erbjudande',
    text: 'En förmögen affärsman, vars lojaliteter är höljda i dunkel, erbjuder sig att "underlätta" för rätt person, i utbyte mot en liten tjänst i framtiden.',
    direktiv: 'Spelledaren väljer en spelare som får en påhittad "IOU" — en annan spelare vid bordet får kräva in en (harmlös) tjänst av dem senare under kvällen.',
  },
  {
    kod: 'PRESSLÄCKA',
    titel: 'Läckan till pressen',
    text: 'En lokaltidning i {MAKT} publicerar detaljer från ett möte som bara ett fåtal personer kände till. Redaktören vägrar avslöja sin källa.',
    direktiv: 'Den spelare som pratat minst denna runda måste nu, öppet inför alla, avslöja vem de för närvarande litar mest på.',
  },
  {
    kod: 'MOBILISERING',
    titel: 'Rykten om mobilisering',
    text: 'Trupprörelser har observerats längs en av de stora järnvägslinjerna. Generalstaben i {MAKT} nekar till allt, vilket sällan är ett gott tecken.',
    direktiv: 'Alla spelare som styr en granne till nämnd makt måste resa sig upp och skåla för fred — med uppenbar ironi.',
  },
  {
    kod: 'ARVSTVIST',
    titel: 'En arvstvist vid hovet',
    text: 'En avlägsen kusin till tronen har dykt upp med anspråk på mark som ingen visste var omtvistad. Advokaterna gnuggar händerna.',
    direktiv: 'Spelledaren utser två spelare som tvistar. De måste komma överens om en (påhittad) kompromiss inom en minut, inför bordet.',
  },
  {
    kod: 'ATTENTAT',
    titel: 'Ett attentatsförsök',
    text: 'En skottlossning vid en offentlig ceremoni i {MAKT} slutade utan dödsoffer, men chocken sprider sig snabbt genom diplomatkåren.',
    direktiv: 'Spelledaren läser upp: "En allians har spruckit inom loppet av en natt." Spelarna för den nämnda makten och dess senaste allierade måste offentligt bekräfta eller förneka detta.',
  },
  {
    kod: 'HEMLIG_PAKT',
    titel: 'Rykte om en hemlig pakt',
    text: 'Två makter påstås ha undertecknat ett avtal i största hemlighet. Innehållet är okänt, men bara det faktum att det existerar oroar övriga hov.',
    direktiv: 'Spelledaren pekar ut två spelare slumpmässigt. Övriga spelare får under 30 sekunder gissa högt vad avtalet innehåller — de utpekade varken bekräftar eller förnekar.',
  },
  {
    kod: 'HUNGERSNÖD',
    titel: 'Missväxt i öster',
    text: 'Dåliga skördar har lämnat delar av {MAKT} i knipa. Ambassadörer viskar om att detta kan göra makten mer, eller mindre, benägen till krig.',
    direktiv: 'Spelaren för den nämnda makten får (om de vill) be en annan spelare om en verklig eftergift i utbyte mot ett löfte om framtida hjälp — helt öppet, inför alla.',
  },
  {
    kod: 'DUBBELAGENT',
    titel: 'En dubbelagent avslöjad',
    text: 'En tjänsteman inom underrättelsetjänsten visar sig ha rapporterat till två herrar samtidigt. Frågan är sedan hur länge, och till vems fördel.',
    direktiv: 'Spelledaren viskar en (påhittad) hemlighet till en slumpvald spelare om en annan spelare vid bordet. Den förstnämnda avgör själv om, och när, hemligheten avslöjas under kvällen.',
  },
  {
    kod: 'MINNESTAL',
    titel: 'Ett minnestal hålls',
    text: 'En respekterad statsman har avlidit, och representanter från samtliga hov samlas för att hedra honom — vilket, av en händelse, ger alla en anledning att tala med alla.',
    direktiv: 'Varje spelare måste under pausen skåla, tacka eller ge en komplimang till en spelare de normalt inte pratar med.',
  },
  {
    kod: 'FLOTTBESÖK',
    titel: 'Ett oanmält flottbesök',
    text: 'Ett örlogsfartyg från {MAKT} har lagt till i en hamn utan förvarning "för reparationer". Hamnmyndigheterna verkar inte helt övertygade.',
    direktiv: 'Spelaren för den nämnda makten måste välja: antingen offentligt ursäkta sig, eller offentligt trotsa kritiken. Bordet röstar sedan om de tror på valet.',
  },
  {
    kod: 'KRYPTOGRAM',
    titel: 'Ett olöst kryptogram',
    text: 'Ett meddelande har snappats upp men inte knäckts. Kodknäckarna tror sig ana ett namn — men bara ett, och de är inte överens om vilket.',
    direktiv: 'Spelledaren låter bordet gemensamt gissa vilken spelare meddelandet handlar om (majoritetsröst). Den utpekade spelaren måste svara på en fråga, sanningsenligt eller inte — de väljer själva, men får inte säga vilket.',
  },
  {
    kod: 'FÖRRÅDD',
    titel: 'Känslan av att vara förrådd',
    text: 'Ett löfte som gavs för bara ett par rundor sedan verkar redan ha glömts bort av den som gav det. Eller möjligen aldrig menades på allvar.',
    direktiv: 'Spelledaren frågar rakt ut: "Vem vid bordet känner sig lurad just nu?" Den som svarar får ställa en direkt fråga till den de misstänker — som måste svara.',
  },
  {
    kod: 'GISSLING',
    titel: 'Diplomatisk immunitet ifrågasatt',
    text: 'En ambassadör från {MAKT} har hållits kvar för förhör i timmar under förevändningen "administrativt missförstånd". Hemlandet är rasande.',
    direktiv: 'Alla spelare måste, en i taget, säga en sak de INTE ångrar från spelet hittills. Den nämnda maktens spelare går sist.',
  },
  {
    kod: 'VAPENVILA',
    titel: 'Rykte om vapenvila',
    text: 'Två makter ska, enligt outtalade källor, diskutera ett tillfälligt stillestånd. Ingen av dem har officiellt bekräftat något.',
    direktiv: 'Spelledaren utser två spelare. De får 30 sekunder på sig att offentligt förhandla fram (eller avfärda) en fejkad vapenvila inför resten av bordet.',
  },
  {
    kod: 'SPIONNÄT',
    titel: 'Ett spionnät rullas upp',
    text: 'Polisen i {MAKT} meddelar att ett nätverk av informatörer har avslöjats. Flera namn cirkulerar, inget är bekräftat.',
    direktiv: 'Spelledaren delar tyst ut lappar (eller viskar) till två spelare: "Du är en av de misstänkta." De två spelarna får själva avgöra hur de hanterar detta under kvällen.',
  },
  {
    kod: 'FÖRSTÄRKNING',
    titel: 'Oväntade förstärkningar',
    text: 'Rapporter gör gällande att {MAKT} snabbt byggt upp sin militära kapacitet på en plats ingen förväntade sig.',
    direktiv: 'Alla spelare vars territorium gränsar till nämnd makt måste, i tur och ordning, säga en sak de fruktar mest just nu — helt uppriktigt.',
  },
  {
    kod: 'TESTAMENTE',
    titel: 'Ett omtvistat testamente',
    text: 'En inflytelserik adelsman har avlidit och lämnat efter sig ett testamente som gynnar ett hov betydligt mer än de andra. Ingen förstår riktigt varför.',
    direktiv: 'Spelledaren utser en spelare som "arvtagare" för resten av pausen. Andra spelare får (frivilligt) erbjuda dem något litet i utbyte mot gunst.',
  },
  {
    kod: 'CENSUR',
    titel: 'Tidningarna censureras',
    text: 'Regeringen i {MAKT} har, enligt uppgift, beordrat att viss rapportering ska stoppas. Frågan är vad som är så känsligt att det inte får synas.',
    direktiv: 'Den spelaren som styr nämnd makt får ljuga rakt upp i ansiktet på bordet om en sak — utan att någon får ifrågasätta det just nu.',
  },
]

export function dragHandelse(historik = []) {
  // Undvik upprepning tills hela leken är förbrukad
  const kvar = HANDELSER.filter((h) => !historik.includes(h.kod))
  const pool = kvar.length > 0 ? kvar : HANDELSER
  const vald = pool[Math.floor(Math.random() * pool.length)]
  const makt = slumpMakt()
  return {
    ...vald,
    text: vald.text.replaceAll('{MAKT}', makt),
    dragen: new Date(),
  }
}
