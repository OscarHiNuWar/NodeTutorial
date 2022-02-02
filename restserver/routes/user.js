const {Router} = require('express');
const { route } = require('express/lib/application');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut } = require('../controllers/users');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports=router;