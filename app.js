//Helpers
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function getKeyString(x, y) {
    return `${x}x${y}`;
}

(function () {
    firebase.auth().signInAnonymlously()
})();