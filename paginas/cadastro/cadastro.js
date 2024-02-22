//cria um event listener que escuta mudanças no input
document.getElementById("termo").addEventListener("input", function(event){

    //busca conteúdo do input
      var conteudo = document.getElementById("termo").checked;
  
      //valida conteudo do input 
      if (conteudo !== false) {
        //habilita o botão
        document.getElementById("btn").disabled = false;
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.getElementById("btn").disabled = true;
      }
  });