  $(document).ready(function() {
  $("button#start_button").click(function() {
    startGame();
  $(this).off('click');
  });
  $("#gamespace").on("click", "img", function() {
    addScore();
  $(this).hide();
  });
  });	//end ready
</script>

<script>
var score=0;
var timeLeft=30;
var clock;
var t;
var count=0;
function startGame() {
  $("#gamespace").css("background-color", "gray");
  $("h1").css("color", "red");
  updateTimer();
  addMole();
}
  function randPos_x() {
  return Math.floor(Math.random() * 497);
}
function randPos_y() {
  return Math.floor(Math.random() * 315);
}
function addScore() {
    score = ++score;
    $("span#score").html(score + " pts");
  }
function addMole() {
  xPos = randPos_x();
  yPos = randPos_y();
  count++;
  $("#gamespace").append('<img id="img' + count + '" src="img/mole.png" style="top:'+yPos+'px;left:'+xPos+'px;" />');
  var moleId = "#img" + count;
  var tRand=Math.floor(Math.random() * 2000);
  var dRand=Math.floor((Math.random() * 3000) + 1000);
  t = setTimeout("addMole()", tRand);

  fadeTime = setTimeout(function(){
    $(moleId).fadeOut(1000);
    }, dRand);
}

function updateTimer() {
  if(timeLeft < 0) {
    clearTimeout(clock);
  clearTimeout(t);
  clearTimeout(fadeTime);
  $("#gamespace img").remove();
  alert("Game Over: Your Score is " + score);
  location.reload();
  }
  else {
    $("#timer").show();
    $("#timer").html(timeLeft + " seconds");
    clock = setTimeout("updateTimer()", 1000);
    --timeLeft;
  }
}                               
