class personaP { 
    constructor(_id, NOMBRE, APELLIDO, EMAIL, GENERO, FECHAN, TIPOUSUARIO, PASSWORD, FOTO) {
        this._id = _id;
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.EMAIL = EMAIL;
        this.GENERO = GENERO;
        this.FECHAN = FECHAN;
        this.TIPOUSUARIO = TIPOUSUARIO;
        this.PASSWORD = PASSWORD;
        this.FOTO = FOTO;
    }

    Guardar() {
        const objetoaenviar = {
            id: this.id,
            NOMBRE : this.NOMBRE,
            APELLIDO : this.APELLIDO,
            EMAIL : this.EMAIL,
            GENERO : this.GENERO,
            FECHAN : this.FECHAN,
            TIPOUSUARIO : this.TIPOUSUARIO,
            PASSWORD : this.PASSWORD,
            FOTO : this.FOTO
        };

        console.log(objetoaenviar)

        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("PUT", "http://localhost:8080/api/agregarPersona");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
                reject(err.message);
            }
        });
    }


    Login() {
        const objetoaenviar = {
            id: this.id,
            NOMBRE : this.NOMBRE,
            APELLIDO : this.APELLIDO,
            EMAIL : this.EMAIL,
            GENERO : this.GENERO,
            FECHAN : this.FECHAN,
            TIPOUSUARIO : this.TIPOUSUARIO,
            PASSWORD : this.PASSWORD,
            FOTO : this.FOTO
        };

        console.log(objetoaenviar)

        return new Promise((resolve, reject) => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "http://localhost:8080/api/Login");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr);
                    }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
                reject(err.message);
            }
        });
    }

    Modificar(){
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "http://localhost:8080/api/modificarPersona");
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
                xhr.open("DELETE", "http://localhost:8080/api/eliminardelabaseP");
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
                xhr.open("GET", "http://localhost:8080/api/listarP");
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

obtenerUsuario() {
  return new Promise(function(resolve, reject) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:8080/api/usuario");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr);
        }
      };
      xhr.send();
    } catch (err) {
      reject(err.message);
    }
  });
}

}



