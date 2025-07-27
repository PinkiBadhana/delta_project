// public/js/map.js

document.addEventListener("DOMContentLoaded", function () {
  // Create map centered at Delhi
  var map = L.map('map').setView([28.6139, 77.2090], 13);

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker at Delhi
  L.marker([28.6139, 77.2090]).addTo(map)
    .bindPopup('Hello from Delhi!')
    .openPopup();
});
