function add_user()
    {
      player_1=document.getElementById("input_1").value;
      player_2=document.getElementById("input_2").value;
      console.log("Player 1 is " + player_1 );
      console.log("Player 2 is " + player_2 );
         
      localStorage.setItem("player1",player_1);
      localStorage.setItem("player2",player_2);

      window.location="game.html";
    }
