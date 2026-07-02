export const NATIONER = [
  { slug: 'england', namn: 'England' },
  { slug: 'frankrike', namn: 'Frankrike' },
  { slug: 'tyskland', namn: 'Tyskland' },
  { slug: 'italien', namn: 'Italien' },
  { slug: 'osterrike', namn: 'Österrike-Ungern' },
  { slug: 'ryssland', namn: 'Ryssland' },
  { slug: 'turkiet', namn: 'Turkiet' },
]

// Varje uppdrag har:
// kod     — kort etikett
// mal     — det konkreta spelmässiga utfall du ska försöka forcera fram
// till    — vilken/vilka nationer repliken riktas till
// replik  — en exakt fras spelaren måste säga högt, ordagrant, till rätt mottagare
export const UPPDRAG = {
  england: [
    {
      kod: 'ENG-1',
      mal: 'Få Tyskland att lova att hålla sin flotta borta från Nordsjön/Helgoland denna säsong, i utbyte mot att du inte rör Kiel.',
      till: 'Tyskland',
      replik: 'Nordsjön har plats för en flotta i taget, herr minister. Fråga er vems.',
    },
    {
      kod: 'ENG-2',
      mal: 'Övertyga Frankrike att stödja din flotta in i Engelska kanalen eller Belgien nästa drag — utan att avslöja varför du vill dit.',
      till: 'Frankrike',
      replik: 'Kanalen tillhör den som vågar korsa den först.',
    },
    {
      kod: 'ENG-3',
      mal: 'Säkra ett löfte från Ryssland att inte röra sig mot Norge denna runda.',
      till: 'Ryssland',
      replik: 'Norge må vara kallt, men det är mitt att hålla varmt.',
    },
    {
      kod: 'ENG-4',
      mal: 'Så split mellan Tyskland och Frankrike om vem av dem som ska få Belgien.',
      till: 'Tyskland eller Frankrike',
      replik: 'Låglandet är litet, men två herrar får aldrig plats i samma rum.',
    },
    {
      kod: 'ENG-5',
      mal: 'Få Frankrike att lova att inte anfalla din flotta i Engelska kanalen, i utbyte mot ett löfte om Belgien till dem.',
      till: 'Frankrike',
      replik: 'Ge mig kanalen, så ska jag glömma vad jag såg utanför Brest.',
    },
  ],
  frankrike: [
    {
      kod: 'FRA-1',
      mal: 'Få Tyskland att avstå från att flytta in i Burgund denna säsong.',
      till: 'Tyskland',
      replik: 'Burgund har bytt herre förr. Fråga er om det sker igen.',
    },
    {
      kod: 'FRA-2',
      mal: 'Övertyga England att stödja dig in i Belgien istället för att ta det själva.',
      till: 'England',
      replik: 'Belgien är en gåva bäst given av vän, inte tagen av fiende.',
    },
    {
      kod: 'FRA-3',
      mal: 'Säkra ett löfte från Italien att inte röra sig mot Marseille eller Piemonte.',
      till: 'Italien',
      replik: 'Alperna skyddar oss båda — om vi låter dem göra det.',
    },
    {
      kod: 'FRA-4',
      mal: 'Så oro hos Tyskland om Rysslands avsikter mot München.',
      till: 'Tyskland',
      replik: 'Ryssland ser längre västerut än ni anar, min vän.',
    },
    {
      kod: 'FRA-5',
      mal: 'Övertyga England eller Tyskland om att din flotta i Engelska kanalen inte är riktad mot dem.',
      till: 'England eller Tyskland',
      replik: 'En flotta i kanalen är bara farlig för den som ger anledning till oro.',
    },
  ],
  tyskland: [
    {
      kod: 'TYS-1',
      mal: 'Få England att lova att inte flytta mot Kiel eller Helgoland denna säsong.',
      till: 'England',
      replik: 'Kiel har alltid tillhört den som vaktar den bäst.',
    },
    {
      kod: 'TYS-2',
      mal: 'Säkra ett löfte från Ryssland att inte trycka mot Schlesien eller Warszawa denna runda.',
      till: 'Ryssland',
      replik: 'Öster om floden vilar många gamla gränser. Låt dem vila.',
    },
    {
      kod: 'TYS-3',
      mal: 'Övertyga Frankrike att stödja dig in i Belgien, i utbyte mot ett löfte om Burgund till dem.',
      till: 'Frankrike',
      replik: 'Belgien för Bourgogne — ett rättvist byte mellan grannar.',
    },
    {
      kod: 'TYS-4',
      mal: 'Få Österrike-Ungern att lova neutralitet om du rör dig mot Böhmen eller Galicien.',
      till: 'Österrike-Ungern',
      replik: 'Vad som händer i Böhmen stannar sällan i Böhmen.',
    },
    {
      kod: 'TYS-5',
      mal: 'Så split mellan England och Frankrike om vem av dem som ska få Holland.',
      till: 'England eller Frankrike',
      replik: 'Holland är en liten dörr som två stormakter sällan kan dela.',
    },
  ],
  italien: [
    {
      kod: 'ITA-1',
      mal: 'Övertyga Österrike-Ungern att inte flytta mot Trieste eller Venedig denna säsong.',
      till: 'Österrike-Ungern',
      replik: 'Adriatiska havet är smalt nog för misstro, för brett för krig — än så länge.',
    },
    {
      kod: 'ITA-2',
      mal: 'Säkra ett löfte från Frankrike att inte röra Piemonte.',
      till: 'Frankrike',
      replik: 'Alperna är höga nog att avskräcka den kloke.',
    },
    {
      kod: 'ITA-3',
      mal: 'Föreslå Turkiet en tyst delning av inflytande kring Tunis och östra Medelhavet.',
      till: 'Turkiet',
      replik: 'Tunis väntar på den som kommer först — och stannar.',
    },
    {
      kod: 'ITA-4',
      mal: 'Så tvivel mellan Österrike-Ungern och Frankrike om vem du egentligen stödjer.',
      till: 'Österrike-Ungern eller Frankrike',
      replik: 'Jag har lovat mycket till många. Fråga er vad som var sant.',
    },
    {
      kod: 'ITA-5',
      mal: 'Föreslå Turkiet en gemensam rörelse mot Balkan, utan att specificera vem som får vad.',
      till: 'Turkiet',
      replik: 'Balkan är ett pussel utan given bild. Vi kan rita den tillsammans.',
    },
  ],
  osterrike: [
    {
      kod: 'AUH-1',
      mal: 'Säkra ett löfte från Italien att Trieste och Adriatiska havet förblir orörda.',
      till: 'Italien',
      replik: 'Trieste är en hamn som minns varje herre den haft.',
    },
    {
      kod: 'AUH-2',
      mal: 'Övertyga Ryssland att avstå från att röra Galicien denna säsong.',
      till: 'Ryssland',
      replik: 'Galicien har alltid varit gränsland — aldrig riktigt någons hemland.',
    },
    {
      kod: 'AUH-3',
      mal: 'Föreslå Turkiet en tyst delning av Balkan — Serbien, Bulgarien och Rumänien.',
      till: 'Turkiet',
      replik: 'Balkan tillhör den som är tålmodigast, inte den som är starkast.',
    },
    {
      kod: 'AUH-4',
      mal: 'Säkra stöd från Tyskland mot ett eventuellt ryskt drag i Galicien.',
      till: 'Tyskland',
      replik: 'En hand som stödjer i öster glömmer sällan sin vän i norr.',
    },
    {
      kod: 'AUH-5',
      mal: 'Så misstro mellan Ryssland och Turkiet om vem som egentligen har rätt till Rumänien.',
      till: 'Ryssland eller Turkiet',
      replik: 'Rumänien har två friare. Bara en kan vinna hennes hand.',
    },
  ],
  ryssland: [
    {
      kod: 'RYS-1',
      mal: 'Säkra ett löfte från Tyskland att inte röra Warszawa eller Schlesien.',
      till: 'Tyskland',
      replik: 'Warszawa har stått emot värre stormar än denna.',
    },
    {
      kod: 'RYS-2',
      mal: 'Övertyga Österrike-Ungern att stödja dig mot Rumänien, istället för att ta det själva.',
      till: 'Österrike-Ungern',
      replik: 'Rumänien väntar på den som kommer med starkast argument.',
    },
    {
      kod: 'RYS-3',
      mal: 'Säkra neutralitet med Turkiet i Svarta havet och kring Sevastopol.',
      till: 'Turkiet',
      replik: 'Svarta havet är stort nog för två flottor som håller avstånd.',
    },
    {
      kod: 'RYS-4',
      mal: 'Föreslå England en tyst delning av inflytande över Norge och Skandinavien.',
      till: 'England',
      replik: 'Norden är kallt nog att kyla även den hetaste tvist.',
    },
    {
      kod: 'RYS-5',
      mal: 'Så split mellan Tyskland och Österrike-Ungern om vem du egentligen stödjer i Galicien.',
      till: 'Tyskland eller Österrike-Ungern',
      replik: 'Jag har viskat samma löfte åt två håll. Fråga er vilket som var sant.',
    },
  ],
  turkiet: [
    {
      kod: 'TUR-1',
      mal: 'Säkra ett löfte från Ryssland att Sevastopol och Svarta havet förblir neutralt denna säsong.',
      till: 'Ryssland',
      replik: 'Svarta havet minns varje flotta som en gång ansåg sig ensam om det.',
    },
    {
      kod: 'TUR-2',
      mal: 'Föreslå Österrike-Ungern en tyst delning av Bulgarien.',
      till: 'Österrike-Ungern',
      replik: 'Bulgarien är en brud med två friare — bara den tålmodige vinner henne.',
    },
    {
      kod: 'TUR-3',
      mal: 'Säkra neutralitet med Italien i östra Medelhavet.',
      till: 'Italien',
      replik: 'Medelhavets östra del är trång nog för misstro, för smal för krig — ännu.',
    },
    {
      kod: 'TUR-4',
      mal: 'Så misstro mellan Ryssland och Österrike-Ungern om vem som verkligen vill ha Rumänien.',
      till: 'Ryssland eller Österrike-Ungern',
      replik: 'Två grannar viskar om samma mark. Bara en kan sova gott med den.',
    },
    {
      kod: 'TUR-5',
      mal: 'Föreslå Italien en gemensam rörelse mot Balkan och Grekland.',
      till: 'Italien',
      replik: 'Grekland ligger obevakat för den som vågar först.',
    },
  ],
}

export function dragUppdrag(slug, historik = []) {
  const pool = UPPDRAG[slug] || []
  const kvar = pool.filter((u) => !historik.includes(u.kod))
  const val = kvar.length > 0 ? kvar : pool
  return val[Math.floor(Math.random() * val.length)]
}
