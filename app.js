//variables
let username='';
let rounds;
let count=1;
let userscore=0;
let botscore=0;


    

// screen selector
const frontscreen=document.getElementById('frontpage');
 const rulescreen=document.getElementById('gamerules');
const gamescreen=document.getElementById('gamepage');
const gameoverscreen=document.getElementById('gameoverpage');
//setting current front screen
 rulescreen.style.display='none';
 gamescreen.style.display='none';
 gameoverscreen.style.display='none';
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
//set Listners to play button
const playgamebtn=document.getElementById('frontpagebtn');
playgamebtn.addEventListener('click',playbtnclicked);
function playbtnclicked(){
    // bgplay();
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
const startgamebtn=document.querySelector('.startgamebtn');
startgamebtn.addEventListener('click',startgamebtnclicked);
function startgamebtnclicked(){
    clicksound();
    rulescreen.style.display='none';
    gamescreen.style.display='block';
     username=document.getElementById('username').value;
     document.getElementById('userlabel').appendChild(document.createTextNode(username));
    document.getElementById('roundno').appendChild(document.createTextNode(count));
    document.getElementById('userscore').appendChild(document.createTextNode(userscore));
    document.getElementById('botscore').appendChild(document.createTextNode(botscore));
}
//game screen
const choosingboard=document.getElementById('options');
choosingboard.addEventListener('click',rungame);
//main game function
function rungame(e){
    clicksound();
    let userchoice,botchoice,results,message;
    rounds=document.getElementById('setrounds').value;
    userchoice=e.target.id; 
    console.log(userchoice)
    botchoice=numberToChoice(randomTonum());
    console.log(botchoice)
    results=decideWinner(userchoice,botchoice);
    console.log(results)
    message=finalMessage(results);
    console.log(message)
    rpsFrontEnd(userchoice,botchoice,message);
    setTimeout(function(){
        if(count<rounds){
            document.getElementById('finalmsg').textContent='';
            document.getElementById('compimg').src='';
            document.getElementById('userimg').src='';
            document.querySelector('.choosingboard').style.display='block';
            count+=1;
            document.getElementById('roundno').textContent='';
            document.getElementById('roundno').appendChild(document.createTextNode(count));
        }else{
            // alert('gameover')
            gamescreen.style.display='none'
            gameoverscreen.style.display='block';
            resultoutput(userscore,botscore);
        }
    },3000)   
}
function randomTonum(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','scissors'][number];
}
function decideWinner(userchoice,botchoice){
    var rpsDatabase={
        'rock':{'scissors':1,'rock':.5,'paper':0},
        'paper':{'rock':1,'paper':.5,'scissors':0},
        'scissors':{'paper':1,'scissors':.5,'rock':0}
    };
    var yourScore=rpsDatabase[userchoice][botchoice];
    var compScore=rpsDatabase[botchoice][userchoice];

    return[yourScore,compScore];
}
function finalMessage([yourScore,compScore]){

    if(yourScore === 0){
        botscore=eval(botscore+1);
        document.getElementById('botscore').textContent='';
        document.getElementById('botscore').appendChild(document.createTextNode(botscore));
        return{'message':'Computer Scores!!','color':'red'};
    }else if(yourScore === .5){
        botscore=eval(botscore+1);
        userscore=eval(userscore+1);
        document.getElementById('botscore').textContent='';
        document.getElementById('userscore').textContent='';
        document.getElementById('botscore').appendChild(document.createTextNode(botscore));
        document.getElementById('userscore').appendChild(document.createTextNode(userscore));
        return{'message':'Scores Tied!!','color':'yellow'};
    }else{
        userscore=eval(userscore+1);
        document.getElementById('userscore').textContent='';
        document.getElementById('userscore').appendChild(document.createTextNode(userscore));
        return{'message':'You Scores!!','color':'green'};
    }
}
function rpsFrontEnd(userchoice,botchoice,message){
    var imgDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.querySelector('.choosingboard').style.display='none';
    document.getElementById('userimg').setAttribute('src',`${imgDatabase[userchoice]}`);
    document.getElementById('compimg').setAttribute('src',`${imgDatabase[botchoice]}`);
    document.getElementById('finalmsg').setAttribute('style',`color:${message.color};`)
    document.getElementById('finalmsg').appendChild(document.createTextNode(`${message.message}`))
    console.log(document.getElementById('finalmsg'));

}
function resultoutput(userscore,botscore){
    console.log(userscore)
    if(userscore>botscore){
        document.getElementById('imgdecide').setAttribute('src','./images/youwin.gif');
        document.getElementById('imgdecide').setAttribute('style','width: 70%');
    }else if(userscore<botscore){
        document.getElementById('imgdecide').setAttribute('src','./images/youlose.gif');
    }else{
        document.getElementById('imgdecide').setAttribute('src','./images/draw.png');
        document.getElementById('imgdecide').setAttribute('style','margin: 3em auto');
        console.log(document.getElementById('imgdecide'))
    }
    document.getElementById('finaluser').textContent='';
    document.getElementById('finaluser').textContent=userscore;
    document.getElementById('finalbot').textContent='';
    document.getElementById('finalbot').textContent=botscore;

}







