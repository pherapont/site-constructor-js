import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks'
import img1 from './images/dev.jpg';

export const model = [
	new TitleBlock ('Конструктор сайтов', {
		styles: 'background-color: darkred; color: #fff; text-align: center; padding: 1rem;',
		tag: 'h5'
		}
	),
	new TextBlock ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ex, numquam sint alias asperiores voluptates similique! Laboriosam omnis fugiat aperiam! Fugit qui maxime exercitationem quos impedit provident nesciunt iure accusantium!', {
		styles: 'background-color: darkblue;color: yellow; padding: 1rem;'
		}
	),
	new ImageBlock (img1, {
		styles: 'padding: 1rem; display: flex; justify-content: center;',
		alt: 'Computer of developer',
		styleImage: 'width: 500px; height: auto;'
		}
	),
	new TextColumnBlock ([
		'Текст 1',
		'Текст 2',
		'Текст 3',
		'Текст 4',
		], 
		{
			styles: 'padding: 1rem;'
		}
	),
]