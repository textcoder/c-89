
var score = 0;
function update(){
    score = score+1;
    document.getElementById("updateScore").innerHTML="my score " + score;
}

function save(){
    localStorage.setItem("myScore", score);
}
function nextPage(){
    window.location="activity_2.html";

}
