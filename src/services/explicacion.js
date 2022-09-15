// receta para consumir APIS

//1. si yo quiero consumir un API debo saber para donde ir y a que servicio
//debo configurar la URI

const URI = "https://api.spotify.com/v1/artists/0dalJaAT80lKfkZsC86lnW/top-tracks?market=US"

//2.configuro datos especiales o de control en el servicio

const TOKEN = "Bearer BQA0LCtAr8jkhxq9dmCMZhbvLD81ZLeuGo2bnnvEg0cqQcAjSy8976bIHusqtkXWiNdd_GV1Kn3kuZ0aNYM1iwlAtwhrbrIIxNloV8SonGtHFGHLAEZRKVKPvHJpXpDOL1PoVLO-CnOjOXSyI8uSjHizy0YF8nmPltWToH4wP3XpoQ"

//3. configuro la peticion
//nota: solo post y put configuran body
//para js la peticion es un objeto

const PETICION = {

    method:"GET",
    headers:{Authorization:"Bearer BQA0LCtAr8jkhxq9dmCMZhbvLD81ZLeuGo2bnnvEg0cqQcAjSy8976bIHusqtkXWiNdd_GV1Kn3kuZ0aNYM1iwlAtwhrbrIIxNloV8SonGtHFGHLAEZRKVKPvHJpXpDOL1PoVLO-CnOjOXSyI8uSjHizy0YF8nmPltWToH4wP3XpoQ"}
}

//4. consuma el API

fetch(URI, PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){

    console.log(respuesta)
    console.log(respuesta.tracks)

    let contenedor = document.getElementById("container")

    respuesta.tracks.forEach(function(track){
        console.log(track)
        console.log(track.name)
        console.log(track.preview_url)
        console.log(track.album.images[0].url)

        let fila = document.createElement("div")
        fila.classList.add("row")

        let col = document.createElement("div")
        col.classList.add("col-12", "col-md-4")

        let imagen = document.createElement("img")
        imagen.classList.add("img-fluid", "w-100")
        imagen.src=track.album.images[0].url

        contenedor.appendChild(fila)
        fila.appendChild(col)
        col.appendChild(imagen)


    })
})
.catch(function(respuestaError){
    console.log(respuestaError)
})

