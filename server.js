const express = require("express")
const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const app = express()
const SERVER_PORT = process.env.PORT || 3030;
var cors = require("cors")
require("dotenv").config()

app.use(express.json())

app.use(cors())
// Connecting the db using mongoose with the backend
mongoose.connect("mongodb+srv://sanchitsharmanew:mongodbuserpassword@cluster0.geq4lfd.mongodb.net/?retryWrites=true&w=majority", {

useNewUrlParser:true,
useUnifiedTopology:true
})

app.route("/hello")
    .get((req, res) => {
    res.send("Hello! Sanchit Sharma this side. Checking done!")
})


// using employeeAPI for the app
app.use("/api/", employeeRoutes)

// userRouter for the app
const userRoutes = require("./routes/users")

// userAPI used for the logins
app.use("/api/", userRoutes)

// listening the server at port 3030
app.listen(process.env.PORT || 3030, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});




