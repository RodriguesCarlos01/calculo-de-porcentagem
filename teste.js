// deve exibir no final:
// nome do produto
// quantidade
// valor da venda
// volor da venda com desconto

let nomeDoProduto = document.querySelector(".nomeDoProduto")
let preco = document.querySelector(".preco");
let quantidade = document.querySelector(".quantidade");
let desconto = document.querySelector(".desconto");
let recebeResultado = document.querySelector(".recebeResultado")

let botao = document.querySelector(".btn")

	botao.addEventListener("click", () => {

	const detalheDoProduto = (venda, total) => {
		return venda.value * total.value
	}
	let precoTotal = detalheDoProduto(preco, quantidade)

	let precoComDesconto = precoTotal * (1 - desconto.value)
	
	const geraParagrafos = [
	`Compra efetuada:        ${nomeDoProduto.value}`,
	`Preço do Produto:       ${preco.value}`, 
	`Quantidade de produtos: ${quantidade.value}`, 
	`Preço total da venda:   ${precoTotal.toFixed(2)}`, 
	`Preço com desconto:     ${precoComDesconto.toFixed(2)}`
	]
	nomeDoProduto.value=""
	preco.value=""
	quantidade.value=""
	desconto.value=""
	recebeResultado.textContent=""

	for( const resultadoParagrafo of geraParagrafos){

		const paragrafo = document.createElement("p");
		paragrafo.textContent = resultadoParagrafo;
		recebeResultado.appendChild(paragrafo)
		
	}


	
})



