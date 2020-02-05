const staticDogApp = "dog-app-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/bichon.jpg",
  "/images/chihuahua.jpg",
  "/images/cockapoo.jpg",
  "/images/spaniel.jpg",
  "/images/collie.jpg",
  "/images/corgi.jpg",
  "/images/golden.jpg",
  "/images/terrier.jpg",
  "/images/pug.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDogApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})