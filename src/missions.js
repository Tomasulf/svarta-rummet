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
// mal     — det konkreta målet spelaren ska uppnå
// till    — vem repliken ska yttras till
// replik  — en exakt fras spelaren måste säga högt, ordagrant, till rätt mottagare
export const UPPDRAG = {
  england: [
    {
      kod: 'ENG-1',
      mal: 'Få en annan spelare att offentligt skåla för Hennes Majestät — utan att avslöja varför du bad om det.',
      till: 'valfri spelare',
      replik: 'En krona utan flotta är bara en hatt, mitt herrskap.',
    },
    {
      kod: 'ENG-2',
      mal: 'Få Tyskland att lova dig något konkret innan nästa paus. Håll löftets innehåll hemligt för resten av bordet.',
      till: 'Tyskland',
      replik: 'Vi minns alla vem som senast svek ett handslag vid det här bordet.',
    },
    {
      kod: 'ENG-3',
      mal: 'Låt någon annan tala först vid tre pauser i rad — bryt aldrig själv tystnaden.',
      till: 'valfri spelare, viskat',
      replik: 'Tystnad är också ett budskap. Fråga er själva vad det betyder.',
    },
    {
      kod: 'ENG-4',
      mal: 'Få Frankrike att med egna ord erkänna en svaghet i sin plan.',
      till: 'Frankrike',
      replik: 'Er kust må vara vacker, men vackra kuster brinner lika lätt som fula.',
    },
    {
      kod: 'ENG-5',
      mal: 'Så ett rykte, sant eller falskt, om att du överväger en allians med Ryssland.',
      till: 'valfri spelare, med sänkt röst',
      replik: 'Björnen och lejonet har talat förr. Fråga er vad som en gång utbyttes.',
    },
  ],
  frankrike: [
    {
      kod: 'FRA-1',
      mal: 'Få Italien att lova dig sitt stöd — även om löftet bara är muntligt och menat att glömmas.',
      till: 'Italien',
      replik: 'Solen går ner över Medelhavet oavsett vem som styr dess stränder. Välj rätt sida innan mörkret faller.',
    },
    {
      kod: 'FRA-2',
      mal: 'Undvik att nämna Tyskland vid namn under en hel paus, oavsett vad som diskuteras.',
      till: 'valfri spelare, viskat',
      replik: 'Det finns namn man inte längre uttalar vid det här bordet. Av goda skäl.',
    },
    {
      kod: 'FRA-3',
      mal: 'Skaffa en komplimang om din diplomati från England, uttalad inför minst en tredje part.',
      till: 'England',
      replik: 'Er flotta är minsann imponerande. Synd att haven har för vana att glömma sina vänner.',
    },
    {
      kod: 'FRA-4',
      mal: 'Så tvivel om Tysklands avsikter hos en spelare som inte gränsar till Tyskland.',
      till: 'vald spelare',
      replik: 'Fråga er varför Tyskland ler så brett mot alla samtidigt.',
    },
    {
      kod: 'FRA-5',
      mal: 'Erbjud, skenbart uppriktigt, ett samarbete till spelaren du litar minst på — och notera vem som nappar.',
      till: 'den spelaren',
      replik: 'Gårdagens fiende kan bli morgondagens vän. Eller något betydligt värre.',
    },
  ],
  tyskland: [
    {
      kod: 'TYS-1',
      mal: 'Få två spelare som sällan pratar med varandra att båda tacka dig för samma sak.',
      till: 'båda, var för sig',
      replik: 'Jag ger sällan löften. Men när jag gör det håller de längre än ni anar.',
    },
    {
      kod: 'TYS-2',
      mal: 'Undvik att vara den som föreslår en allians högt vid bordet — låt andra komma till dig istället.',
      till: 'valfri spelare, viskat',
      replik: 'Den som talar högst blir alltid misstänkt först.',
    },
    {
      kod: 'TYS-3',
      mal: 'Ge minst två olika spelare intrycket av att du gynnar just dem.',
      till: 'var och en, i enrum',
      replik: 'Mellan er två finns bara en jag verkligen litar på. Gissa vem.',
    },
    {
      kod: 'TYS-4',
      mal: 'Få Österrike-Ungern att avslöja en oro de har om en tredje makt.',
      till: 'Österrike-Ungern',
      replik: 'Er granne i öster sover med ett öga öppet. Har ni märkt det?',
    },
    {
      kod: 'TYS-5',
      mal: 'Håll en hemlighet om dina verkliga planer genom minst tre pauser, även om du blir direkt tillfrågad.',
      till: 'den som frågar',
      replik: 'Vissa sanningar mognar bäst i mörker, min vän.',
    },
  ],
  italien: [
    {
      kod: 'ITA-1',
      mal: 'Stötta först en spelares idé högt vid bordet — och ifrågasätt den sedan lika öppet senare under kvällen.',
      till: 'samma spelare, senare',
      replik: 'Jag trodde på er plan i går. I dag ser jag den i ett helt annat ljus.',
    },
    {
      kod: 'ITA-2',
      mal: 'Få Österrike-Ungern eller Frankrike att erbjuda dig något först, utan att du behöver be om det.',
      till: 'vald spelare, viskat',
      replik: 'Den som väntar länge nog får ofta det bästa erbjudandet.',
    },
    {
      kod: 'ITA-3',
      mal: 'Se till att du inte är den sista som lämnar bordet vid en paus.',
      till: 'bordet, i förbifarten',
      replik: 'Den som stannar sist vid bordet har ofta mest att dölja.',
    },
    {
      kod: 'ITA-4',
      mal: 'Ställ en fråga till Turkiet om Medelhavet som får dem att tveka innan de svarar.',
      till: 'Turkiet',
      replik: 'Medelhavet minns varje flotta som en gång trodde sig äga det.',
    },
    {
      kod: 'ITA-5',
      mal: 'Underdriv din egen ställning högt inför bordet minst en gång, även om det inte stämmer.',
      till: 'bordet',
      replik: 'Vi i söder har aldrig varit annat än en eftertanke. Eller hur?',
    },
  ],
  osterrike: [
    {
      kod: 'AUH-1',
      mal: 'Få tre olika spelare att var för sig ge dig råd om vad du borde göra härnäst.',
      till: 'var och en',
      replik: 'Jag lyssnar gärna på alla. Det betyder inte att jag följer någon.',
    },
    {
      kod: 'AUH-2',
      mal: 'Undvik att bli anklagad för något under en hel paus, även om du faktiskt planerar något.',
      till: 'den som eventuellt anklagar, lugnt',
      replik: 'Anklagelser säger ofta mer om den som anklagar än om den anklagade.',
    },
    {
      kod: 'AUH-3',
      mal: 'Så oenighet mellan två grannmakter genom att nämna ett rykte, sant eller inte, om dem båda.',
      till: 'vald spelare, viskat',
      replik: 'Har ni hört vad som viskades mellan era grannar i natt?',
    },
    {
      kod: 'AUH-4',
      mal: 'Få Ryssland att formulera en oro om Turkiet, med egna ord.',
      till: 'Ryssland',
      replik: 'Er granne i söder har långt minne och ännu längre gränser.',
    },
    {
      kod: 'AUH-5',
      mal: 'Håll dig tyst om din faktiska plan även om Tyskland frågar dig rakt ut.',
      till: 'Tyskland, med ett leende',
      replik: 'Om jag berättade nu, vore det knappast längre en hemlighet.',
    },
  ],
  ryssland: [
    {
      kod: 'RYS-1',
      mal: 'Få både en nordlig och en sydlig makt att erbjuda dig något under samma paus.',
      till: 'båda, var för sig',
      replik: 'Ett rike sträcker sig längre än ögat ser. Och minns lika långt.',
    },
    {
      kod: 'RYS-2',
      mal: 'Bekräfta eller förneka aldrig ett rykte om dina avsikter, oavsett hur många gånger du blir tillfrågad.',
      till: 'den som frågar',
      replik: 'Rykten är som snö. De smälter för den som väntar tåligt.',
    },
    {
      kod: 'RYS-3',
      mal: 'Få Österrike-Ungern att antyda att de litar mer på dig än på Tyskland.',
      till: 'Österrike-Ungern',
      replik: 'Tyskland lovar mycket. Jag lovar mindre — och håller allt.',
    },
    {
      kod: 'RYS-4',
      mal: 'Ge ett löfte till en spelare som du redan bestämt dig för att inte hålla.',
      till: 'mottagaren',
      replik: 'Mitt ord är mitt ord. Tills omständigheterna säger annat.',
    },
    {
      kod: 'RYS-5',
      mal: 'Skapa intrycket att du överväger krig åt två håll samtidigt, utan att bekräfta något.',
      till: 'bordet, kryptiskt',
      replik: 'En björn med två tassar i elden bränner sig sällan på båda samtidigt.',
    },
  ],
  turkiet: [
    {
      kod: 'TUR-1',
      mal: 'Låt bli att prata om Ryssland alls under en hel paus, oavsett hur ofta ämnet kommer upp.',
      till: 'den som tar upp ämnet',
      replik: 'Vissa namn är bättre outtalade vid det här bordet.',
    },
    {
      kod: 'TUR-2',
      mal: 'Få Italien eller Österrike-Ungern att fråga om dina planer innan du frågar om deras.',
      till: 'vald spelare',
      replik: 'Ni verkar nyfikna på mina avsikter. Det gör mig nyfiken på era.',
    },
    {
      kod: 'TUR-3',
      mal: 'Skapa intrycket att du är den tryggaste alliansen vid bordet — utan att lova något konkret.',
      till: 'valfri spelare',
      replik: 'Med mig vid er sida sover ni tryggare. Det är allt jag säger.',
    },
    {
      kod: 'TUR-4',
      mal: 'Så ett rykte om att du planerar en flottrörelse i Medelhavet, sant eller inte.',
      till: 'valfri spelare, lågmält',
      replik: 'Något rör sig i vattnen söderut. Dra era egna slutsatser.',
    },
    {
      kod: 'TUR-5',
      mal: 'Vänta med att säga något högt tills minst tre andra spelare har talat under pausen.',
      till: 'bordet, när du väl talar',
      replik: 'Tystnad är ett vapen få vågar bära. Jag bär det gärna.',
    },
  ],
}

export function dragUppdrag(slug, historik = []) {
  const pool = UPPDRAG[slug] || []
  const kvar = pool.filter((u) => !historik.includes(u.kod))
  const val = kvar.length > 0 ? kvar : pool
  return val[Math.floor(Math.random() * val.length)]
}
