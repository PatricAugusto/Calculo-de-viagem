// Preço do litro do combustível
let precoCombustivel = 4.56;

// Consumo médio do veículo
let consumoMedio = 0.4;

// Distância total da viagem
let distanciaViagem = 250;

// Cálculo da quantidade de combustível consumida
let quantidadeCombustivel = distanciaViagem * consumoMedio;

// Cálculo do gasto total com combustível
let gastosViagem = quantidadeCombustivel * precoCombustivel;

// Exibindo o resultado
console.log("Gasto total com combustível na viagem: R$", gastosViagem.toFixed(2));