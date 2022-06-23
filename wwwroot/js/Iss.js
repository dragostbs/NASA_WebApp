const map = L.map('IssMap').setView([20, 0], 2);

const IssIcon = L.icon({
    iconUrl: 'IssShip.png',
    iconSize: [60, 55],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: IssIcon }).addTo(map);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

const iss_url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function getIss() {
    const response = await fetch(iss_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    marker.setLatLng([latitude, longitude]);
    map.setView([latitude, longitude], 4);
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('long').textContent = longitude.toFixed(2);

    setInterval(getIss, 10000);
    console.log(data);
}

getIss();

