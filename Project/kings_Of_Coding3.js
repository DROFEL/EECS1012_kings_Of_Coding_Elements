var click = new Audio('../Source/Sounds/Click_1.mp3');

var norm=0;
var normAI=0;
var userPick=1;
var aiPick=0;

var p1=0;
var p2=0;
function sett(){
    localStorage.setItem("p", 0);
    localStorage.setItem("c", 0);
}

function setValues(){
    localStorage.setItem('rounds',0);
}
function images1(){
    var player=0;
    var bot=0;
    var tie=0;
    if(localStorage.getItem('r10')==11){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r10')==12){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 2 Wins!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r10')==13){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 1 Wins!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r20')==21){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 1 Wins!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r20')==22){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r20')==23){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 2 Wins!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r30')==31){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 2 Wins!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r30');
    }
    else if(localStorage.getItem('r30')==32){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Player 1 Wins!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r30');
    }
    else if(localStorage.getItem('r30')==33){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r30');
    }





    if(localStorage.getItem('r11')==11){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Fire.png";
        tie++;

        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r11')==12){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 2 Wins!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r11')==13){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 1 Wins!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r21')==21){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 1 Wins!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r21')==22){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r21')==23){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 2 Wins!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r31')==31){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 2 Wins!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r31');
    }
    else if(localStorage.getItem('r31')==32){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Player 1 Wins!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r31');
    }
    else if(localStorage.getItem('r31')==33){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r31');
    }



    if(localStorage.getItem('r12')==11){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r12');
    }
    else if(localStorage.getItem('r12')==12){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 2 Wins!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r12');
    }
    else if(localStorage.getItem('r12')==13){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 1 Wins!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r12');
    }

    else if(localStorage.getItem('r22')==21){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 1 Wins!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r22')==22){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r22')==23){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 2 Wins!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r32')==31){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 2 Wins!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r32');
    }
    else if(localStorage.getItem('r32')==32){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Player 1 Wins!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r32');
    }
    else if(localStorage.getItem('r32')==33){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r32');
    }





    if(localStorage.getItem('r13')==11){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r13')==12){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 2 Wins!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r13')==13){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 1 Wins!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r23')==21){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 1 Wins!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r23')==22){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r23')==23){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 2 Wins!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r33')==31){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 2 Wins!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r33');
    }
    else if(localStorage.getItem('r33')==32){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Player 1 Wins!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r33');
    }
    else if(localStorage.getItem('r33')==33){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r33');
    }





    if(localStorage.getItem('r14')==11){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r14')==12){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 2 Wins!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r14')==13){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 1 Wins!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r24')==21){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 1 Wins!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r24')==22){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r24')==23){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 2 Wins!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r34')==31){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 2 Wins!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r34');
    }
    else if(localStorage.getItem('r34')==32){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Player 1 Wins!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r34');
    }
    else if(localStorage.getItem('r34')==33){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r34');
    }


    if(player>bot){
        var rans=parseInt(localStorage.getItem('p'));
        localStorage.setItem('p',++rans);
        document.getElementById("wL").innerHTML="Player 1 Wins!"
    }
    else if(bot>player){
        var rans=parseInt(localStorage.getItem('c'));
        localStorage.setItem('c',++rans);
        document.getElementById("wL").innerHTML="Player 2 Wins!"
    }
    else if(bot==player){
        document.getElementById("wL").innerHTML="Tie!"
    }
    var ans=parseInt(localStorage.getItem('c'));
    var ans1=parseInt(localStorage.getItem('p'));
    document.getElementById("you").innerHTML = ans1;
    document.getElementById("comp").innerHTML = ans;
}
function images(){
   
    var player=0;
    var bot=0;
    var tie=0;
    if(localStorage.getItem('r10')==11){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r10')==12){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Lose!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r10')==13){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Win!";
        document.getElementById("img1").src = "../Source/Fire.png";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r10');
    }
    else if(localStorage.getItem('r20')==21){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Win!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r20')==22){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r20')==23){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Lose!";
        document.getElementById("img1").src = "../Source/Wave.png";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r20');
    }
    else if(localStorage.getItem('r30')==31){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Lose!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r30');
    }
    else if(localStorage.getItem('r30')==32){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Win!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r30');
    }
    else if(localStorage.getItem('r30')==33){
        document.getElementById("img1").width = 100;
        document.getElementById("img2").width = 100;
        document.getElementById("img1").height = 100;
        document.getElementById("img2").height = 100;
        document.getElementById("one").innerHTML = "Tie!";
        document.getElementById("img1").src = "../Source/Wind.jpg";
        document.getElementById("img2").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r30');
    }





    if(localStorage.getItem('r11')==11){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Fire.png";
        tie++;

        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r11')==12){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Lose!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r11')==13){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Win!";
        document.getElementById("img3").src = "../Source/Fire.png";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r11');
    }
    else if(localStorage.getItem('r21')==21){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Win!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r21')==22){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r21')==23){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Lose!";
        document.getElementById("img3").src = "../Source/Wave.png";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r21');
    }
    else if(localStorage.getItem('r31')==31){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Lose!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r31');
    }
    else if(localStorage.getItem('r31')==32){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Win!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r31');
    }
    else if(localStorage.getItem('r31')==33){
        document.getElementById("img3").width = 100;
        document.getElementById("img4").width = 100;
        document.getElementById("img3").height = 100;
        document.getElementById("img4").height = 100;
        document.getElementById("two").innerHTML = "Tie!";
        document.getElementById("img3").src = "../Source/Wind.jpg";
        document.getElementById("img4").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r31');
    }



    if(localStorage.getItem('r12')==11){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r12');
    }
    else if(localStorage.getItem('r12')==12){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Lose!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r12');
    }
    else if(localStorage.getItem('r12')==13){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Win!";
        document.getElementById("img5").src = "../Source/Fire.png";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r12');
    }

    else if(localStorage.getItem('r22')==21){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Win!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r22')==22){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r22')==23){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Lose!";
        document.getElementById("img5").src = "../Source/Wave.png";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r22');
    }
    else if(localStorage.getItem('r32')==31){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Lose!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r32');
    }
    else if(localStorage.getItem('r32')==32){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Win!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r32');
    }
    else if(localStorage.getItem('r32')==33){
        document.getElementById("img5").width = 100;
        document.getElementById("img6").width = 100;
        document.getElementById("img5").height = 100;
        document.getElementById("img6").height = 100;
        document.getElementById("three").innerHTML = "Tie!";
        document.getElementById("img5").src = "../Source/Wind.jpg";
        document.getElementById("img6").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r32');
    }





    if(localStorage.getItem('r13')==11){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r13')==12){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Lose!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r13')==13){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Win!";
        document.getElementById("img7").src = "../Source/Fire.png";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r13');
    }
    else if(localStorage.getItem('r23')==21){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Win!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r23')==22){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r23')==23){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Lose!";
        document.getElementById("img7").src = "../Source/Wave.png";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r23');
    }
    else if(localStorage.getItem('r33')==31){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Lose!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r33');
    }
    else if(localStorage.getItem('r33')==32){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Win!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r33');
    }
    else if(localStorage.getItem('r33')==33){
        document.getElementById("img7").width = 100;
        document.getElementById("img8").width = 100;
        document.getElementById("img7").height = 100;
        document.getElementById("img8").height = 100;
        document.getElementById("four").innerHTML = "Tie!";
        document.getElementById("img7").src = "../Source/Wind.jpg";
        document.getElementById("img8").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r33');
    }





    if(localStorage.getItem('r14')==11){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Fire.png";
        tie++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r14')==12){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Lose!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Wave.png";
        bot++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r14')==13){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Win!";
        document.getElementById("img9").src = "../Source/Fire.png";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        player++;
        localStorage.removeItem('r14');
    }
    else if(localStorage.getItem('r24')==21){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Win!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Fire.png";
        player++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r24')==22){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Wave.png";
        tie++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r24')==23){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Lose!";
        document.getElementById("img9").src = "../Source/Wave.png";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        bot++;
        localStorage.removeItem('r24');
    }
    else if(localStorage.getItem('r34')==31){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Lose!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Fire.png";
        bot++;
        localStorage.removeItem('r34');
    }
    else if(localStorage.getItem('r34')==32){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Win!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Wave.png";
        player++;
        localStorage.removeItem('r34');
    }
    else if(localStorage.getItem('r34')==33){
        document.getElementById("img9").width = 100;
        document.getElementById("img10").width = 100;
        document.getElementById("img9").height = 100;
        document.getElementById("img10").height = 100;
        document.getElementById("five").innerHTML = "Tie!";
        document.getElementById("img9").src = "../Source/Wind.jpg";
        document.getElementById("img10").src = "../Source/Wind.jpg";
        tie++;
        localStorage.removeItem('r34');
    }


    if(player>bot){
        var rans=parseInt(localStorage.getItem('p'));
        localStorage.setItem('p',++rans);
        document.getElementById("wL").innerHTML="You Win!"
    }
    else if(bot>player){
        var rans=parseInt(localStorage.getItem('c'));
        localStorage.setItem('c',++rans);
        document.getElementById("wL").innerHTML="You Lose!"
    }
    else if(bot==player){
        document.getElementById("wL").innerHTML="Tie!"
    }
    var ans=parseInt(localStorage.getItem('c'));
    var ans1=parseInt(localStorage.getItem('p'));
    document.getElementById("you").innerHTML = ans1;
    document.getElementById("comp").innerHTML = ans;
}
function normal(){

    var outputObj=document.getElementById("output");
    randomElement();

    if(localStorage.getItem(norm)==1 && normAI==1 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r10',11);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2  && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r10',12);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3  && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        localStorage.setItem('r10',13);
        localStorage.removeItem(norm);
    }
   else if(localStorage.getItem(norm)==1 && normAI==1 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r11',11);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2  && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r11',12);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3  && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        localStorage.setItem('r11',13);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==1 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r12',11);
       
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2  && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r12',12);
        
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3  && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        localStorage.setItem('r12',13);
       
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==1 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r13',11);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2  && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r13',12);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3  && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        localStorage.setItem('r13',13);
        localStorage.removeItem(norm);
    }

    else if(localStorage.getItem(norm)==1 && normAI==1 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r14',11);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==2  && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r14',12);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==1 && normAI==3  && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Fire.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Win";
        localStorage.setItem('r14',13);
        localStorage.removeItem(norm);
    }

    else if(localStorage.getItem(norm)==2 && normAI==1  && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.setItem('r20',21);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==1  && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.setItem('r21',21);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==1  && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.setItem('r22',21);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==1  && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.setItem('r23',21);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==1  && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Win";
        localStorage.setItem('r24',21);
        localStorage.removeItem(norm);
    }


    else if(localStorage.getItem(norm)==2 && normAI==2 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r20',22);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==2 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r21',22);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==2 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r22',22);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==2 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r23',22);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==2 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem('r24',22);
        localStorage.removeItem(norm);
    }



    else if(localStorage.getItem(norm)==2 && normAI==3 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r20',23);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==3 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r21',23);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==3 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r22',23);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==3 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r23',23);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==2 && normAI==3 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Wave.png";
        document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r24',23);
        localStorage.removeItem(norm);
    }
    else if(localStorage.getItem(norm)==3 && normAI==1  && localStorage.getItem('rounds')==0){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r30',31);
        localStorage.removeItem(norm);
   }
    else if(localStorage.getItem(norm)==3 && normAI==1  && localStorage.getItem('rounds')==1){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r31',31);
        localStorage.removeItem(norm);
  }
    else if(localStorage.getItem(norm)==3 && normAI==1  && localStorage.getItem('rounds')==2){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r32',31);
        localStorage.removeItem(norm);  
     }

    else if(localStorage.getItem(norm)==3 && normAI==1  && localStorage.getItem('rounds')==3){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r33',31);
        localStorage.removeItem(norm);
   }
    else if(localStorage.getItem(norm)==3 && normAI==1  && localStorage.getItem('rounds')==4){
        document.getElementById("myImg").src = "../Source/Wind.jpg";
        document.getElementById("myImg"+2).src = "../Source/Fire.png";
        outputObj.innerHTML="Lose";
        localStorage.setItem('r34',31);
        localStorage.removeItem(norm);
  }




  else if(localStorage.getItem(norm)==3 && normAI==2 && localStorage.getItem('rounds')==0){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wave.png";
    outputObj.innerHTML="Win";
    localStorage.setItem('r30',32);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==2 && localStorage.getItem('rounds')==1){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wave.png";
    outputObj.innerHTML="Win";
    localStorage.setItem('r31',32);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==2 && localStorage.getItem('rounds')==2){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wave.png";
    outputObj.innerHTML="Win";
    localStorage.setItem('r32',32);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==2 && localStorage.getItem('rounds')==3){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wave.png";
    outputObj.innerHTML="Win";
    localStorage.setItem('r33',32);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==2 && localStorage.getItem('rounds')==4){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wave.png";
    outputObj.innerHTML="Win";
    localStorage.setItem('r34',32);
    localStorage.removeItem(norm);
}



   else if(localStorage.getItem(norm)==3 && normAI==3 && localStorage.getItem('rounds')==0){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
    outputObj.innerHTML="Tie";
    localStorage.setItem('r30',33);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==3 && localStorage.getItem('rounds')==1){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
    outputObj.innerHTML="Tie";
    localStorage.setItem('r31',33);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==3 && localStorage.getItem('rounds')==2){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
    outputObj.innerHTML="Tie";
    localStorage.setItem('r32',33);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==3 && localStorage.getItem('rounds')==3){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
    outputObj.innerHTML="Tie";
    localStorage.setItem('r33',33);
    localStorage.removeItem(norm);
}
else if(localStorage.getItem(norm)==3 && normAI==3 && localStorage.getItem('rounds')==4){
    document.getElementById("myImg").src = "../Source/Wind.jpg";
    document.getElementById("myImg"+2).src = "../Source/Wind.jpg";
    outputObj.innerHTML="Tie";
    localStorage.setItem('r34',33);
    localStorage.removeItem(norm);
}




    if(localStorage.getItem('rounds')==4){
        window.location.href = "../html/score_Page.html";
        localStorage.removeItem('rounds');
    
}
    var test=parseInt(localStorage.getItem('rounds'));
    localStorage.setItem('rounds',++test);
}


