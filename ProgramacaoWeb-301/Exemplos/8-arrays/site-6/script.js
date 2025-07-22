var itens = [];
    
    const adicionar = document.getElementById("btnAdicionar");
    
    adicionar.addEventListener("click", function() {
      // Adiciona um novo item ao array
      itens.push("Item " + (itens.length + 1));

      // Cria elemento <li>
      var li = document.createElement("li");
      li.textContent = itens[itens.length - 1];

      // Adiciona <li> na lista
      document.getElementById("minhaLista").appendChild(li);
    });