var click = new Audio('../Source/Sounds/Click_1.mp3');

function normal(){

}
function playerVplayer(){

}
function impossible(){
  
}

function load(pageName){

    var body = document.getElementById("parent");
    body.classList.add("unload");
    unload();
    
    fetch('./' + pageName + '.html')
    .then(function(response){
        return response.text();
    })
    .then(function(text){
        console.log(text);
        body.classList.remove("unload");
        body.classList.add("load");
        body.innerHTML = text;
    });
}

function unload(){

    var body = document.getElementById("parent");
    body.innerHTML = '<div></div>';
}