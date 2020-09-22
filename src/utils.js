export function row(element, style = '') {
	return `<div class="row" style="${style}">${element}</div>`
}

export function col(element) {
	return `<div class="col-sm">${element}</div>`
}