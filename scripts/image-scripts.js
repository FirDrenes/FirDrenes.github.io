

var img = document.getElementById("main_img");

function rotate(){
    console.log('begin');
    console.log(angle);
    img.style.transform = `rotate(${angle}deg)`;
    angle = angle + 10;
    if (angle > 360){
        angle = 0;
        return;
    }
    requestAnimationFrame(rotate);
}

var angle = 0;
document.querySelector('img').onclick = function(){
    console.log('onclick');
    requestAnimationFrame(rotate);
}