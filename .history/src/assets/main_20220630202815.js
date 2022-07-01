const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de39d04d6fmshd68ba0c1d020e84p1cacfcjsne5ae242a7e8e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=%2FOscarBarajas%2Ffeatured&part=snippet%2Cid&order=date&maxResults=9', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));