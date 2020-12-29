const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()
const PORT = process.env.PORT | 5000

app.engine('handlebars',exphbs({defaultLayout:"main"}))
app.set('view engine','handlebars')

app.use("/static",express.static(path.resolve(__dirname,"static")))


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))