let idades = [];

console.log("Digite os valores para calcular a média de idade..."); 

process.stdin.on("data", function (data) {
  let idade = Number(data.toString().trim());
  console.log(idade + " declarada");

  if (Number.isNaN(idade)) {
    console.log("Digite um número, não uma palavra.");
  } else {
    idades.push(idade);
    /*let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma = soma + numeros[i];
    }
    console.log("Média:" + soma / numeros.length);
  }*/
    idades.forEach((idade) => {
      console.log("Média: " + idade / idades.length);
    });
  }
  if (idade > 25) {
    console.log("a turma é idosa");
  } else {
    console.log("a turma é jovem");
  }
});