function fire(){
    localStorage.setItem(norm,1);
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
  if(localStorage.getItem('impo')==1 && localStorage.getItem('rounds')==0){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
    localStorage.setItem('r10',12);
    localStorage.removeItem('impo');
    alert("hi");
  }
  else if(localStorage.getItem('impo')==1 && localStorage.getItem('rounds')==1){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
    localStorage.setItem('r11',12);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==1 && localStorage.getItem('rounds')==2){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
    localStorage.setItem('r12',12);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==1 && localStorage.getItem('rounds')==3){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
    localStorage.setItem('r13',12);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==1 && localStorage.getItem('rounds')==4){
    document.getElementById("myImg3").src = "../Source/Fire.png";
    document.getElementById("myImg4").src = "../Source/Wave.png";
    localStorage.setItem('r14',12);
    localStorage.removeItem('impo');
  }



  else if(localStorage.getItem('impo')==2 && localStorage.getItem('rounds')==0){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
    localStorage.setItem('r20',23);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==2 && localStorage.getItem('rounds')==1){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
    localStorage.setItem('r21',23);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==2 && localStorage.getItem('rounds')==2){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
    localStorage.setItem('r22',23);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==2 && localStorage.getItem('rounds')==3){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
    localStorage.setItem('r23',23);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==2 && localStorage.getItem('rounds')==4){
    document.getElementById("myImg3").src = "../Source/Wave.png";
    document.getElementById("myImg4").src = "../Source/Wind.jpg";
    localStorage.setItem('r24',23);
    localStorage.removeItem('impo');
  }




  else if(localStorage.getItem('impo')==3 && localStorage.getItem('rounds')==0){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
    localStorage.setItem('r30',31);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==3 && localStorage.getItem('rounds')==1){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
    localStorage.setItem('r31',31);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==3 && localStorage.getItem('rounds')==2){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
    localStorage.setItem('r32',31);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==3 && localStorage.getItem('rounds')==3){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
    localStorage.setItem('r33',31);
    localStorage.removeItem('impo');
  }
  else if(localStorage.getItem('impo')==3 && localStorage.getItem('rounds')==4){
    document.getElementById("myImg3").src = "../Source/Wind.jpg";
    document.getElementById("myImg4").src = "../Source/Fire.png";
    localStorage.setItem('r34',31);
    localStorage.removeItem('impo');
  }




  if(localStorage.getItem('rounds')==4){
    window.location.href = "../html/score_Page_I.html";
    localStorage.removeItem('rounds');

    }
    var test=parseInt(localStorage.getItem('rounds'));
    localStorage.setItem('rounds',++test);
}
function fireI(){
    localStorage.setItem('impo',1);
 
}
 function waterI(){
     localStorage.setItem('impo',2);
     
}
 function windI(){
     localStorage.setItem('impo',3);
   
}




