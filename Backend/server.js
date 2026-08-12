require("dotenv").config()
const app = require('./src/app')
const connectToDB = require("./src/config/database")



connectToDB()

app.listen(3003,()=>{
    console.log("server is running on port 3003")
})