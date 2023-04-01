const form = document.querySelector("#calc");
const resultadoDiv = document.querySelector("#resultado");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	
	const kmPorLitro = parseFloat(document.querySelector("#km_por_litro").value);
	const precoCombustivel = parseFloat(document.querySelector("#preco_combustivel").value.replace(",", "."));
	const kmRodado = parseFloat(document.querySelector("#km_rodado").value);
	const diasPorMes = parseInt(document.querySelector("#dias_por_mes").value);
	
	const litrosGastos = kmRodado / kmPorLitro;
	const custoTotal = litrosGastos * precoCombustivel * diasPorMes;
	
	resultadoDiv.innerHTML = `<h2>Gasto total com combustível: R$ ${custoTotal.toFixed(2)}</h2>`;
	resultadoDiv.style.display = "block";
});
