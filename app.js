//backgroung music
function bgplay(){
    let bgsound=new Audio('./Audio/bgmusic.mp3');
    bgsound.play();
    }
// bgplay();
//click sound function
function clicksound(){
let sound=new Audio('./Audio/click.mp3');
sound.play();
}
//delay function
function delay(){
    setTimeout(function(){alert('hi')},1000)
}
//front screen
const playgamebtn=document.getElementById('frontpagebtn');
playgamebtn.addEventListener('click',playbtnclicked);
function playbtnclicked(){
    clicksound();
    delay();
    console.log('hai')
}
document.getElementById('frontpage').style.display='block';
document.getElementById('gamepage').style.display='block';