var images = ['assets/Own/PNG/Manekin1.png','assets/Own/PNG/Manekin2.png','assets/Own/PNG/Manekin3.png']

var i = 0

function imagechangeForward() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    document.getElementById('Manekin').src = images[i];
}

function imagechangeBackward() {
    i--;
    if (i < 0) {
        i = 2;
    }
    document.getElementById('Manekin').src = images[i];
}
