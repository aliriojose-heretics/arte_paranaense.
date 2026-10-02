// Seleciona todos os botões de curtir da página
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botaoCurtir) {
   let curtiu = false;

   // Adiciona o evento de clique ao botão
   botaoCurtir.addEventListener("click", curtir);

   function curtir() {
      const contador = botaoCurtir.querySelector("span");
      let valorAtual = parseInt(contador.textContent) || 0;

      // 1. Aplica a animação de pulso ao clicar
      botaoCurtir.classList.add("animar");

      // Remove a classe de animação após 300ms para permitir animar em futuros cliques
      setTimeout(() => {
         botaoCurtir.classList.remove("animar");
      }, 300);

      // 2. Lógica para alternar a contagem e a cor do botão
      if (!curtiu) {
         contador.textContent = valorAtual + 1;
         curtiu = true;
         botaoCurtir.classList.add("curtido");
      } else {
         contador.textContent = valorAtual - 1;
         curtiu = false;
         botaoCurtir.classList.remove("curtido");
      }
   }
});
