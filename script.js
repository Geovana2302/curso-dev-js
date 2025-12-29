const projetos = [
    { nome: "Cadastro", pasta: "cadastro", arquivo: "cadastro.html" },
    { nome: "Orçamento", pasta: "orcamento", arquivo: "atividade_orcamento.html" }
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    const card = document.createElement('a');
    // Ao usar apenas a barra no final, o navegador busca o index.html automaticamente
    card.href = `./${projeto.pasta}/`; 
    card.className = 'card';
    
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.desc}</p>
        <span style="color: #f39c12; font-weight: bold;">Ver projeto →</span>
    `;
    
    container.appendChild(card);
});