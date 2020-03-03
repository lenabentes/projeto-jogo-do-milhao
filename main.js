//Mostrar uma tela de boas-vindas na qual se peça, através de prompt, o nome para começar a jogar.

var name = prompt("Qual seu nome?");
 console.log(name)

/*
Mostrar uma tela na qual o usuário pode escolher se quer jogar ou não. 
Caso ele não deseje jogar, o fluxo deve ser encerrado. 
Caso ele queira jogar, seguirá para a próxima etapa, descrita no item 3
*/


var game = prompt("Coloque o número correspondente a sua resposta.\nVocê quer iniciar o jogo? \n1. Sim \n2. Não")

 if (game == 1) {
    document.write(alert( "Olá, " +  name))
    var firstQuestion = prompt("1. Qual é a capital do estado do Pará? \na) Manaus \nb) Belém \nc) Rio Branco")
    var secondQuestion = prompt("2. Quem foi o presidente dos Estados Unidos no ano 2019? \na)Angelina Jolie \nb)Barack Obama \nc) Donald Trump")
    var thirdQuestion = prompt("3. Qual é o animal que representa o signo de touro? \na) Hipopótamo \nb) Cavalo \nc) Touro")
 }
 else {
     document.write("Tchau")
 }

 
// Primeira pergunta
 if (firstQuestion == "b") {
     document.write("Resposta correta")
}
else {
    document.write("Resposta errada")
}

 // Segunda pergunta
 if (secondQuestion == "c") {
    document.write("Resposta correta")
}
else {
   document.write("Resposta errada")
}

 // Terceira pergunta
 if (thirdQuestion == "c") {
    document.write("Resposta correta")
}
else {
   document.write("Resposta errada")
}