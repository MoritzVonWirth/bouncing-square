function draw(length) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.strokeRect(0,0,length,length)
    }
}

document.getElementById('submit').onclick = function() {
    var length = parseInt(document.getElementById('length').value);
    window.draw(length);
};

document.getElementById('clear').onclick = function() {
    var length = parseInt(document.getElementById('length').value);
    window.draw(length);
};


