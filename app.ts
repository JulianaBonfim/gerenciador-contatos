const form = document.getElementById("form-contato") as HTMLFormElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputTelefone = document.getElementById("telefone") as HTMLInputElement;
const listaContatos = document.getElementById("lista-contatos") as HTMLUListElement;

type Contato = {  
  nome: string;
  telefone: string;
};

function adicionarContato(contato: Contato): void {
  const li = document.createElement("li");
  li.textContent = `${contato.nome} - ${contato.telefone}`;
  listaContatos.appendChild(li);
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // Lendo os valores dos inputs dentro do submit
  const nome = inputNome.value.trim();
  const telefone = inputTelefone.value.trim();

  // Verificando se os campos estão vazios
  if (nome === "" || telefone === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const novoContato: Contato = {
    nome,
    telefone,
  };

  // Adicionando o contato à lista
  adicionarContato(novoContato);

  // Limpando os campos após adicionar o contato
  inputNome.value = "";
  inputTelefone.value = "";
});
