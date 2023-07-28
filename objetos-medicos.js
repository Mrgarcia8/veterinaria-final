const medicos = [
    {
    nombre: "David",
    apellido: "castro",
    NumeroCedula: 3478653,
    especialidad:"medico general",
    consultorio: 102,
    correo: "david@medico.com",
    pacientes: "luna"

},
{
    nombre: "Angie",
    apellido: "Parra",
    NumeroCedula: 56345786,
    especialidad:"dermatologia",
    consultorio: 103,
    correo: "angie@medico.com",
    pacientes: "lulu"

},
{
    nombre: "cristian",
    apellido: "Triana",
    NumeroCedula: 798643,
    especialidad:"odontologia",
    consultorio: 104,
    correo: "cristian@medico.com",
    pacientes: "isis"

}
]

const tablamedicos = document.getElementById("tabla-medicos")
const CuerpoTabla = document.getElementsByTagName("tbody")[0]

for(let i = 0; i<medicos.length; i++){
let medico = medico[i]

//crear una nueva fila y se le añaden las celdas a la fila
let fila = CuerpoTabla.insertRow()
let celdaNombreMedico = fila.insertCell()
let celdaApellidoMedico = fila.insertCell()
let celdaNumeroCedula = fila.insertCell()
let celdaEspecialidad = fila.insertCell()
let celdaConsultorio = fila.insertCell()
let celdaCorreo = fila.insertCell()
let celdaPacientes = fila.insertCell()


celdaNombreMedico.textContent= medico.nombre;
celdaApellidoMedico.textContent= medico.apellido;
celdaNumeroCedula.textContent= medico.NumeroCedula;
celdaEspecialidad.textContent= medico.especialidad;
celdaConsultorio.textContent= medico.consultorio;
celdaCorreo.textContent= medico.correo;
celda.pacientestextContent= medico.pacientes;

}