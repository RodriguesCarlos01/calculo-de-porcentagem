// deve exibir no final:
// nome do produto
// quantidade
// valor da venda
// volor da venda com desconto


// Selecionando os elementos do DOM
let nomeDoProduto = document.querySelector(".nomeDoProduto")
let preco = document.querySelector(".preco");
let quantidade = document.querySelector(".quantidade");
let desconto = document.querySelector(".desconto");
let recebeResultado = document.querySelector(".recebeResultado")

// Selecionando o botão
let botao = document.querySelector(".btn")

    // Adicionando um event listener para o clique no botão
	botao.addEventListener("click", () => {

	// Função para calcular o preço total do produto
	const detalheDoProduto = (venda, total) => {
		return venda.value * total.value
	}
	// Calculando o preço total
	let precoTotal = detalheDoProduto(preco, quantidade)

	// Calculando o preço com desconto
	let precoComDesconto = precoTotal * (1 - desconto.value)

	// Criando um array com os parágrafos a serem exibidos	
	const geraParagrafos = [
	`Compra efetuada:        ${nomeDoProduto.value}`,
	`Preço do Produto:       ${preco.value}`, 
	`Quantidade de produtos: ${quantidade.value}`, 
	`Preço total da venda:   ${precoTotal.toFixed(2)}`, 
	`Preço com desconto:     ${precoComDesconto.toFixed(2)}`
	]
	// Limpando os campos do formulário
	nomeDoProduto.value=""
	preco.value=""
	quantidade.value=""
	desconto.value=""
	recebeResultado.textContent=""

	// Criando parágrafos e adicionando-os à div de resultados
	for( const resultadoParagrafo of geraParagrafos){

		const paragrafo = document.createElement("p");
		paragrafo.textContent = resultadoParagrafo;
		recebeResultado.appendChild(paragrafo)
		
	}
	
})



