let valor = (prompt('Digite o valor:'));
let valorTotal = valor; 
document.write(`Valor total de saque: GC$${valor} <br>` )

let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

// Explicação:
// valor = 150
// notas50 = (150/50)
// notas50 = 3
// valor = valor - (050)
// valor = 0

if (valor >= 50) {
  notas50 = Math.floor(valor / 50);
  valor = valor - (notas50 * 50);
}

if (valor >= 10) {
  notas10 = Math.floor(valor / 10);
  valor = valor - (notas10 * 10);
}

if (valor >= 5) {
  notas5 = Math.floor(valor / 5);
  valor = valor - (notas5 * 5);
}

if (valor >= 1) {
  notas1 = valor;
}

document.write(`Saque de ${notas50} notas de GC$50,00 <br>`)
document.write(`Saque de ${notas10} notas de GC$10,00 <br>`)
document.write(`Saque de ${notas5} notas de GC$5,00 <br>`)
document.write(`Saque de ${valor} notas de GC$1,00 <br>`)
