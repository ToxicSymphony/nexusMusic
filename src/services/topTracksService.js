export async function consultTracks(URI, PETICION) {
    
    let respuesta = await fetch(URI, PETICION)
    let tracks = await respuesta.json()
    return (tracks)
    
}