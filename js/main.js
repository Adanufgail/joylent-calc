function update() {
	var target, joylent, scoops, water;

	var oneCalorie = 0.24570024570024570024570024570025; //grams of joylent
	var oneGJoylent = 2.8901734104046242774566473988439; //ml of water
	var oneScoop =  49.428571428571428571428571428571 //grams of joylent

	target = parseInt($('#cal').val());
	console.log(target);

	joylent = target * oneCalorie; //in grams
	console.log(joylent);
	scoops = joylent / oneScoop; //in scoops
	console.log(scoops);
	water = joylent * oneGJoylent; //in ml
	console.log(water);

	$('#joy').html(Math.round(joylent));
	$('#scoop').html(scoops.toFixed(1));
	$('#wat').html(Math.round(water));
}