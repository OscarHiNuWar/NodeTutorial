const {response, request} = require('express');

const usuariosGet = (req = request, res = response)=>{
    const query = req.query;

    res.json({
        msg: 'get API - Controlador'
    });
};

const usuariosPost = (req, res = response)=>{
    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response)=>{
    const { id } = req.params;
    res.json({
        id
    });
}

const usuariosDelete = (req, res = response)=>{
    res.json({
        msg: 'delete API - Controlador'
    });
};

const usuariosPatch = (req, res = response)=>{
    res.json({
        msg: 'patch API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch, 
    usuariosPut
}