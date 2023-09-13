//criamos uma variável para pegar o id resposta
const resposta = document.getElementById('resultado')

//criamos a função que verifica se uma
//resposta é correta
function verificarResposta(resposta,prox){
    if(resposta === "a"){
        resultado.innerHTML = "Resposta correta"
        resultado.style.color ="green"
       setTimeout(function(){
        window.location.href=prox;
       },2000)
    } else {
        resultado.innerHTML = "Resposta incorreta"
        resultado.style.color ="red"
    }
}


