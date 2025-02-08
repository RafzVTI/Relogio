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

    //data
    let dia = agora.getDate().toString().padStart(2, '0')
    let mes = (agora.getMonth() + 1).toString().padStart(2, '0')
    let ano = agora.getFullYear()

    document.getElementById('dia').textContent = dia
    document.getElementById('mes').textContent = mes
    document.getElementById('ano').textContent = ano

    let dataformada = `${dia}/${mes}/${ano}`
    document.getElementById('data').textContent = dataformada
}

setInterval(atualizar, 1000)
atualizar()

