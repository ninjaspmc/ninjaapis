/*
	O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.
	Projeto pequeno, criado pelo: @cris.xyz._
*/
const fetch = require('node-fetch');
const estadoDDD = new Object({
	"11": "SP",
	"12": "SP",
	"13": "SP",
	"14": "SP",
	"15": "SP",
	"16": "SP",
	"17": "SP",
	"18": "SP",
	"19": "SP",
	"21": "RJ",
	"22": "RJ",
	"24": "RJ",
	"27": "ES",
	"28": "ES",
	"31": "MG",
	"32": "MG",
	"33": "MG",
	"34": "MG",
	"35": "MG",
	"37": "MG",
	"38": "MG",
	"41": "PR",
	"42": "PR",
	"43": "PR",
	"44": "PR",
	"45": "PR",
	"46": "PR",
	"47": "SC",
	"48": "SC",
	"49": "SC",
	"51": "RS",
	"53": "RS",
	"54": "RS",
	"55": "RS",
	"61": "DF",
	"62": "GO",
	"63": "TO",
	"64": "GO",
	"65": "MT",
	"66": "MT",
	"67": "MS",
	"68": "AC",
	"69": "RO",
	"71": "BA",
	"73": "BA",
	"74": "BA",
	"75": "BA",
	"77": "BA",
	"79": "SE",
	"81": "PE",
	"82": "AL",
	"83": "PB",
	"84": "RN",
	"85": "CE",
	"86": "PI",
	"87": "PE",
	"88": "CE",
	"89": "PI",
	"91": "PA",
	"92": "AM",
	"93": "PA",
	"94": "PA",
	"95": "RR",
	"96": "AP",
	"97": "AM",
	"98": "MA",
	"99": "MA"
})

function formatReal(int) {
	var tmp = int+'';
	if(tmp.length >= 4) {
		tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
	}
	if(tmp.length >= 6) {
		tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
	}
	return tmp;
}

function getNum(str) {
	str = String(formatReal(str)).split(',')[0]
	if (str.length >= 4) {
		str = parseInt(str)
		str = String(formatReal(str)).replaceAll(',', '.')
	}
	return Number(str)
}

function setEstado(std) {
	/*
		Retirado: https://www.taxgroup.com.br/intelligence/tabela-icms-atualizada/
	*/
	return (
		/ES|GO|MT|MS|RS|SC/.test(std) ? 17 :
		/AP|CE|DF|MG|PB|PE|SP/.test(std) ? 18 :
		/AC|AL|BA|PA|PR/.test(std) ? 19 :
		/AM|MA|RN|RJ|RR|TO/.test(std) ? 20 :
		/RO/.test(std) ? 17.5 : 22
	)
}

function icmsEstado(std) {
	if (!std) return null
	if (Number(std)) {
		const ddd = estadoDDD[std]
		return ddd ? setEstado(ddd) : null
	} else {
		return setEstado(std)
	}
}

/*
	• Valor de Exemplo:
		✓ R$ 350,56 => 350.56
		✓ R$ 1.500,00 => 1500
		✓ R$ 1.550,56 => 1550.56
	• Não se deve colocar vírgula no valor.
	• Exemplo para Executar:
		const ddd = 91
		const valor = 350.56
		const icms = require('./icms.js')
		icms(valor, ddd).then(console.log).catch(console.error);
*/

module.exports = async(valor = 0, icms = 91) => {
	valor = Number(valor)
	icms = icmsEstado(icms)
	if (!valor || isNaN(valor)) return Promise.reject('Não foi atribuído nenhum valor.');
	if (!icms) return Promise.reject('Não foi declarado o icms do estado.');
	if (/,/.test(valor)) return Promise.reject('Não pode conter vírgula.');
	let imposto = 0
	if (valor >= 250) {
		imposto = valor + (60 + icms)
		valor = valor + imposto
	} else {
		imposto = getNum(valor * icms)
		valor = valor + imposto
	}	
	const { USD: { high } } = await fetch("https://economia.awesomeapi.com.br/all/USD-BRL").then(v => v.text()).then(v => JSON.parse(v))
	const result = new Object({
		icms,
		total: valor,
		icmsTotal: imposto,
		dolar: (valor / Number(high).toFixed(2)).toFixed(2)
	})
	return Promise.resolve(result);
}