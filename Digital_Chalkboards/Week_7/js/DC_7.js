// Add base layer map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href-"https://www.openstreetmap.org/copyright">Open Street Map</a> contributors'
}).addTo(map);


// Creates 3 markers and pop-ups on the map
var reg_marker = L.marker([41.79261254097474, -87.59999193179426]).addTo(map);
reg_marker.bindPopup('<b>First stop!</b><br>Regenstein Library</br>')

var coffee_marker = L.marker([41.78913686077737, -87.60001996062982]).addTo(map);
coffee_marker.bindPopup('<b>Arguably, the most important stop</b><br>Grounds of Being Coffee Shop</br>')

var digs_marker = L.marker([41.79132117007747, -87.59655023912497]).addTo(map);
digs_marker.bindPopup('<b>Home base</b><br>DIGS Office and Classrooms</br>')




// Creates a polygon on the map indicating key UChicago DIGS area
var polygon = L.polygon([
    [41.79261254097474, -87.59999193179426], // Regenstein
    [41.79132117007747, -87.59655023912497], // DIGS Office
    [41.789480461683624, -87.59740083436344], // ISAC
    [41.78913686077737, -87.60001996062982], // Grounds of Being
    [41.79065673737096, -87.60279872900274] // MADD Center
]).addTo(map);

polygon.bindPopup('<b>Typical area of important spots for DIGS students</b><br>All in all, the walk should only take you 15 minutes</br>')