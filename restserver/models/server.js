const express = require("express");
const cors = require("cors");

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRuta = '/api/usuarios';
        
        //Middlewares
        this.middleWares();

        //Rutas
        this.routes();
    }

    middleWares(){
        //CORS
        this.app.use(cors());
        //Lectura y Parseo
        this.app.use(express.json());
        //Directorio
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosRuta, require('../routes/user'));
    }
    
    listen(){
        this.app.listen(this.port);
    }
}

module.exports=Server;