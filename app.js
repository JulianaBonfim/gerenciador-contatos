var form = document.getElementById("form-contato");
var inputNome = document.getElementById("nome");
var inputTelefone = document.getElementById("telefone");
var listaContatos = document.getElementById("lista-contatos");
function adicionarContato(contato) {
    var li = document.createElement("li");
    li.textContent = "".concat(contato.nome, " - ").concat(contato.telefone);
    listaContatos.appendChild(li);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Lendo os valores dos inputs dentro do submit
    var nome = inputNome.value.trim();
    var telefone = inputTelefone.value.trim();
    // Verificando se os campos estão vazios
    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    var novoContato = {
        nome: nome,
        telefone: telefone,
    };
    // Adicionando o contato à lista
    adicionarContato(novoContato);
    // Limpando os campos após adicionar o contato
    inputNome.value = "";
    inputTelefone.value = "";
});
