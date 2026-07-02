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
// till    — vilken/vilka nationer (1-2 st) uppdraget riktas mot
// drag    — det konkreta draget/utfallet på kartan du ska forcera fram
// mal     — kort kontext för varför, till spelledaren/dig själv
// replik  — en exakt fras du måste säga högt, ordagrant, till angiven mottagare
export const UPPDRAG = {
  england: [
    {
      kod: 'ENG-1',
      till: 'Tyskland',
      drag: 'Tysklands flotta i Kiel rör sig INTE mot Nordsjön denna säsong.',
      mal: 'Få Tyskland att lova detta, i utbyte mot att du lämnar Helgoland ifred.',
      replik: 'Nordsjön har plats för en flotta i taget, herr minister. Fråga er vems.',
    },
    {
      kod: 'ENG-2',
      till: 'Frankrike',
      drag: 'Frankrikes armé i Picardie stödjer din flotta in i Belgien.',
      mal: 'Övertyga dem att stödja dig istället för att ta Belgien själva.',
      replik: 'Kanalen tillhör den som vågar korsa den först.',
    },
    {
      kod: 'ENG-3',
      till: 'Ryssland',
      drag: 'Rysslands flotta vid S:t Petersburg rör sig INTE mot Norge.',
      mal: 'Säkra löftet innan nästa orderfas låses.',
      replik: 'Norge må vara kallt, men det är mitt att hålla varmt.',
    },
    {
      kod: 'ENG-4',
      till: 'Tyskland eller Frankrike',
      drag: 'Endast en av dem får lova sig rätten till Belgien.',
      mal: 'Så split mellan dem om vem som ska få det — låt dem tvista, inte dig.',
      replik: 'Låglandet är litet, men två herrar får aldrig plats i samma rum.',
    },
    {
      kod: 'ENG-5',
      till: 'Frankrike',
      drag: 'Frankrikes flotta i Brest håller sig borta från Engelska kanalen.',
      mal: 'I utbyte lovar du att stödja deras drag mot Belgien.',
      replik: 'Ge mig kanalen, så ska jag glömma vad jag såg utanför Brest.',
    },
  ],
  frankrike: [
    {
      kod: 'FRA-1',
      till: 'Tyskland',
      drag: 'Tysklands armé rör sig INTE in i Burgund denna säsong.',
      mal: 'Säkra löftet innan ni båda lägger order.',
      replik: 'Burgund har bytt herre förr. Fråga er om det sker igen.',
    },
    {
      kod: 'FRA-2',
      till: 'England',
      drag: 'Englands flotta stödjer dig in i Belgien.',
      mal: 'Övertyga dem att stödja dig istället för att ta det själva.',
      replik: 'Belgien är en gåva bäst given av vän, inte tagen av fiende.',
    },
    {
      kod: 'FRA-3',
      till: 'Italien',
      drag: 'Italiens armé rör sig INTE mot Marseille eller Piemonte.',
      mal: 'Säkra löftet i utbyte mot din tystnad vid Alperna.',
      replik: 'Alperna skyddar oss båda — om vi låter dem göra det.',
    },
    {
      kod: 'FRA-4',
      till: 'Tyskland',
      drag: 'Tyskland tvekar på sin egen österfront denna säsong.',
      mal: 'Så oro hos dem om ett ryskt drag mot München.',
      replik: 'Ryssland ser längre västerut än ni anar, min vän.',
    },
    {
      kod: 'FRA-5',
      till: 'England eller Tyskland',
      drag: 'Din flotta i Engelska kanalen förblir obestridd denna säsong.',
      mal: 'Övertyga endera part om att den inte är riktad mot dem.',
      replik: 'En flotta i kanalen är bara farlig för den som ger anledning till oro.',
    },
  ],
  tyskland: [
    {
      kod: 'TYS-1',
      till: 'England',
      drag: 'Englands flotta rör sig INTE mot Kiel eller Helgoland.',
      mal: 'Säkra löftet innan nästa orderfas låses.',
      replik: 'Kiel har alltid tillhört den som vaktar den bäst.',
    },
    {
      kod: 'TYS-2',
      till: 'Ryssland',
      drag: 'Rysslands armé rör sig INTE mot Schlesien eller Warszawa.',
      mal: 'Säkra löftet i utbyte mot din tystnad om Galicien.',
      replik: 'Öster om floden vilar många gamla gränser. Låt dem vila.',
    },
    {
      kod: 'TYS-3',
      till: 'Frankrike',
      drag: 'Frankrike stödjer dig in i Belgien.',
      mal: 'I utbyte lovar du att inte röra Burgund denna säsong.',
      replik: 'Belgien för Bourgogne — ett rättvist byte mellan grannar.',
    },
    {
      kod: 'TYS-4',
      till: 'Österrike-Ungern',
      drag: 'Österrike-Ungern lovar neutralitet om du rör dig mot Böhmen.',
      mal: 'Säkra löftet innan du lägger ordern.',
      replik: 'Vad som händer i Böhmen stannar sällan i Böhmen.',
    },
    {
      kod: 'TYS-5',
      till: 'England eller Frankrike',
      drag: 'Endast en av dem får rätten till Holland.',
      mal: 'Så split mellan dem om vem som ska få det.',
      replik: 'Holland är en liten dörr som två stormakter sällan kan dela.',
    },
  ],
  italien: [
    {
      kod: 'ITA-1',
      till: 'Österrike-Ungern',
      drag: 'Österrike-Ungerns flotta rör sig INTE mot Trieste eller Venedig.',
      mal: 'Säkra löftet innan säsongen avgörs.',
      replik: 'Adriatiska havet är smalt nog för misstro, för brett för krig — än så länge.',
    },
    {
      kod: 'ITA-2',
      till: 'Frankrike',
      drag: 'Frankrikes armé rör sig INTE mot Piemonte.',
      mal: 'Säkra löftet i utbyte mot din tystnad vid Alperna.',
      replik: 'Alperna är höga nog att avskräcka den kloke.',
    },
    {
      kod: 'ITA-3',
      till: 'Turkiet',
      drag: 'Ni delar tyst på inflytandet kring Tunis.',
      mal: 'Föreslå uppdelningen innan någon annan hinner före.',
      replik: 'Tunis väntar på den som kommer först — och stannar.',
    },
    {
      kod: 'ITA-4',
      till: 'Österrike-Ungern eller Frankrike',
      drag: 'Låt båda tro att du stödjer just dem denna säsong.',
      mal: 'Så tvivel mellan dem om var din lojalitet egentligen ligger.',
      replik: 'Jag har lovat mycket till många. Fråga er vad som var sant.',
    },
    {
      kod: 'ITA-5',
      till: 'Turkiet',
      drag: 'Ni rör er samtidigt mot Balkan, utan att i förväg bestämma vem som får vad.',
      mal: 'Föreslå den gemensamma rörelsen redan nu.',
      replik: 'Balkan är ett pussel utan given bild. Vi kan rita den tillsammans.',
    },
  ],
  osterrike: [
    {
      kod: 'AUH-1',
      till: 'Italien',
      drag: 'Italiens flotta rör sig INTE mot Trieste.',
      mal: 'Säkra löftet i utbyte mot din tystnad vid Adriatiska havet.',
      replik: 'Trieste är en hamn som minns varje herre den haft.',
    },
    {
      kod: 'AUH-2',
      till: 'Ryssland',
      drag: 'Rysslands armé rör sig INTE mot Galicien.',
      mal: 'Säkra löftet innan nästa orderfas låses.',
      replik: 'Galicien har alltid varit gränsland — aldrig riktigt någons hemland.',
    },
    {
      kod: 'AUH-3',
      till: 'Turkiet',
      drag: 'Ni delar tyst på Serbien, Bulgarien och Rumänien.',
      mal: 'Föreslå uppdelningen innan Ryssland lägger sig i.',
      replik: 'Balkan tillhör den som är tålmodigast, inte den som är starkast.',
    },
    {
      kod: 'AUH-4',
      till: 'Tyskland',
      drag: 'Tyskland lovar stöd om Ryssland rör sig mot Galicien.',
      mal: 'Säkra löftet i förväg, innan du behöver det.',
      replik: 'En hand som stödjer i öster glömmer sällan sin vän i norr.',
    },
    {
      kod: 'AUH-5',
      till: 'Ryssland eller Turkiet',
      drag: 'Så misstro mellan dem om vem som egentligen ska ha Rumänien.',
      mal: 'Låt dem misstänka varandra istället för dig.',
      replik: 'Rumänien har två friare. Bara en kan vinna hennes hand.',
    },
  ],
  ryssland: [
    {
      kod: 'RYS-1',
      till: 'Tyskland',
      drag: 'Tysklands armé rör sig INTE mot Warszawa eller Schlesien.',
      mal: 'Säkra löftet innan säsongen avgörs.',
      replik: 'Warszawa har stått emot värre stormar än denna.',
    },
    {
      kod: 'RYS-2',
      till: 'Österrike-Ungern',
      drag: 'Österrike-Ungern stödjer dig mot Rumänien, istället för att ta det själva.',
      mal: 'Övertyga dem om detta innan de bestämmer sig annorlunda.',
      replik: 'Rumänien väntar på den som kommer med starkast argument.',
    },
    {
      kod: 'RYS-3',
      till: 'Turkiet',
      drag: 'Era flottor håller sig borta från varandra i Svarta havet.',
      mal: 'Säkra neutraliteten kring Sevastopol.',
      replik: 'Svarta havet är stort nog för två flottor som håller avstånd.',
    },
    {
      kod: 'RYS-4',
      till: 'England',
      drag: 'Ni delar tyst på inflytandet över Norge och Skandinavien.',
      mal: 'Föreslå detta innan England agerar på egen hand.',
      replik: 'Norden är kallt nog att kyla även den hetaste tvist.',
    },
    {
      kod: 'RYS-5',
      till: 'Tyskland eller Österrike-Ungern',
      drag: 'Låt båda tro att du stödjer just dem i Galicien.',
      mal: 'Så split mellan dem om var din lojalitet egentligen ligger.',
      replik: 'Jag har viskat samma löfte åt två håll. Fråga er vilket som var sant.',
    },
  ],
  turkiet: [
    {
      kod: 'TUR-1',
      till: 'Ryssland',
      drag: 'Rysslands flotta rör sig INTE mot Sevastopol eller Svarta havet.',
      mal: 'Säkra neutraliteten innan säsongen avgörs.',
      replik: 'Svarta havet minns varje flotta som en gång ansåg sig ensam om det.',
    },
    {
      kod: 'TUR-2',
      till: 'Österrike-Ungern',
      drag: 'Ni delar tyst på Bulgarien.',
      mal: 'Föreslå uppdelningen innan Ryssland hinner lägga sig i.',
      replik: 'Bulgarien är en brud med två friare — bara den tålmodige vinner henne.',
    },
    {
      kod: 'TUR-3',
      till: 'Italien',
      drag: 'Era flottor håller sig borta från varandra i östra Medelhavet.',
      mal: 'Säkra neutraliteten i förväg.',
      replik: 'Medelhavets östra del är trång nog för misstro, för smal för krig — ännu.',
    },
    {
      kod: 'TUR-4',
      till: 'Ryssland eller Österrike-Ungern',
      drag: 'Så misstro mellan dem om vem som verkligen vill ha Rumänien.',
      mal: 'Låt dem misstänka varandra istället för dig.',
      replik: 'Två grannar viskar om samma mark. Bara en kan sova gott med den.',
    },
    {
      kod: 'TUR-5',
      till: 'Italien',
      drag: 'Ni rör er samtidigt mot Balkan och Grekland.',
      mal: 'Föreslå den gemensamma rörelsen redan nu.',
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
