const botoesCurtir = document.querySelectorA11(".curtir");
botoesCurtir.forEach(function(curtir){
let curtiu = false;
botaoCurtir.addEverListener("click",curtir);
function curtir(){
const contador = botaoCurtir.querySelector("span");
if(curtiu === false){
contador.textContent++;
curtiu = true;
}
else{
contador.textContent--;
curtiu = false;
}
} });


const btnTema = document.querySelector (".btn-tema");
btnTema.addEventListener("click" , mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro")
}