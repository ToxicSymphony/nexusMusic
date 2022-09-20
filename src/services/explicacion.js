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
        headers:{Authorization: TOKEN }
    }
    
    fetch(URI, PETICION)
        .then(function(respuesta){
        return respuesta.json()
    })
.then(function(respuesta){

    console.log(respuesta)
    console.log(respuesta.tracks)

    let container = document.getElementById("container")
    container.innerHTML = ""
    respuesta.tracks.forEach(function(track){
        // console.log(track)
        // console.log(track.name)
        // console.log(track.preview_url)
        // console.log(track.album.images[0].url)

        let fila2 = document.createElement("div");
        fila2.classList.add("row", "row-cols-1", "row-cols-mb-3", "g-row-5");
      
        let tarjeta = document.createElement("div");
        tarjeta.classList.add(
          "card",
          "mb-3",
          "shadow",
          "text-center",
          "fs-5",
          "h-100",
          "m-5",
          "bg-dark",
          "border-danger"
        );
      
        let contenedor = document.createElement("div")
        contenedor.classList.add("row","g-0", "p-3")
      
        let columnaImagen = document.createElement("div")
        columnaImagen.classList.add("col-md-4")
      
        let columnaTexto = document.createElement("div")
        columnaTexto.classList.add("col-md-8", "text-start", "p-3" )

        let colAudio = document.createElement("div")
        colAudio.classList.add("col-12", "col-md-4", "my-5")

        let audio = document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls", "controls")
        audio.src = track.preview_url

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid", "w-100", "h-100")
        imagen.src=track.album.images[0].url

        let nombre = document.createElement("h1")
        nombre.classList.add("text-light")
        nombre.textContent = track.name

        let popularidad = document.createElement("p")
        popularidad.classList.add("text-light")
        popularidad.textContent = track.popularity

        tarjeta.appendChild(contenedor)
        contenedor.appendChild(columnaImagen)
        contenedor.appendChild(columnaTexto)
        contenedor.appendChild(colAudio)
        columnaImagen.appendChild(imagen)
        colAudio.appendChild(audio)
        columnaTexto.appendChild(nombre)
        columnaTexto.appendChild(popularidad)
        fila2.appendChild(tarjeta)
        container.appendChild(fila2)

        
        // colAudio.appendChild(audio)
        // columnaImagen.appendChild(imagen)
        // contenedor.appendChild(columnaImagen)
        // contenedor.appendChild(columnaTexto)
        
        // // contenedor.appendChild(colAudio)
        // // tarjeta.appendChild(contenedor)
        // // fila2.appendChild(tarjeta)
        // // container.appendChild(fila2)

    })
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



