console.log("===== Strings =====");

let nome = "Zan";
let sobrenome = "Rei";

let nome_comp_operador = "Com operador (+): " + nome + " " + sobrenome;
let nome_comp_funcao = "Com função (concat): " .concat(nome, " ", sobrenome);
let nome_comp_template = `Com template ({}): ${nome} ${sobrenome} `

console.log(nome_comp_operador);
console.log(nome_comp_funcao);
console.log(nome_comp_template);



