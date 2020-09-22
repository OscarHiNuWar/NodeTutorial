const opciones = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar.', opciones)
    .command('crear', 'Crear un archivo con la tabla multiplicada.', opciones)
    .help()
    .argv;


    module.exports = {
        argv
    }