let urlinput = document.querySelector('#urlinput');
let select = document.querySelector('#select');
let pastebtn = document.querySelector('#pastebtn');
let main = document.querySelector('main');
let geturlbtn = document.querySelector('#geturlbtn');

let locationURL = decodeURIComponent(window.location.search.replace('?',''));

// Fetch
function parse(text) {
	fetch(text) 
		.then(response => response.text())
		.then(result => {
			switch (select.value) {
				case 'HTML':
					main.innerText = marked(result);
					break;
				/*case 'Markdown':
					main.innerText = text;
					break;*/
				default:
					main.innerHTML = marked(result);
					break;
			}
		});
}

// Button
parsebtn.addEventListener('click', () => {
	parse(urlinput.value);
});

// From URL
if (locationURL != '') {
	/*locationURL.replace('%3A', ':');
	locationURL.replace('%2F', '/');
	locationURL.replace('%3F', '?');*/
	console.log(locationURL);
	
	urlinput.value = locationURL;
	parse(urlinput.value);
}

// Get URL
geturlbtn.addEventListener('click', () => {
	/*navigator.clipboard.writeText('https://thundiverter.github.io/marked?' + urlinput.value);
	alert('Copied to clipboard');*/
	prompt('Copy this URL to share it with someone', 'https://thundiverter.github.io/marked?' + urlinput.value);
});

// https://github.com/Thundiverter/marked