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
