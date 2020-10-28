const express = require("express"); const bodyParser = require("body-parser"); const cors = require('cors'); const app = express()

app.use(cors()); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({extended: true  }))

app.get("/", (req, res) =>{ res.json ({ message: "Oi estamos cronstruindo uma Api, paciência e dedicação é necessario.                  Agora tente: /carros"})})

require("./app/routes/carros.routes.js")(app);
require("./app/routes/brand.routes.js")(app);

app.listen(3000, () => { console.log("Servidor está rodando na porta 3000.Agora tente: /carros")})
