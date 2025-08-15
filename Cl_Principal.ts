import Cl_Banco from "./Cl_Banco.js";
import Cl_Clientes from "./Cl_Clientes.js";

const cliente1: Cl_Clientes = new Cl_Clientes("Jorge", 5000 ,"Cuenta 1", "",  12, "si");
const cliente2: Cl_Clientes = new Cl_Clientes("Maria", 10000,"Cuenta 2", "",  24, "no");
const cliente3: Cl_Clientes = new Cl_Clientes("Pedro", 20000,"Cuenta 3", "",  36, "si");
const cliente4: Cl_Clientes = new Cl_Clientes("Luis", 30000,"Cuenta 4", "",  48, "no");

const banco: Cl_Banco = new Cl_Banco();

banco.procesarCliente(cliente1);
banco.procesarCliente(cliente2);
banco.procesarCliente(cliente3);
banco.procesarCliente(cliente4);

console.log(banco.totalCreditosAprobados());
console.log(banco.montoTotalCreditosAprobados());

let salida = document.getElementById("salida");
if (salida == null) {
    console.log("No se encontro el div");
} else  {
    salida.innerHTML = `<p>Numero de creditos aprobados: ${banco.totalCreditosAprobados()}</p>`;
    salida.innerHTML += `<p>Monto total de creditos aprobados: ${banco.montoTotalCreditosAprobados()}</p>`;
}

