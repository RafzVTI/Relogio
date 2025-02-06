function atualizar(){
    const agora = new Date()
    //relogio
    let horas = agora.getHours().toString().padStart(2, '0')
    let minutos = agora.getMinutes().toString().padStart(2, '0')
    let segundos = agora.getSeconds().toString().padStart(2, '0')

    document.getElementById('horas').textContent = horas
    document.getElementById('minutos').textContent = minutos
    document.getElementById('segundos').textContent = segundos

    //dia da semana
    const diaSemana = document.querySelectorAll('#diasSemana li')
    const diaAtual = agora.getDay()
    
    diaSemana.forEach(dia => dia.classList.remove('diaatual'))

    diaSemana[diaAtual].classList.add('diaatual')
}

setInterval(atualizar, 1000)
atualizar()

