//background music
bgplay();
// screen selector
const frontscreen=document.getElementById('frontpage');
 const rulescreen=document.getElementById('gamerules');
const gamescreen=document.getElementById('gamepage');
//setting current front screen
 rulescreen.style.display='none';
 gamescreen.style.display='none';
//backgroung music
function bgplay(){
    let bgsound=new Audio('./Audio/bgmusic.mp3');
    bgsound.loop = true;
    bgsound.play();    
    }
//click sound function
function clicksound(){
let sound=new Audio('./Audio/click.mp3');
sound.play();
}
//front screen
//set kistners to play button
const playgamebtn=document.getElementById('frontpagebtn');
playgamebtn.addEventListener('click',playbtnclicked);
function playbtnclicked(){
    clicksound();
    setTimeout(function(){
        frontscreen.style.display='none';
        rulescreen.style.display='block';
    },200)
}
//Game rules screen
//setting rounds list
const selector=document.getElementById('setrounds');
for(var i=1;i<=10;i++){
const options=document.createElement('option');
options.appendChild(document.createTextNode(i));
selector.appendChild(options);
}
//adding event lisners to the start button

