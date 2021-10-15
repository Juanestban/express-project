// importando los paquetes necesarios para el funcionamiento
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const mongoConexion = require('./config/mongoose')

// ejecutando express
const app = express()

// configuracion del servidor
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT || 3200
mongoConexion()

// creando ruta inicial y derivadas
// ruta inicial: [/]
app.get('/', (_, res) => {
  res.status(200).send('<h1>Hello world!</h1>').end()
})

// iniciando el servidor
app.listen(port, () => {
  console.log(`el servidor esta corriendo por el puerto ${port}`)
})
