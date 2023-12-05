function imagechange() {
    var images = [
        'assets/Own/PNG/Manekin1.png',
        'assets/Own/PNG/Manekin2.png',
        'assets/Own/PNG/Manekin3.png'
    ];

    var i = 0;    
    const img = document.createElement('img');
    img.src = images[i];
    document.getElementById('Manekin').appendChild(img);
    i++;
    if (i == 3) {
        var i = 0
    }
    

}