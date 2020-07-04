const express = require("express")
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require("./routes/index"))

app.use(express.static(path.join(__dirname,"public")))
app.set("port", process.env.port || 3000)
server.listen(app.get("port"),()=>{
	console.log("listen 3000")
})