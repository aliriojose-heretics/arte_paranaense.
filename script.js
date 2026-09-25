const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botaoCurtir) {
   let curtiu = false;

   // Corrigido: addEventListener (o "v" deve ser minúsculo)
   botaoCurtir.addEventListener("click", curtir);

   function curtir() {
      const contador = botaoCurtir.querySelector("span");
      let valorAtual = parseInt(contador.textContent) || 0;

      if (!curtiu) {
         contador.textContent = valorAtual + 1;
         curtiu = true;
         botaoCurtir.classList.add("curtido"); // Opcional: para estilizar no CSS se quiser
      } else {
         contador.textContent = valorAtual - 1;
         curtiu = false;
         botaoCurtir.classList.remove("curtido");
      }
   }
});
