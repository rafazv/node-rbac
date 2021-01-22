const autorizacao = require('./autorizacao')

module.exports = (entity, action) => (req, res, next) => {
    if(req.estaAutenticado === true) {
        return autorizacao(entity, action)(req, res, next)
    }

    next()
}