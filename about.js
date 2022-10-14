console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Success!")
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

function alertUser() {
	alert("You look great today!")
}