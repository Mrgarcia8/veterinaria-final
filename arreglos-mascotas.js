//Se crean los arreglos con la informacion de la mascota

const nombreMascotas =["Clinton","Lulu", "Simba", "Suertudo", "isis"]
const nombreDueño =["Sonia","Laura", "Carlos", "Liliana", "Carolina"]
const cedulaDueno =[1234,4567,7890,7894,1452]
const edadesmascotas =[8,12,3,5,1]
const telefonoDueño =[321, 654, 987,764,908]
const especialidades =["medicina general","Dermatologia", "Etologia","odontologia", "oncologia" ]
const Doctores =["Matheo","Diana", "Mary", "jose", "Elio"]
//Se empieza a manipular el HTML
//se identifica la tabla en la cual se guarda las mascotas  
let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]

for (let i = 0; i < nombreMascotas.length; i++) {
    //se crea una fila y se añade al cuerpo de la tabla
    let fila = cuerpoTabla.insertRow()
    //Añadir informacion de los arreglos a la fila
    let celdaNombreMascota = fila.insertCell();
    let celdanombreDueno = fila.insertCell();
    let celdacedulaDueno = fila.insertCell();
    let celdaedadesmascotas = fila.insertCell();
    let celdatelefonoDueño = fila.insertCell();
    let celdaespecialidades = fila.insertCell();
    let celdaDoctores = fila.insertCell();

    celdaNombreMascota.textContent = nombreMascotas[i]
    celdanombreDueno.textContent = nombreDueño[i]
    celdacedulaDueno.textContent = cedulaDueno[i]
    celdaedadesmascotas.textContent = edadesmascotas[i]
    celdatelefonoDueño.textContent = telefonoDueño[i]
    celdaespecialidades.textContent = especialidades[i]
    celdaDoctores.textContent = Doctores[i]
}




