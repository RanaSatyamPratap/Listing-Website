mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12", // corrected URL
  center: listing.geometry.coordinates, // example coordinates
  zoom: 9,
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
  new mapboxgl.Popup({offset: 25}).setHTML(
    `<h2>${listing.location}</h2><p>Exact Location provided after booking<p>`
  )
)
.addTo(map);

