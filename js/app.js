const container = document.querySelector(".container")
const dogs = [
  { name: "bichon", image: "images/bichon.jpg" },
  { name: "chihuahua", image: "images/chihuahua.jpg" },
  { name: "cockapoo", image: "images/cockapoo.jpg" },
  { name: "spaniel", image: "images/spaniel.jpg" },
  { name: " collie", image: "images/collie.jpg" },
  { name: " corgi", image: "images/corgi.jpg" },
  { name: "golden", image: "images/golden.jpg" },
  { name: "terrier", image: "images/terrier.jpg" },
  { name: "pug", image: "images/pug.jpg" },
]

const showDogs = () => {
  let output = ""
  dogs.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Adopt</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showDogs)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}