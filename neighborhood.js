// console.log("neighborhood")

let restaurantBtn = document.querySelector("#restaurant")

function randomizer() {
   restaurantArr = ["Friend Egg I'm in Love", "Harlow", "Dwarka Indian Cuisine", "Common Ground Coffeehouse", "¿Por Qué No?"]
   const randomElement = restaurantArr[Math.floor(Math.random() * restaurantArr.length)];
   console.log(randomElement)
   alert("Wohoo! You're going to go grab some grub at " + randomElement + "!")
}

restaurantBtn.addEventListener("click", randomizer)