  // Criamos um array vazio para armazenar os personagens cadastrados
  const personagens = [];
  
  // Capturamos os valores digitados pelo usuário nos campos de input
  const nome = document.getElementById("nome").value;
  const classe = document.getElementById("classe").value;
  const forca = document.getElementById("forca").value;
  const imagem = document.getElementById("imagem").value;


    // Criamos um novo objeto com os dados digitados
  const novoPersonagem = {
    nome: nome,
    classe: classe,
    forca: Number(forca), // converte string para número
    imagem: imagem
  };