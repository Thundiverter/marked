let urlinput = document.querySelector('#urlinput');
let select = document.querySelector('#select');
let pastebtn = document.querySelector('#pastebtn');
let main = document.querySelector('main');
let geturlbtn = document.querySelector('#geturlbtn');

let locationURL = window.location.search.replace('?','');

// Fetch
function parse(text) {
	fetch(text) 
		.then(response => response.text())
		.then(result => {
			switch (select.value) {
				case 'HTML':
					main.innerText = marked(result);
					break;
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
console.log(locationURL);
if (locationURL) {
	urlinput.value = locationURL;
	parse(locationURL);
}

// Get URL
geturlbtn.addEventListener('click', () => {
	prompt('Copy this URL', 'https://thundiverter.github.io/marked?' + urlinput.value);
});

// https://github.com/Thundiverter/marked