const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

// variables de entorno necesarias para conectarse con la base de datos de mongo
const { USER_MONGO, PASSWORD_MONGO, DATABASE_MONGO } = process.env

const url = `${USER_MONGO}:${PASSWORD_MONGO} /${DATABASE_MONGO}`

// crea la conexion con mongoAtlas, si es exitoso lanza por consola un mensaje satisfactorio
function connectionMongo() {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log('mongodb esta conectado'))
    .catch((err) =>
      console.error(`error en conexión a la base de datos: => ${err}`)
    )
}

module.exports = connectionMongo
