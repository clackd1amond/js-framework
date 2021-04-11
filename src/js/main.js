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
