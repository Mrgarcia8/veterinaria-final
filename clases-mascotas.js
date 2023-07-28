class Mascota {
    constructor(nombreMascota, nombreDuenio, cedulaDuenio, edadMascota, telefonoDuenio, especialidad, doctor){
        this.nombreMascota=nombreMascota
        this.nombreDuenio=nombreDuenio
        this.cedulaDuenio=cedulaDuenio
        this.edadMascota=edadMascota
        this.telefonoDuenio=telefonoDuenio
        this.especialidad=especialidad
        this.doctor=doctor
    }
}

const clinton=new Mascota("clinton", "sonia", 3244546, 3, 3125467834, "medicina general", "Diana")
const lulu=new Mascota("lulu", "Laura", 456577, 5, 3125465678, "odontolgia", "Carlos")

const tablaMascotas = document.getElementById("tabla-mascotas");
const cuerpoTabla = document.getElementsByTagName("tbody")[0]

function agregarFila(mascotas){
    const fila = cuerpoTabla.insertRow
    const celdaNombreMascota=fila.insertCell()
    celdaNombreMascota.textcontent=mascotas.nombreMascota
    const celdaNombreDuenio=fila.insertCell()
    celdaNombreDuenio.textcontent=mascotas.nombreDuenio
    const celdaDueniocedula=fila.insertCell()
    celdaDueniocedula.textcontent=mascotas.cedulaDuenio
    const celdaedadMascota=fila.insertCell()
    celdaedadMascota.textcontent=mascotas.edadMascota
    const celdatelefonoDuenio=fila.insertCell()
    celdatelefonoDuenio.textcontent=mascotas.telefonoDuenio
    const celdaespecialidad=fila.insertCell()
    celdaespecialidad.textcontent=mascotas.especialidad
    const celdadoctor=fila.insertCell()
    celdadoctor.textcontent=mascotas.doctor



agregarFila(clinton)
agregarFila(lulu)