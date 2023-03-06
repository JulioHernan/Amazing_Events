let contenedor = document.querySelector(".cartas")
let proximos_eventos = data.events.filter(event => event.date > data.currentDate)

imprimiCards(proximos_eventos)