document.querySelector('.seu-nome').textContent = "Geovana Moreira Bicalho";

const PRECO_POR_PAGINA = 500;
const PRECO_DESING_ADICIONAL = 1000;


const inputPaginas = document.querySelector("#qtd-paginas");
const inputDesconto = document.querySelector("#desconto");
const inputMensalidade = document.querySelector("#mensalidade");
const checkboxDesing = document.querySelector("#inclui-design");
const inputPrazo = document.querySelector("#prazo-entrega");
const resumoSubTotal = document.querySelector("#resumo-subtotal");
const resumoAdicional = document.querySelector("#resumo-adicional");
const resumoUrgencia = document.querySelector("#resumo-urgencia");
const resumoDesconto = document.querySelector("#resumo-desconto");
const resumoTotal = document.querySelector("#resumo-total");
const resumoMensalidade = document.querySelector("#resumo-mensalidade")

const calcularSubTotal = (quantidade) => quantidade * PRECO_POR_PAGINA;

const calcularValorDesconto = (valor, porcentagem) => valor * (porcentagem / 100);


function calcularTaxaDeUrgencia(valor, prazo) {
    /*
    Taxa de Urgência: 
   - Se o prazo for menor que 5 dias: 10% sobre o valor base (páginas + design).
   - Se o prazo for menor que 15 dias: 5% sobre o valor base (páginas + design). 
   - Se for 15 dias ou mais, a taxa é zero.
    */
    if (prazo > 0 && prazo < 5) {
        return valor * (10 / 100);
    } else if (prazo >= 5 && prazo < 15) {
        return valor * (5 / 100)
    } else {
        return 0
    }
}
    function atualizarOrcamento() {
        const qtdPaginas = Number(inputPaginas.value);
        const porcentagemDesconto = Number(inputDesconto.value);
        const prazo = Number(inputPrazo.value);
        const mensalidade = Number(inputMensalidade.value);
        const designIncluido = checkboxDesing.checked; // true e false;

        const subtotal = calcularSubTotal(qtdPaginas)
        const adicionalDesing = designIncluido ?
            PRECO_DESING_ADICIONAL : 0;

        const taxaUrgencia = calcularTaxaDeUrgencia
            ((subtotal + adicionalDesing), prazo);

        const valorDesconto = calcularValorDesconto((subtotal + adicionalDesing + taxaUrgencia),
            porcentagemDesconto);

        const total = (subtotal + adicionalDesing + taxaUrgencia) - valorDesconto;

        const formatarValor = valor => valor.
        toLocateString("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            } 
        )

        resumoSubTotal.textContent = formatarValor (subtotal);
        resumoAdicional.textContent = formatarValor (adicionalDesing);
        resumoUrgencia.textContent = formatarValor (taxaUrgencia);
        resumoDesconto.textContent = formatarValor (valorDesconto);
        resumoTotal.textContent = formatarValor (total);
        resumoMensalidade.textContent = formatarValor (mensalidade);
        
    }

    //inputPaginas.addEventListener('input', atualizarOrcamento);   
    const todosInputs = [inputPaginas, inputPrazo, inputDesconto, inputMensalidade, checkboxDesing];

    todosInputs.forEach(input => {
        input.addEventListener('input', atualizarOrcamento);
    });
    
document.addEventListener("DOMContentLoaded", atualizarOrcamento);