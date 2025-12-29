// Liste aqui os nomes exatos das pastas que você tem no GitHub
const projetos = [
    { nome: "Cadastro", pasta: "cadastro", arquivo: "cadastro.html" },
    { nome: "Orçamento", pasta: "orcamento", arquivo: "atividade_orcamento.html" }
];
const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    // Cria o elemento de link (card)
    const card = document.createElement('a');
    card.href = `./${projeto.pasta}/${projeto.pasta}.html`;    card.className = 'card';
    
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.desc}</p>
        <span style="color: #f39c12; font-weight: bold;">Ver projeto →</span>
    `;
    
    container.appendChild(card);
});