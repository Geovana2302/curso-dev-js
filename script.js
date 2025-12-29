document.addEventListener("DOMContentLoaded", () => {
    const projetos = [
        {
            nome: "Cadastro",
            pasta: "cadastro",
            arquivo: "index.html",
            desc: "Projeto de cadastro desenvolvido durante o curso"
        },
        {
            nome: "Orçamento",
            pasta: "orcamento",
            arquivo: "index.html",
            desc: "Sistema simples para cálculo de orçamento"
        }
    ];

    const container = document.getElementById("container-projetos");

    // Segurança: evita erro se o elemento não existir
    if (!container) {
        console.error("Elemento #container-projetos não encontrado no HTML");
        return;
    }

    projetos.forEach(projeto => {
        const card = document.createElement("a");

        card.href = `./projetos/${projeto.pasta}/${projeto.arquivo}`;
        card.className = "card";
        card.target = "_blank";

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.desc}</p>
            <span>Ver projeto →</span>
        `;

        container.appendChild(card);
    });
});
