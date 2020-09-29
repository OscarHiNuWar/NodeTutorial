const opciones = {
    descripcion:{
        alias: 'd',
        demand: true
    },
    completado:{
        alias: 'c',
        defaut: false
    }
}


const argv = require('yargs')
                    .command('crear', 'Crear tarea por hacer', opciones)
                    .command('actualizar', 'Actualiza tarea', opciones)
                    .command('borrar', 'Borra una tarea', opciones)
                    .help()
                    .argv;

module.exports ={
    argv
}