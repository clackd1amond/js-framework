import './lib/lib';

$('button').click(function () {
	$('div').eq(2).toggleClass('active');
});

console.log($('div').attr('name'));

console.log($('button').html());
console.log($('button').html('Press me'));

$('div').click(function () {
	console.log($(this).index());
});

console.log($('div').eq(2).find('.some'));
