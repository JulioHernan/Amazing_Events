
let proximos_eventos = data.events.filter(event => event.date > data.currentDate)
let eventos = proximos_eventos
let uniqueCategories = getUniqueCategories(eventos)

addCategoriesToHTML(uniqueCategories, '.chequeo')
renderCards(eventos)