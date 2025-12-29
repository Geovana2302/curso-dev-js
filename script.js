const projetos = [
    { 
        nome: "Cadastro", 
        pasta: "cadastro", 
        arquivo: "cadastro.html",
        desc: "Projeto de cadastro desenvolvido durante o curso"
    },
    { 
        nome: "Orçamento", 
        pasta: "orcamento", 
        arquivo: "atividade_orcamento.html",
        desc: "Sistema simples para cálculo de orçamento"
    }
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    const card = document.createElement('a');

    card.href = `./${projeto.pasta}/${projeto.arquivo}`;
    card.className = 'card';
    card.target = "_blank";

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.desc}</p>
        <span style="color: #f39c12; font-weight: bold;">Ver projeto →</span>
    `;

    container.appendChild(card);
});
