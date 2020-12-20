function parse(text) {
	fetch(text) 
		.then(response => response.text())
		.then(result => {
			switch (document.querySelector('#select').value) {
				case 'HTML':
					document.querySelector('main').innerText = marked(result);
					break;
				default:
					document.querySelector('main').innerHTML = marked(result);
					break;
			}
	});
}

document.querySelector('#parsebtn').addEventListener('click', () => {
	parse(document.querySelector('#urlinput').value);
});

// https://github.com/Thundiverter/marked