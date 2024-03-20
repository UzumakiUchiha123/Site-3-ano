const botoes = document.querySelectorAll(".botao");
console.log(botões);
for (let i=0;i <botoes.length;i++) {
    botoes[i].onclick=function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo"); }
      botoes[i].classList.add("ativo");  }
}
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {
     botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoe[j].classList.remove("ativo");
            textos[j].classList.remove("aivo"); }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo"); }}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo
contadores[0].textContent = "Contagem regresiva";
