const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

require('./database/index');

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Importar as rotas
const thoughtRoutes = require("./routes/thougthsRoutes");
const usersRoutes = require("./routes/usersRoutes")

// Importando engine handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/"));

// Utilização de arquivos estáticos
app.use(express.static( __dirname + '/public'));

exphbs.create({
    partialsDir: path.join(__dirname, "view/partials")
});
// Utilizar os arquivos de rotas
app.use(thoughtRoutes);
app.use(usersRoutes);

app.listen(8080, console.log("Servidor está sendo executando na porta 8080"));