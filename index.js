/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(12);
console.log(13);
console.log(14);
console.log(15);
console.log(16);
console.log(17);
console.log(18);
console.log(19);
console.log(20);
console.log(21);
console.log(22);
console.log(23);
console.log(24);
console.log(25);
console.log(26);
console.log(27);
console.log(28);
console.log(29);
console.log(30);
console.log(31);
console.log(32);
console.log(33);
console.log(34);
console.log(35);
console.log(36);
console.log(37);
console.log(38);
console.log(39);
console.log(40);
console.log(41);
console.log(42);
console.log(43);
console.log(44);
console.log(45);
console.log(46);
console.log(47);
console.log(48);
console.log(49);
console.log(50);

while (condicao) {
    //ENQUANTO a condicao for verdadeira
    // as linhas de código dentro deste bloco
    // serão executadas

    //assim que a condicao ficar f alse
    // o LOOP/Laço vai parar
}

let i = 0

while (i<10) {
    console.log(i)

    i++
}


let estomago = 0;

while (estomago < 100) {
    console.log("Quero comer mais coxinhas");
    estomago = estomago + 10;
}



let numeros = Number(prompt("Digite vários números"));

while (numeros > 0) {
    console.log("Aqui os números")                          // Incompleto
}


for(let i = 0;      i<10;       i++) {
    console.log(i)
}



let numeros = [1,2,3,4,5,6,7,8]
for (let i = 0; i < numeros.length; i++) {
    const elemento = numeros [i];
    console.log(elemento);
}


function econtrarMaiorNumero(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return "O maior número é "+ maior;
}
const numeros = [11, 15, 18, 14, 90, 13];
const resultado = encontrarMaiorNumero(numeros);
console.log(resultado);


const numeros = [14,67,89,15,23]
for (let numero of numeros) {
    console.log(numero)
}

Array.array.forEach(elemento => {
    console.log(elemento);

});

function palavras (arr) {
    let array = ["Olá", "amigo", "como", "você", "está?"]
    console.log(array[0] + " " + array[1] + " " + array[2] + " " + array[3] + " " + array[4])
}
palavras()

let palavras = ["a", "b", "c", "d", "e"];
function retornaFraseCompleta(arrayDePalavras){
    let frase = " ";
    for (let i = 0;     i < arrayDePalavras.length;     i++) {
        const elemento = arrayDePalavras[i];
        frase = frase + " " + elemento;
    }return frase;
}   
console.log(retornaFraseCompleta(palavras));

//----------------------------------------------------- Exercícios Laço

//1-ele está somando +1 sempre que o valor for menor que 5
//2- A - os números maiores que 18, B- Sim
//3- Ele criará 4 asteriscos

//----------------------------------------------------- Escrita de Código

//1 -
let bichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
if (bichos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    let i = 0
    arr = []
    while(i < bichos){
        let animais = prompt("Diga o nome dos bichinhos")
        arr.push(animais)
        console.log(animais);
        i++
    }
}
*/
//2 - 
// A
let arrayOriginal = [20, 35, 60, 80, 110, 140, 45, 70, 95, 25]
for (let valor of arrayOriginal){
    console.log(valor);
}

// B
for (let valor of arrayOriginal){
    console.log(valor / 10);
}

// C
const numerosPares = [];

for(let i = 0;      i < arrayOriginal.length;       i++){
    const numero = arrayOriginal[i]
    if(numero % 2 === 0){
        numerosPares.push(numero);
    }
}
console.log("numeros pares", numerosPares);

// D
const novoArray = [];

for(let i = 0;     i < arrayOriginal.length;      i++) {
    const numeroo = arrayOriginal[i]
    const mensagem = `o elemento do index ${i} é : ${numeroo}`;
    novoArray.push(mensagem)
}
console.log(novoArray);

// E

let maior = arrayOriginal[9]
let menor = arrayOriginal[0]

for(let i = 1;      i < arrayOriginal.length; i++){
    const numero = arrayOriginal[1]

    if(numero > maior){
       maior = numero 
    }

    if(numero < menor){
        menor = numero
    }  
}

console.log(maior)
console.log(menor)
