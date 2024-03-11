function listarDados() {
   let resultadoHTML = "<h2>Dados Cadastrados:</h2>";
   if (dadosCadastrados.length === 0) {
       resultadoHTML += "<p>Nenhum dado cadastrado.</p>";
   } else {
       resultadoHTML += "<ul>";
       dadosCadastrados.forEach((dado, index) => {
           resultadoHTML += `<li>${index + 1}. ${dado}</li>`;
       });
       resultadoHTML += "</ul>";
   }
   document.getElementById("resultado").innerHTML = "<p>Listar Novo Dado - Implementação em falta.</p>";
}


function cadastrarNovoDado() {
   let novoDado = prompt("Digite o novo dado:");
   if (novoDado !== null && novoDado !== "") {
       dadosCadastrados.push(novoDado);
       alert("Novo dado cadastrado com sucesso!");
   } else {
       alert("Por favor, insira um dado válido.");
       document.getElementById('resultado').innerHTML = "<p>Cadastrar Novo Dado - Implementação em falta.</p>";
      }
   }


function editarDado() {
   let index = prompt("Digite o número do dado que deseja editar:") - 1;
   if (index >= 0 && index < dadosCadastrados.length) {
       let novoValor = prompt("Digite o novo valor para este dado:", dadosCadastrados[index]);
       if (novoValor !== null && novoValor !== "") {
           dadosCadastrados[index] = novoValor;
           alert("Dado editado com sucesso!");
       } else {
           alert("Por favor, insira um novo valor válido.");
       }
   } else {
       alert("Número de dado inválido.");
       document.getElementById('resultado').innerHTML = "<p>Editar Novo Dado - Implementação em falta.</p>";
}
   }

function deletarDado() {
   let index = prompt("Digite o número do dado que deseja deletar:") - 1;
   if (index >= 0 && index < dadosCadastrados.length) {
       let confirmacao = confirm(`Tem certeza que deseja deletar o dado "${dadosCadastrados[index]}"?`);
       if (confirmacao) {
           dadosCadastrados.splice(index, 1);
           alert("Dado deletado com sucesso!");
       }
   } else {
       alert("Número de dado inválido.");
       document.getElementById('resultado').innerHTML = "<p>Deletar Novo Dado - Implementação em falta.</p>";
}
   }

