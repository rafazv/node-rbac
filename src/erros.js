class InvalidArgumentError extends Error {
  constructor (mensagem) {
    super(mensagem)
    this.name = 'InvalidArgumentError'
  }
}

class InternalServerError extends Error {
  constructor (mensagem) {
    super(mensagem)
    this.name = 'InternalServerError'
  }
}

class NaoEncontrado extends Error {
  constructor (entity) {
    const message = `Não foi possível encontrar ${entity}`
    super(message)
    this.name = 'NaoEncontrado'
  }
}

class NaoAutorizado extends Error {
  constructor () {
    const message = 'Não foi possível acessar esse recurso'
    super(message)
    this.name = 'NaoAutorizado'
  }
}

module.exports = { InvalidArgumentError, InternalServerError, NaoEncontrado, NaoAutorizado }
