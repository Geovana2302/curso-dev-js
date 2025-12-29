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

    // Segurança: se o container não existir, não executa
    if (!container) {
        console.error("Elemento #container-projetos não encontrado no HTML.");
        return;
    }

    // Limpa o container (evita duplicação em reload)
    container.innerHTML = "";

    projetos.forEach(projeto => {
        const card = document.createElement("a");

        // Caminho correto para GitHub Pages
        card.href = `./exercicios-individuais/projetos/${projeto.pasta}/${projeto.arquivo}`;
        card.classList.add("card");
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
            <h3>${projeto.nome}</h3>
            <p>${projeto.desc}</p>
            <span>Ver projeto →</span>
        `;

        container.appendChild(card);
    });
});
