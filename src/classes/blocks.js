class Block {
	constructor(type, value, options) {
		this.type = type
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Метод toHTML должен быть реализован!')
	}
}

export class TitleBlock extends Block {
	constructor (value, options) {
		super('title', value, options);
	}

	toHTML() {
		const {styles, tag} = this.options
		return row(col(`<${tag || 'h1'}>${this.value}</${tag || 'h1'}>`), styles)
	}
}

export class ImageBlock extends Block {
	constructor (value, options) {
		super('images', value, options);
	}

	toHTML() {
		const {styleImage, styles, alt} = this.options
		return row(`<img src="${this.value}" style="${styleImage}" alt="${alt}">`, styles)
	}
}

export class TextBlock extends Block {
	constructor (value, options) {
		super ('text', value, options)
	}

	toHTML() {
		const {styles} = this.options
		return row(col(this.value), styles)
	}
}

export class TextColumnBlock extends Block {
	constructor (value, options) {
		super ('textColumns', value, options)
	}

	toHTML() {
		const {styles} = this.options
		const textArr = this.value.map(item => col(item))
		return row(textArr.join(''), styles)
	}
}