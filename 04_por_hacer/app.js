const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        console.log(`Comando: ${comando}, Descripcion: ${argv.descripcion}`);
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.lista();
        for (let tarea of listado) {
            console.log('!===== Por hacer =====!'.green);
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            console.log('!=====================!'.green);
        }
        
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`La actividad '${argv.descripcion}' se ha actualizado con exito.`);
        break;


    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:

        break;
}