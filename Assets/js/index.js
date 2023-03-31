let eventos = data.events
let uniqueCategories = getUniqueCategories(eventos)

addCategoriesToHTML(uniqueCategories,'.chequeo')

renderCards(eventos)
