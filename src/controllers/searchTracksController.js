import{generarURI} from "../helpers/generarURI.js"
import {consultTracks} from "../services/topTracksService.js"
import {PETICION} from "../helpers/constantesGET.js"
import {drawTracks} from "./drawTracksController.js"


let search = document.getElementById("buscar")
search.addEventListener("click",function(event){
    event.preventDefault()

    //obtengo el id del artista que busca el usuario

    let idArtistSelected = document.getElementById("artista").value
    let uri = generarURI(idArtistSelected)
    //llamando al servicio asincrono desde el controlador
    consultTracks(uri,PETICION)
    .then(function(tracks){
       drawTracks(tracks)
    })
    
    



})