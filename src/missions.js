export const NATIONER = [
  { slug: 'england', namn: 'England' },
  { slug: 'frankrike', namn: 'Frankrike' },
  { slug: 'tyskland', namn: 'Tyskland' },
  { slug: 'italien', namn: 'Italien' },
  { slug: 'osterrike', namn: 'Österrike-Ungern' },
  { slug: 'ryssland', namn: 'Ryssland' },
  { slug: 'turkiet', namn: 'Turkiet' },
]

export const UPPDRAG = {
  england: [
    { kod: 'ENG-1', text: 'Få en annan spelare att offentligt skåla för Hennes Majestät — utan att avslöja varför du bad om det.' },
    { kod: 'ENG-2', text: 'Se till att Tyskland lovar dig något konkret innan nästa paus. Håll löftets innehåll hemligt för resten av bordet.' },
    { kod: 'ENG-3', text: 'Låt någon annan tala först vid tre pauser i rad — bryt aldrig själv tystnaden.' },
    { kod: 'ENG-4', text: 'Få Frankrike att med egna ord erkänna en svaghet i sin plan.' },
    { kod: 'ENG-5', text: 'Så ett rykte, sant eller falskt, om att du överväger en allians med Ryssland. Sprid det utan att bekräfta det själv.' },
  ],
  frankrike: [
    { kod: 'FRA-1', text: 'Få Italien att lova dig sitt stöd — även om löftet bara är muntligt och menat att glömmas.' },
    { kod: 'FRA-2', text: 'Undvik att nämna Tyskland vid namn under en hel paus, oavsett vad som diskuteras.' },
    { kod: 'FRA-3', text: 'Skaffa en komplimang om din diplomati från England, uttalad inför minst en tredje part.' },
    { kod: 'FRA-4', text: 'Så tvivel om Tysklands avsikter hos en spelare som inte gränsar till Tyskland.' },
    { kod: 'FRA-5', text: 'Erbjud, skenbart uppriktigt, ett samarbete till spelaren du litar minst på — och notera vem som nappar.' },
  ],
  tyskland: [
    { kod: 'TYS-1', text: 'Få två spelare som sällan pratar med varandra att båda tacka dig för samma sak.' },
    { kod: 'TYS-2', text: 'Undvik att vara den som föreslår en allians högt vid bordet — låt andra komma till dig istället.' },
    { kod: 'TYS-3', text: 'Ge minst två olika spelare intrycket av att du gynnar just dem.' },
    { kod: 'TYS-4', text: 'Få Österrike-Ungern att avslöja en oro de har om en tredje makt.' },
    { kod: 'TYS-5', text: 'Håll en hemlighet om dina verkliga planer genom minst tre pauser, även om du blir direkt tillfrågad.' },
  ],
  italien: [
    { kod: 'ITA-1', text: 'Stötta först en spelares idé högt vid bordet — och ifrågasätt den sedan lika öppet senare under kvällen.' },
    { kod: 'ITA-2', text: 'Få Österrike-Ungern eller Frankrike att erbjuda dig något först, utan att du behöver be om det.' },
    { kod: 'ITA-3', text: 'Se till att du inte är den sista som lämnar bordet vid en paus.' },
    { kod: 'ITA-4', text: 'Ställ en fråga till Turkiet om Medelhavet som får dem att tveka innan de svarar.' },
    { kod: 'ITA-5', text: 'Underdriv din egen ställning högt inför bordet minst en gång, även om det inte stämmer.' },
  ],
  osterrike: [
    { kod: 'AUH-1', text: 'Få tre olika spelare att var för sig ge dig råd om vad du borde göra härnäst.' },
    { kod: 'AUH-2', text: 'Undvik att bli anklagad för något under en hel paus, även om du faktiskt planerar något.' },
    { kod: 'AUH-3', text: 'Så oenighet mellan två grannmakter genom att nämna ett rykte, sant eller inte, om dem båda.' },
    { kod: 'AUH-4', text: 'Få Ryssland att formulera en oro om Turkiet, med egna ord.' },
    { kod: 'AUH-5', text: 'Håll dig tyst om din faktiska plan även om Tyskland frågar dig rakt ut.' },
  ],
  ryssland: [
    { kod: 'RYS-1', text: 'Få både en nordlig och en sydlig makt att erbjuda dig något under samma paus.' },
    { kod: 'RYS-2', text: 'Bekräfta eller förneka aldrig ett rykte om dina avsikter, oavsett hur många gånger du blir tillfrågad.' },
    { kod: 'RYS-3', text: 'Få Österrike-Ungern att antyda att de litar mer på dig än på Tyskland.' },
    { kod: 'RYS-4', text: 'Ge ett löfte till en spelare som du redan bestämt dig för att inte hålla.' },
    { kod: 'RYS-5', text: 'Skapa intrycket att du överväger krig åt två håll samtidigt, utan att bekräfta något.' },
  ],
  turkiet: [
    { kod: 'TUR-1', text: 'Låt bli att prata om Ryssland alls under en hel paus, oavsett hur ofta ämnet kommer upp.' },
    { kod: 'TUR-2', text: 'Få Italien eller Österrike-Ungern att fråga om dina planer innan du frågar om deras.' },
    { kod: 'TUR-3', text: 'Skapa intrycket att du är den tryggaste alliansen vid bordet — utan att lova något konkret.' },
    { kod: 'TUR-4', text: 'Så ett rykte om att du planerar en flottrörelse i Medelhavet, sant eller inte.' },
    { kod: 'TUR-5', text: 'Vänta med att säga något högt tills minst tre andra spelare har talat under pausen.' },
  ],
}

export function dragUppdrag(slug, historik = []) {
  const pool = UPPDRAG[slug] || []
  const kvar = pool.filter((u) => !historik.includes(u.kod))
  const val = kvar.length > 0 ? kvar : pool
  return val[Math.floor(Math.random() * val.length)]
}
