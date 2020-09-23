import { model } from './model'
import {Sidebar} from './classes/sidebar';
import { Site } from './classes/site'
import './styles/main.css';

const site = new Site('#site')

const updateCollback = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new Sidebar('#panel', updateCollback)

site.render(model)
