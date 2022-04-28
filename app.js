const express = require("express")
const app = express()

app.use(express.static("public"))


// cuando haga una peticion a la / entonces se llame mi router
// el router va a identificar si llaman a / o si llaman a /about


app.listen(3000, () => {
console.log ("servidor funcionando")
})


const rutasMain = require ("./routers/main")
app.use("/", rutasMain)

