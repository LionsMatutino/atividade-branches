console.log("Você tem 5 tentativas para acertar um número aleatório entre 100 e 200 \n");

var aleatorio = Math.floor(Math.random() * 101 + 100); //gera números aleatórios de 1 a 10
let num_entrada = "";
let tentativas = 5;
let numero_tentativas_atual = 0;

//console.log(aleatorio) 

process.stdin.on("data", function (data) {
  num_entrada = data.toString().trim();
  
  if (num_entrada == aleatorio) {
    console.log("Parabéns!!! Você acertou!!! ");
    process.exit();

  } else {
    numero_tentativas_atual++;
    
    if (numero_tentativas_atual == tentativas) {
      console.log(
        "Suas tentativas acabaram. O número aleatório era: " + aleatorio + "Digite um número para tentar novamente" );
        aleatorio = Math.floor(Math.random() * 10 + 1);
        numero_tentativas_atual = 0;

    } else {
      console.log( "Errou! Você tem mais " + (tentativas - numero_tentativas_atual) +" tentativas: " );
      if (aleatorio > 5) {
        console.log("Dica: Esta acima de 5: ");
      } else {
        console.log("Esta abaixo de 5: ");
      }
    }
  }
});