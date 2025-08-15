export default class Cl_Clientes  {
    private _nombre: string = "";
    private _credito: number = 0;
    private _cuenta: string = "";
    private _tipoCliente: string = "";
    private _plazo: number = 0;
    private _aprobados: string = "";

    constructor(nombre: string, credito: number, cuenta: string, tipoCliente: string, plazo: number, aprobados: string) {
        this._nombre = nombre;
        this._credito = credito;
        this._cuenta = cuenta;
        this._tipoCliente = tipoCliente;
        this._plazo = plazo;
        this._aprobados = aprobados;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set credito(value: number) {
        this._credito = +value;
    }

    get credito(): number {
        return this._credito;
    }

    set cuenta(value: string) {
        this._cuenta = value;
    }

    get cuenta(): string {
        return this._cuenta;
    }

    set tipoCliente(value: string) {
        this._tipoCliente = value;
    }

    get tipoCliente(): string {
        return this._tipoCliente;
    }

    set plazo(value: number) {
        this._plazo = +value;
    }

    get plazo(): number {
        return this._plazo;
    }

    set aprobados(value: string) {
        this._aprobados = value;
    }

    get aprobados(): string {
        return this._aprobados;
    }

    
}

