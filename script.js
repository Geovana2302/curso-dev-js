const projetos = [
    { nome: "Cadastro", pasta: "cadastro", desc: "Sistema de cadastro" },
    { nome: "Orçamento", pasta: "orcamento", desc: "Sistema de orçamento" },
    { nome: "Negócios", pasta: "RequisiçãoDeNegocios", desc: "Atividade de negócios" }
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    const card = document.createElement('a');
    // Como agora todos se chamam index.html, basta apontar para a pasta
    card.href = `./${projeto.pasta}/index.html`; 
    card.className = 'card';
    
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.desc}</p>
        <span style="color: #f39c12; font-weight: bold;">Ver projeto →</span>
    `;
    
    container.appendChild(card);
});