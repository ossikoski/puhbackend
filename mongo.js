const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const person_arg = process.argv[3]
const number_arg = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.zzinl.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  person: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  person: person_arg,
  number: number_arg,
})

if(person_arg != undefined){
    person
    .save()
    .then(response => {
        console.log(`added ${person_arg} number ${number_arg} to phonebook`)
        mongoose.connection.close()
    })
}
else{
    Person
    .find({})
    .then(persons => {
        console.log("phonebook:")
        persons.forEach(person => {
            console.log(person.person, person.number)
        })
        mongoose.connection.close()
  })
}
