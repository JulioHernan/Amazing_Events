
let eventos_pasados = data.events.filter(event => event.date < data.currentDate)
let eventos = eventos_pasados
let uniqueCategories = getUniqueCategories(eventos)

addCategoriesToHTML(uniqueCategories, '.chequeo')
renderCards(eventos)