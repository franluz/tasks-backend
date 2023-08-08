const bodyParser = require('body-parser')
const cors = require('cors') //permitir acessar via aplicação
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}