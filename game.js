
function change_name(){

Player_1=localStorage.getItem("player_1");

Player_2=localStorage.getItem("player_2");

document.getElementById("player1_name" ).innerHTML=Player_1 + " = " ;
document.getElementById("player2_name").innerHTML=Player_2 + " = "  ;

document.getElementById("qustion_player1").innerHTML=Player_1 ;
document.getElementById("qustion_player2").innerHTML=Player_2 ;
}
