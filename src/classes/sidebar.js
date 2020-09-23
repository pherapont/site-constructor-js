import {TitleBlock, TextBlock} from './blocks';

export class Sidebar {
	constructor(selector, update) {
		this.$el = document.querySelector(selector)
		this.update = update

		this.init()
	}

	init() {
		this.$el.addEventListener('submit', this.addBlock.bind(this))
		this.$el.innerHTML = this.template
	}

	get template() {
		return [
			block('title'),
			block('text')
		].join('')
	}
	
	addBlock(event) {
		event.preventDefault()
		
		const type = event.target.name
		const value = event.target.value.value
		const styles = event.target.styles.value

		const Constructor = type === "text" ? TextBlock : TitleBlock

		const newBlock = new Constructor (value, {styles})
		this.update(newBlock)

		event.target.value.value = ''
		event.target.styles.value = ''

	}
}

function block(type) {
	return `
		<form name="${type}">
			<h5>${type}</h5>
			<div class="form-group">
				<label for="value">Value</label>
				<input type="text" class="form-control form-control-sm" id="value" name="value">
				<smallclass="form-text text-muted">Введите значение</small>
			</div>
			<div class="form-group">
				<label for="styles">Styles</label>
				<input type="text" class="form-control form-control-sm" name="styles" id="styles">
				<smallclass="form-text text-muted">Введите стили</small>
			</div>
			<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
			<hr>
		</form>
	`
}