function playerVplayer(){
    var outputObj=document.getElementById("out");
    if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r10",11);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r11",11);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r12",11);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r13",11);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r14",11);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }







    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r10",12);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r11",12);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r12",12);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r13",12);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r14",12);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }



    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r10",13);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r11",13);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r12",13);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r13",13);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==1 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Fire.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r14",13);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }


    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r20",21);
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r21",21);
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r22",21);
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r23",21);
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r24",21);
        outputObj.innerHTML="Player 1 Win";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }




    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r20",22);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r21",22);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r22",22);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r23",22);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r24",22);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }



    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r20",23);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r21",23);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r22",23);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r23",23);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==2 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wave.png";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Player 1 Lose";
        localStorage.setItem("r24",23);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }


    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r30",31);
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r31",31);
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r32",31);
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r33",31);
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==1 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Fire.png";
        localStorage.setItem("r34",31);
        outputObj.innerHTML="Player 1 Lose";
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }





    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r30",32);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r31",32);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r32",32);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r33",32);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==2 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wave.png";
        outputObj.innerHTML="Player 1 Win";
        localStorage.setItem("r34",32);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }


    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==0){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r30",33);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==1){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r31",33);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==2){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r32",33);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==3){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r33",33);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }
    else if(localStorage.getItem("p1")==3 && localStorage.getItem(p2)==3 && localStorage.getItem('rounds')==4){
        document.getElementById("myImg5").src = "../Source/Wind.jpg";
        document.getElementById("myImg6").src = "../Source/Wind.jpg";
        outputObj.innerHTML="Tie";
        localStorage.setItem("r34",33);
        localStorage.removeItem("p1");
        localStorage.removeItem(p2);
    }






    if(localStorage.getItem('rounds')==4){
        window.location.href = "../html/score_Page_P.html";
        localStorage.removeItem('rounds');

    }
    var test=parseInt(localStorage.getItem('rounds'));
    localStorage.setItem('rounds',++test);
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

