//instanciando o objto date...
let data = new Date();

//utilizamos a instancia para recuperar a hota e os minutos...
let hora = data.getHours();
let min = data.getMinutes();

let saudacao;
//definimos a msg de saudacao de acordo com a hora do dia

if(hora<=11){
    saudacao = "Bom dia!";
}else if(hora <= 17){
    saudacao = "Boa tarde!";
}else{
    saudacao = "Boa noite!";
}

console.log('Olá!' + saudacao);
console.log('Agora são ' +hora+':'+min);