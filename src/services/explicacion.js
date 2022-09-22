import {generarURI} from "../helpers/generarURI"; import {PETICION} from "../helpers/constantesGET"


let URI = "https://api.spotify.com/v1/artists/0dalJaAT80lKfkZsC86lnW/top-tracks?market=US"
const TOKEN = "Bearer BQADo6zIoCiRdhaH-te4Q1EKdUIKzkDATo9xqE-ntYtXGYh_qXCHx-RnWc8D-_P7INiVSe72PwHI65Zo83vsK2zQJiMlROv403kdE7Q7PsPGR7-Us6XckxMIWw93MDUtc4Lnx6w4TW83r8Y5tDHYntD7leIITbueDSrYMVfblmnIyA"

let buscar = document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    console.log("hola")
    let artista = document.getElementById("artista").value
    console.log(artista)
    generarURI()
    PETICION = {

        method:"GET",
        headers:{
            Authorization: TOKEN
         }
    }
    
    fetch(URI, PETICION)
        .then(function(respuesta){
        return respuesta.json()
    })
.then(function(respuesta){

    console.log(respuesta)
    console.log(respuesta.tracks)

   
    
})
.catch(function(respuestaError){
    console.log(respuestaError)
})
  
})

// receta para consumir APIS

//1. si yo quiero consumir un API debo saber para donde ir y a que servicio
//debo configurar la URI



//2.configuro datos especiales o de control en el servicio



//3. configuro la peticion
//nota: solo post y put configuran body
//para js la peticion es un objeto



//4. consuma el API



