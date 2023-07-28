class Medico {
    constructor(nombreMedico, apellidoMedico, cedulaMedico, especialidad, consultorio,correoContacto , pacientes){
        this.nombreMedico=nombreMedico
        this.apellidoMedico=apellidoMedico
        this.cedulaMedico=cedulaMedico
        this.especialidad=especialidad
        this.consultorio=consultorio
        this.correoContacto=correoContacto
        this.pacientes=pacientes
    }
}

const David=new Medico("David", "Castro", 3478653,"medico general", 102, "david@medico.com", "Luna")
const Angie=new Mascota("Angie", "Parra", 456577, , "dermatologia", 103, "angie@medico.com", "Lulu")
const cristian=new Mascota("Cristian", "Triana", 456577, , "odontolgia", 104, "cristian@medico.com", "Isis")


const tablaMascotas = document.getElementById("tabla-medicos");
const cuerpoTabla = document.getElementsByTagName("tbody")[0]

function agregarFila(medicos){
    const fila = cuerpoTabla.insertRow
    const celdanombreMedico=fila.insertCell()
    celdanombreMedico.textcontent=medicos.nombreMedico
    const celdaApellidoMedico=fila.insertCell()
    celdaApellidoMedico.textcontent=medicos.apellidoMedico
    const celdacedulaMedico=fila.insertCell()
    celdacedulaMedico.textcontent=medicos.cedulaMedico
    const celdaespecialidad=fila.insertCell()
    celdaespecialidad.textcontent=medicos.especialidad
    const celdaconsultorio=fila.insertCell()
    celdaconsultorio.textcontent=medicos.consultorio
    const celdacorreoContacto=fila.insertCell()
    celdacorreoContacto.textcontent=medicos.correoContacto
    const celdapacientes=fila.insertCell()
    celdapacientes.textcontent=medicos.pacientes



agregarFila(David)
agregarFila(Angie)
agregarFila(cristian)}
