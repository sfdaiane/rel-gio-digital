//pegar o elemento horas pelo id do html
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr  //se a hora for menor que 10 o 0 será adicionado na frente do numero

    if (min < 10) min = '0' + min //se os minutos for menor que 10 o 0 será adicionado na frente do numero

    if (sec < 10) sec = '0' + sec //se os segundos for menor que 10 o 0 será adicionado na frente do numero

    //perguntar
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
}

//funcao para pegar a hora, minutos e segundos em tempo real
setInterval(time, 5000) // a função setinterval é uma função do proprio javascript que recebe dois argumentos, o primeiro argumento é a função que ela vai executar dentro do intervalo de tempo passado em milisegundos no segundo argumento.

