import { row, col } from "./utils"



function title(block) {
	const styles = block.options.styles
	const tag = block.options.tag
	return row(col(`<${tag || 'h1'}>${block.value}</${tag || 'h1'}>`), styles)
}

function text(block) {
	const styles = block.options.styles
	return row(col(block.value), styles)
}

function textColumns(block) {
	const styles = block.options.styles
	const textArr = block.value.map(item => col(item))
	return row(textArr.join(''), styles)
}

function images(block) {
	const styles = block.options.styles
	return row(col(
		`<img src="${block.value}" style="${styles}">`
	))
}

export const handler = {
	title,
	text,
	textColumns,
	images
}