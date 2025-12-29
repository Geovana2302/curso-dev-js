const projetos = [
    { 
        nome: "Cadastro", 
        pasta: "cadastro", 
        arquivo: "cadastro.html", 
        desc: "Sistema de cadastro de dados." 
    },
    { 
        nome: "Orçamento", 
        pasta: "orcamento", 
        arquivo: "atividade_orcamento.html", 
        desc: "Sistema de cálculo de orçamento." 
    },
    { 
        nome: "Negócios", 
        pasta: "RequisiçãoDeNegocios", 
        arquivo: "index.html", // Verifique se há um index.html nesta pasta
        desc: "Atividade de requisição de negócios." 
    }
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    const card = document.createElement('a');
    // AQUI ESTÁ O SEGREDO: usamos a pasta e o nome específico do arquivo
    card.href = `./${projeto.pasta}/${projeto.arquivo}`; 
    card.className = 'card';
    
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.desc}</p>
        <span style="color: #f39c12; font-weight: bold;">Ver projeto →</span>
    `;
    
    container.appendChild(card);
});