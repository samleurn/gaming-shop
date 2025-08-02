import express from "express"

import home from "./routes/home.js"
import login from "./routes/login.js"
import shop from "./routes/shop.js"
import cart from "./routes/cart.js"

const app = express()

app.use('/', home)
app.use('/login', login)
app.use('/shop', shop)
app.use('/cart', cart)

export default app