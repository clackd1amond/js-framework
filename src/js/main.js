import './lib/lib';

$('button').click(function () {
	$('div').eq(2).toggleClass('active');
});

console.log($('.findme').siblings());
