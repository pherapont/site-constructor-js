import { row, col } from "./utils"



// function title(block) {
// 	const {styles, tag} = block.options
// 	return row(col(`<${tag || 'h1'}>${block.value}</${tag || 'h1'}>`), styles)
// }

// function text(block) {
// 	const {styles} = block.options
// 	return row(col(block.value), styles)
// }

// function textColumns(block) {
// 	const {styles} = block.options
// 	const textArr = block.value.map(item => col(item))
// 	return row(textArr.join(''), styles)
// }

// function images(block) {
// 	const {styleImage, styles, alt} = block.options
// 	return row(`<img src="${block.value}" style="${styleImage}" alt="${alt}">`, styles)
// }

// export const handler = {title, text, textColumns, images}