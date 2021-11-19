//Simulador Tabla Amortización simple 
//
var saldoCapital;
var interes;
var amortizacion;
function calcularInteres(saldoCapital, tasa) {
    return saldoCapital * tasa;
}
;
function calcularAmortizacion(valorCuota, interes) {
    return valorCuota - (interes / 100);
}
var objeto = {
    nombre: "Jorge Posada",
    capital: 10000000,
    plazo: 24,
    tasa: 1.0,
    valorCuota: 470734.44
};
console.log("TABLA DE AMORTIZACION:");
console.log("Cliente: " + objeto.nombre);
console.log("valor prestamo: " + objeto.capital);
console.log("Plato : " + objeto.plazo);
console.log(" #CUOTA -  SALDO CAPITAL -  AMORTIZACION -   INTERES  - V/CUOTA ");
saldoCapital = objeto.capital;
for (var i = 1; i <= objeto.plazo; i++) {
    interes = calcularInteres(saldoCapital, objeto.tasa);
    amortizacion = calcularAmortizacion(objeto.valorCuota, interes);
    console.log(i + " - " + saldoCapital + " - " + amortizacion + " - " + interes + " - " + objeto.valorCuota);
    saldoCapital = saldoCapital - amortizacion;
}
