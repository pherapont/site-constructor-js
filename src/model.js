import img1 from './images/dev.jpg';

export const model = [
	{
		type: 'title',
		value:'Конструктор сайтов',
		options: {
			styles: 'background-color: darkred; color: #fff; text-align: center; padding: 1rem;',
			tag: 'h5'
		}
	},
	{
		type: 'text',
		value:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ex, numquam sint alias asperiores voluptates similique! Laboriosam omnis fugiat aperiam! Fugit qui maxime exercitationem quos impedit provident nesciunt iure accusantium!',
		options: {
			styles: 'background-color: darkblue;color: yellow; padding: 1rem;'
		}
	},
	{
		type: 'images',
		value: img1,
		options: {
			styles: 'padding: 1rem; display: flex; justify-content: center;',
			alt: 'Computer of developer',
			styleImage: 'width: 500px; height: auto;'
		}
	},
	{
		type: 'textColumns',
		value: [
			'Текст 1',
			'Текст 2',
			'Текст 3',
			'Текст 4',
		],
		options: {
			styles: 'padding: 1rem;'
		}
	},
]