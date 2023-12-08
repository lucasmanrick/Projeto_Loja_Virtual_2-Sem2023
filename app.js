const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser');

const admController = require('./controller/adm.controller')
const alcoolicaController = require('./controller/alcoolica.controller')
const cadastroController = require('./controller/cadastro.controller')
const carrinhoController = require('./controller/carrinho.controller')
const homeController = require('./controller/home.controller')
const naoAlcoolicasController = require('./controller/naoAlcoolicas.controller')

const app = express()
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/views`))

app.get('/',homeController.home)
app.get('/adm',admController.adm)
app.get('/alcoolica',alcoolicaController.alcoolica)
app.get('/cadastro', cadastroController.cadastro)
app.post ('/clientRegister', cadastroController.clientRegister)
app.get('/carrinho', carrinhoController.carrinho)
app.get('/nao-alcoolicas', naoAlcoolicasController.naoAlcoolicas)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}👍`);
})