
import express from 'express'

import { Liquid } from 'liquidjs';

const app = express()

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.get('/', async function(request, response){
response.render('index.liquid')
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {

  console.log(`Application started on http://localhost:${app.get('port')}`)
})