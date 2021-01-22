class Conversor {
    converter(dados) {
        if(this.camposPublicos.indexOf('*') === -1) dados = this.filtrar(dados)

        if(this.contentType === 'json') return this.json(dados)
    }

    json(dados) {
        return JSON.stringify(dados)
    }

    filtrar(dados) {
        if(Array.isArray(dados)) {
            dados = dados.map(post => this.filtrarObj(post))
        } else {
            dados = this.filtrarObj(dados)
        }
        return dados
    }

    filtrarObj(obj) {
        const objFiltrado = {}

        this.camposPublicos.forEach(campo => {
            if(Reflect.has(obj, campo)) objFiltrado[campo] = obj[campo]
        })
        return  objFiltrado
    }
}

class ConversorPost extends Conversor {
    constructor(contentType, camposExtras = []) {
        super()
        this.contentType = contentType
        this.camposPublicos = ['titulo', 'conteudo'].concat(camposExtras)
    }
}

class ConversorUsuario extends Conversor {
    constructor(contentType, camposExtras = []) {
        super()
        this.contentType = contentType
        this.camposPublicos = ['nome'].concat(camposExtras)
    }
}

module.exports = {ConversorPost, ConversorUsuario}