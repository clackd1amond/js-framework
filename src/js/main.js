import './lib/lib';

$('#first').click(() => {
	$('.w-500 div').eq(0).fadeOut(800);
});

$('[data-count=second]').click(() => {
	$('.w-500 div').eq(1).fadeOut(800);
});

$('.btn-warning').click(() => {
	$('.w-500 div').fadeOut(800);
});
