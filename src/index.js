import {handler} from './templates'
import {model} from './model'
import './styles/main.css';

const site = document.querySelector('#site')

model.forEach(block => {
	
	const html = handler[block.type](block)
	site.insertAdjacentHTML('beforeend', html)
})
