import './lib/lib';

$('#first').click(() => {
	$('.w-500 div').eq(0).fadeToggle(800);
});

$('[data-count=second]').click(() => {
	$('.w-500 div').eq(1).fadeToggle(800);
});

$('.btn-warning').click(() => {
	$('.w-500 div').fadeToggle(800);
});

$('.wrap').html(
	`
		<div class="dropdown">
			<button class="dropdown-toggle btn btn-primary" id="dropdownMenuButton">Dropdown button</button>
			<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
				<a href="#" class="dropdown-item">Action #1</a>
				<a href="#" class="dropdown-item">Action #2</a>
				<a href="#" class="dropdown-item">Action #3</a>
			</div>
		</div>
	`
);
$('.dropdown-toggle').dropdown();

$('#trigger').click(() =>
	$('#trigger').createModal({
		text: {
			title: 'Modal Title ',
			body:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro nostrum fugit enim, cupiditate aliquam quis nihil. Ullam perspiciatis ad optio consequatur? Officiis aspernatur temporibus, placeat assumenda saepe perferendis ratione.',
		},
		btns: {
			count: 3,
			settings: [
				['Close', ['btn-danger', 'mr-10'], true],
				[
					'Save changes',
					['btn-success'],
					false,
					() => {
						alert('Данные сохранены');
					},
				],
				[
					'Another button',
					['btn-warning', 'ml-10'],
					false,
					() => {
						alert('Hello World!');
					},
				],
			],
		},
	})
);

$('#example-slider').createSlider({
	width: 700,
	height: 500,
	slides: [
		{
			name: 'photo1',
			url: 'https://images4.alphacoders.com/616/thumb-1920-616449.jpg',
		},
		{
			name: 'photo2',
			url: 'https://www.befunky.com/images/wp/wp-2016-03-photo-editing-blog-posts-6.jpg',
		},
		{
			name: 'photo3',
			url: 'https://i.pinimg.com/originals/eb/c2/05/ebc20552363d128622485a5477df76a7.jpg',
		},
	],
});

$()
	.get('https://jsonplaceholder.typicode.com/todos/1')
	.then((res) => console.log(res));
