class Alumno {
    constructor(username = "Sin nombre", dni = "Sin DNI", edad = 0) {
        this.username = username;
        this.dni = dni;
        this.edad = edad;
    }
    toString() {
        return `Alumno: ${this.username}, DNI: ${this.dni}, Edad: ${this.edad}`;
    }
}

export default Alumno;