
fetch('../php/medium-parser.php').then(function (response) {
	return response.text();
}).then(function (json) {
	let parsedJson = JSON.parse(json);
	console.log(parsedJson);
	let newsItems = document.querySelectorAll('.news__item');
	for (let i = 0; i < parsedJson.length; i++) {
		newsItems[i].querySelector('.news__image img').src = parsedJson[i].image;
		newsItems[i].querySelector('.news__text').innerText = parsedJson[i].title;
		newsItems[i].querySelector('.news__text').href = parsedJson[i].link;
	}



}).catch(function (err) {
	console.warn('Something went wrong.', err);
});