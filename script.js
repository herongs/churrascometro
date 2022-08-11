// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qntdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qntdTotalCerveja = cervejaPP(duracao) * adultos + (cervejaPP(duracao)/2 * criancas);
    let qntdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);
   

    resultado.innerHTML = `<p> ${Math.ceil((qntdTotalCarne)/1000)} kg de carne</p>`;
    resultado.innerHTML += `<p> ${Math.ceil((qntdTotalCerveja)/355)} latas de cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil((qntdTotalBebida)/2000)} pet de 2 litros de refrigerante</p>`
}

function carnePP(duracao){
    let carne = 400;

    if(duracao >= 6)
       carne = 650;

    return carne;

}

function cervejaPP(duracao){
    let cerveja = 1200;

    if(duracao >= 6)
       carne = 2000;

    return cerveja;

}

function bebidaPP(duracao){
    let bebida = 1000;

    if(duracao >= 6)
       carne = 1500;

    return bebida;

}

