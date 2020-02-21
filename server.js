const express = require('express');
const server = express();


//configurar servidor para apresentar arquivos estáticos
server.use(express.static('public'))


//habilitar body do formulario
server.use(express.urlencoded({extended: true}));

//configurando a temolate engine
const nunjucks = require('nunjucks')
nunjucks.configure("./", {
  express: server,
  noChache: true
})



//Lista de doadores
const donors = [
  {
    name: "Diego",
    blood: "AB"
  },
  {
    name: "Fabio",
    blood: "O+"
  },
  {
    name: "Sophia",
    blood: "O+"
  },
  {
    name: "Rude",
    blood: "O-"
  }
]




server.get("/",(req,res) => {
  return res.render("index.html", {donors})
});

server.post("/", function(req,res) {
  // pegar dados do formuçário.
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood

  //coloco valores dentro do array
  donors.push({
    name:  name,
    blood: blood,
  })
  return res.redirect("/")
})


server.listen(3000,(req,res) => {
  console.log("inciei o servidor.")
});
