export default class Cl_Clientes {
    constructor(nombre, credito, cuenta, tipoCliente, plazo, aprobados) {
        this._nombre = "";
        this._credito = 0;
        this._cuenta = "";
        this._tipoCliente = "";
        this._plazo = 0;
        this._aprobados = "";
        this._nombre = nombre;
        this._credito = credito;
        this._cuenta = cuenta;
        this._tipoCliente = tipoCliente;
        this._plazo = plazo;
        this._aprobados = aprobados;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }
    set credito(value) {
        this._credito = +value;
    }
    get credito() {
        return this._credito;
    }
    set cuenta(value) {
        this._cuenta = value;
    }
    get cuenta() {
        return this._cuenta;
    }
    set tipoCliente(value) {
        this._tipoCliente = value;
    }
    get tipoCliente() {
        return this._tipoCliente;
    }
    set plazo(value) {
        this._plazo = +value;
    }
    get plazo() {
        return this._plazo;
    }
    set aprobados(value) {
        this._aprobados = value;
    }
    get aprobados() {
        return this._aprobados;
    }
}
