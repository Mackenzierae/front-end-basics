console.log("hello profile")
/* <button id="color">My Favorite Color</button>
<button id="place">My Favorite Place</button>
<button id="ritual">My Favorite Ritual</button> */


let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")


function alertColor() {
    alert("My Favorite Color is a golden yellow")
}
function alertPlace() {
    alert("My Favorite Place is around a river bend deep in the mountains")
}
function alertRitual() {
    alert("My Favorite Ritual is cooking a feast for Thanksgiving")
}

colorBtn.addEventListener("click", alertColor)
placeBtn.addEventListener("click", alertPlace)
ritualBtn.addEventListener("click", alertRitual)


function handleSubmit(evt) {
	evt.preventDefault();
	alert("Thanks! Will do.")
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);