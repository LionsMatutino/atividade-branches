const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplos3 = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 3 == 0){
        multiplos3.push(numeros[i]);
        console.log(multiplos3);
    }
};