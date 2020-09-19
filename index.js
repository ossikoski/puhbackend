const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

app.use(express.static('build'))

morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const cors = require('cors')

app.use(cors())

let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
  ]

app.get('/api/persons', (request, response) => {
    response.json(persons)
}) 

app.get('/info', (request, response) => {
    let date = new Date()
    response.send(`<div>Phonebook has info for ${persons.length} people
    <br></br>
    ${date}</div>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
      }
    else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log(id)
  
    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(100000))
  }

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'name or number missing' 
        })
    }
    for(let person of persons){
        if(body.name == person.name){
            return response.status(400).json({ 
                error: 'name must be unique' 
              })
        }
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
  
    response.json(person)
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})