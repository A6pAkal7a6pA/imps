
fetch('../php/medium-parser.php').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (json) {
	// console.log(html);
	// let json = '[{ "title": "Integration of IMPs Kingdom into Gamerse social Marketplace!", "link": "https:\/\/imptoken.medium.com\/integration-of-imps-kingdom-into-gamerse-social-marketplace-6109d059e245?source=rss-b503ab6a1ec------2", "image": "https:\/\/cdn-images-1.medium.com\/max\/1024\/1*0DFHzAvC0Vf5r7CRk9kuaQ.jpeg" }, { "title": "Meet our new Advisor!", "link": "https:\/\/imptoken.medium.com\/meet-our-new-advisor-af3387c602ec?source=rss-b503ab6a1ec------2", "image": "https:\/\/cdn-images-1.medium.com\/max\/1024\/1*uIw8NI7n9zjH6B29G8F8pA.png" }, { "title": "IMPs Kingdom x Gamerse!", "link": "https:\/\/imptoken.medium.com\/imps-kingdom-x-gamerse-5b16548c7bba?source=rss-b503ab6a1ec------2", "image": "https:\/\/cdn-images-1.medium.com\/max\/1024\/1*iHWsbcy7XXGHVsgUBiZLSA.png" }]';
	let parsedJson = JSON.parse(json);
	console.log(parsedJson.length);
	let newsItems = document.querySelectorAll('.news__item');
	for (let i = 0; i < parsedJson.length; i++) {
		newsItems[i].querySelector('.news__image img').src = parsedJson[i].image;
		newsItems[i].querySelector('.news__text').innerText = parsedJson[i].title;
		newsItems[i].querySelector('.news__text').href = parsedJson[i].link;
		// item.querySelector('.news__image img').src;
	}



}).catch(function (err) {
	console.warn('Something went wrong.', err);
});