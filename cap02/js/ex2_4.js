//cria referênia ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")


// cria um "ouvinte" de evento, acionando quando o submit for clicado
frm.addEventListener("submit", (e) => {
	const quilo = Number(frm.inQuilo.value) //obtém conteúdo dos campos
	const consumo = Number(frm.inConsumo.value)

	const valor = (quilo / 1000) * consumo // calcula o valor a ser pago
	resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` //exite resposta

	e.preventDefault() //evita envio do form

});


