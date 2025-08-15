import Cl_Clientes from "./Cl_Clientes";

export default class Cl_Banco {
    private _cnCreditosAprobados: number = 0;
    private _acMontoCreditosAprobados: number = 0;

    constructor() { }

    procesarCliente(cliente: Cl_Clientes) {
        if (cliente.aprobados == "si") {
            //Contador de creditos aprobados
            this._cnCreditosAprobados ++;
            // Acumulador de creditos aprobados
            this._acMontoCreditosAprobados +=  cliente.credito;
        }
    }

    totalCreditosAprobados(): number {
        return this._cnCreditosAprobados;
    }

    montoTotalCreditosAprobados(): number {
        return this._acMontoCreditosAprobados;
    }
}