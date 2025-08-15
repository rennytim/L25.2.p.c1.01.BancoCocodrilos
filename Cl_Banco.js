export default class Cl_Banco {
    constructor() {
        this._cnCreditosAprobados = 0;
        this._acMontoCreditosAprobados = 0;
    }
    procesarCliente(cliente) {
        if (cliente.aprobados == "si") {
            //Contador de creditos aprobados
            this._cnCreditosAprobados++;
            // Acumulador de creditos aprobados
            this._acMontoCreditosAprobados += cliente.credito;
        }
    }
    totalCreditosAprobados() {
        return this._cnCreditosAprobados;
    }
    montoTotalCreditosAprobados() {
        return this._acMontoCreditosAprobados;
    }
}
