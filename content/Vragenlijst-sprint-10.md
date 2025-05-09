**Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten**
- _2_

**Ik heb een strategie voor server-side JavaScript debuggen, voor client-side JavaScript debuggen, en voor Liquid code debuggen**
- _0_

**Ik kan GET en POST routes aanmaken en request parameters gebruiken**
- _3_

```
app.post('/soliciatie', async function (request, response) {
 console.log(request.body.name);
 response.redirect(303, '/')
})
```

**Ik kan server-side JSON data fetchen uit een REST API**
- _3_
```
const vacaturesResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies_vacancies')  
const vacaturesResponseJSON = await vacaturesResponse.json()
```
**Ik kan data uit een REST API filteren of sorteren**
- _1_

**Ik snap wat het async keyword doet in JavaScript code**
- _3_

**Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON**
- 1

**Ik kan met een client-side fetch een werkend formulier verrijken**
- 3
```
      const response = await fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form))
      })
```

**Ik kan multi-page en single-page view transitions inzetten en aanpassen**
- 0

**Ik kan verschillende manieren van responsive images uitleggen en toepassen**
- 0

**Ik weet hoe ik de resultaten van een performance audit moet interpreteren en hoe ik performance problemen kan oplossen**
- 3

**Ik weet hoe ik met client-side JS de UX kan verbeteren, rekening houdend met progressive enhancement**
- 3

**Ik weet hoe ik binnen HTML, CSS en client-side JS nieuwe technieken toe kan passen, rekening houdend met oudere browsers**
- 3

**Ik weet wat objecten, arrays, strings, loops, variabelen, functies en parameters zijn, en kan die in JavaScript inzetten**
- 2

**Ik weet wat geavanceerdere concepten in JavaScript zijn, zoals closures, promises, callbacks, scope en de event loop**
- 1

 
**Ik kan via GitHub met feature branches werken, pull requests aanmaken, reviewen en mergen**
- 0

**Ik weet hoe ik formulieren pro-actief kan valideren met client-side code**
- 0

**Ik weet de eerste regel van ARIA, en wat dat betekent voor hoe ik HTML schrijf**
- 3

**Ik weet wat layout shifts zijn, door wat ze veroorzaakt worden, hoe ik ze kan meten en hoe ik ze kan oplossen**
- 2

**Ik weet wat de Core Web Vitals zijn, hoe ik die kan meten, en hoe ik de cijfers moet interpreteren**
- 1

**Ik weet hoe perceived performance invloed heeft op de beleving van een gebruiker, en ik heb de ontwerp- en code vaardigheden om die toe te passen**
- 3

**kan UI states in meerdere lagen van progressive enhancement inzetten om de UX te verbeteren**
- 2

**Ik kan een UI leuker en prettiger maken, zonder de core functionaliteit uit het oog te verliezen**
- 2

**Ik kan scroll-driven animations inzetten om de UI beter te maken**
0

**Ik weet hoe ik verschillende vormen van feature detection in kan zetten in HTML, in CSS en in client-side JS**
1
@supports
