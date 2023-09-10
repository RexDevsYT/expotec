
class publicacionesdb{ 
    constructor(_id,
        NOMBRE,
        INTERES,
        SABE,
        NUMERO,
        FOTO,
        FECHAACTUAL,
        userId

    ){
    this.id = _id;
    this.NOMBRE=NOMBRE;
    this.INTERES=INTERES;
    this.SABE=SABE;
    this.NUMERO=NUMERO;
    this.FOTO=FOTO;
    this.FECHAACTUAL=FECHAACTUAL;
    this.userId=userId;
    }

    Guardar(){  //Llama la api para guardar los datos
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("PUT", "http://localhost:8080/api/agregarP");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Modificar(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://localhost:8080/api/modificarP");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Eliminar(){ // llama la api para eliminar
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("DELETE", "http://localhost:8080/api/eliminardelabase");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Seleccionarporid(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://localhost:8080/api/peliculaporid");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
            }
        });
    }

    Listar(){ //funcion que llama la api del routes, con el objetivo de mostrar los datos de la base de datos
        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "http://localhost:8080/api/listar");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send();
            }
            catch(err){
                reject(err.message);
            }
        });
    }


    ListarPorID(){ //funcion que llama la api del routes, con el objetivo de mostrar los datos de la base de datos
        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "http://localhost:8080/api/ListarPorID");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function(){
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
                xhr.send();
            }
            catch(err){
                reject(err.message);
            }
        });
    }
    
}



