export function drawTracks(tracks){

    let container = document.getElementById("container")
    container.innerHTML = ""

    tracks.tracks.forEach(function(track){

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
        columnaTexto.classList.add("col-md-4", "text-start", "p-3", "align-self-center" )

        let colAudio = document.createElement("div")
        colAudio.classList.add("col-12", "col-md-4", "my-5", "align-self-center")

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


    })

}