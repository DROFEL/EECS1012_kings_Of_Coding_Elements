var click = new Audio('../Source/Sounds/Click_1.mp3');

var norm=0;
var normAI=0;
var userPick=1;
var aiPick=2;
localStorage.setItem(userPick,1);
localStorage.setItem(aiPick,2);

var impo=0;

var p1=0;
var p2=0;
function getE(){
    localStorage.setItem(userPick,localStorage.getItem(userPick)+2);
    localStorage.setItem(aiPick,localStorage.getItem(userPick)+2);
}
 
function normal(){

    var outputObj=document.getElementById("output");
    randomElement();
    if(localStorage.getItem(aiPick)==10){
        window.onload = function() {
            location.href = "https://www.javascripttutorial.net/";
        }
    }
    
    if(localStorage.getItem(norm)==1 && normAI==1){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        document.getElementById("img"+localStorage.getItem(userPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).src = "../Source/Fire.png";
        document.getElementById("img"+localStorage.getItem(aiPick)).src = "../Source/Fire.png";
        getE();
        alert(localStorage.getItem(aiPick));
        localStorage.removeItem(aiPick);
        
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        document.getElementById("img"+localStorage.getItem(userPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).src = "../Source/Fire.png";
        document.getElementById("img"+localStorage.getItem(aiPick)).src = "../Source/Wave.png";
        getE();
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        document.getElementById("img"+localStorage.getItem(userPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).width = 50;
        document.getElementById("img"+localStorage.getItem(aiPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).height = 50;
        document.getElementById("img"+localStorage.getItem(userPick)).src = "../Source/Fire.png";
        document.getElementById("img"+localStorage.getItem(aiPick)).src = "../Source/Wind.jpg";
        getE();
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==1){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==2){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==3){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==3 && normAI==1){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==3 && normAI==2){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Win";
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==3 && normAI==3){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.removeItem(norm);
    }
}
function fire(){
    localStorage.setItem(norm,1);
    document.getElementById("myImg").src = "../Source/Fire.png";
    document.getElementById("myImg2").src = "../Source/Wave.png";
}
 function water(){
     localStorage.setItem(norm,2);
     
}
 function wind(){
     localStorage.setItem(norm,3);
     
}
 function randomElement(){
    return normAI =Math.floor((Math.random() * 3) + 1);
}






function impossible(){
  if(localStorage.getItem(impo)==1){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
  }
  else if(localStorage.getItem(impo)==2){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
  }
  else if(localStorage.getItem(impo)==3){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
  }
}
function fireI(){
    localStorage.setItem(impo,1);
 
}
 function waterI(){
     localStorage.setItem(impo,2);
     
}
 function windI(){
     localStorage.setItem(impo,3);
   
}




function playerVplayer(){
    var outputObj=document.getElementById("out");
    if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Player 1 Lose";
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
}

function firep1(){
    localStorage.setItem("p1",1);
 
}
 function waterp1(){
     localStorage.setItem("p1",2);
     
}
 function windp1(){
     localStorage.setItem("p1",3);
   
}
function firep2(){
    localStorage.setItem(p2,1);
 
}
 function waterp2(){
     localStorage.setItem(p2,2);
     
}
 function windp2(){
     localStorage.setItem(p2,3);
   
}

function load(){
    click.play();
}

function loadSounds(){
    
}

function playSound(name){
    
    audio.play();
}

