const express = require('express')
const cors = require('cors')
const connect=require("./db/connect")
const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")
const cartRouter=require("./routes/cartRouter")
const favouriteRouter=require("./routes/favouriteRouter")
require('dotenv').config()

const app = express()

const PORT=process.env.PORT

app.use(express.json())
app.use(cors())
app.use(usersRouter);
app.use(productsRouter)
app.use(cartRouter)
app.use(favouriteRouter)

connect()

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
