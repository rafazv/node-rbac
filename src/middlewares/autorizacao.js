const controle = require('../controleDeAcesso')

const metodos = {
    ler: {
        todos: 'readAny',
        apenasSeu: 'readOwn'
    },
    criar: {
        todos: 'createAny',
        apenasSeu: 'createOwn',
    },
    remover: {
        todos: 'deleteAny',
        apenasSeu: 'deleteOwn'
    }
}

module.exports = (entity, action) => (req, res, next) => {
    const permissoesDoCargo = controle.can(req.user.cargo)
    const actions = metodos[action]
    const permissaoTodos = permissoesDoCargo[actions.todos](entidade)
    const permissaoApenasSeu = permissoesDoCargo[actions.apenasSeu](entidade)

    if(permissaoTodos.granted === false && permissaoApenasSeu.granted === false) {
        res.status(403)
        res.end()
        return
    }

    req.acesso = {
        todos: {
            permitido: permissaoTodos.granted,
            atributos: permissaoTodos.attributes
        },
        apenasSeu: {
            permitido: permissaoApenasSeu.granted,
            atributos: permissaoApenasSeu.attributes
        }
    }
    
    next()
}