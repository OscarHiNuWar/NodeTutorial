const fileWrite = require('fs');

let listadoPorHacer = [];

const guardarDb = () =>{
    let data = JSON.stringify(listadoPorHacer);

    fileWrite.writeFile('./db/data.json', data, (err)=>{
        if(err) reject(err)
    });
}

const cargarDB = () =>{

    try{
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }
    
}

const crear = (descripcion)=> {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const lista = ()=>{
    cargarDB();
    let listaDeCosas = [];
    listadoPorHacer.forEach(element => {
        listaDeCosas.push(element);
    });

    return listaDeCosas;
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0){
        delete listadoPorHacer.splice(index,index);
        guardarDb();
        return true;
    }else {
        return false;
    }
}

module.exports ={
    crear,
    lista,
    actualizar,
    borrar
}