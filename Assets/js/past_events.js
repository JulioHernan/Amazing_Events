let contenedor = document.querySelector(".cartas")
let eventos_pasados = data.events.filter(event => event.date < data.currentDate)

imprimiCards(eventos_pasados)