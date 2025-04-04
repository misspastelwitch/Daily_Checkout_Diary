
import express from 'express'

import { Liquid } from 'liquidjs';

import { readdir, readFile } from 'node:fs/promises';

const app = express()

const files = await readdir('content')

console.log(files)

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.get('/', async function(request, response){
response.render('index.liquid', {files:files})
})

app.get('/artikel/:slug', async function(request, response){
    console.log(request.params.slug)
    const fileContents = await readFile('content/home.md'+ request.params.slug + '.md', { encoding: 'utf8' })
    response.render('artikel.liquid', {fileContents: fileContents})
    })

    
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {

  console.log(`Application started on http://localhost:${app.get('port')}`)
})