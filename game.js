// welcome page

document.querySelector('.welcoming-model-start').addEventListener("click", start);

document.addEventListener("keypress", function(event) {
  whichKey(event.key);
});

function whichKey(key) {

  switch (key) {
    case " ":
      jump();
      break;
    }
  }

// Game Stopwatch

var stopwatch = document.querySelector('.stopwatch');
var ms = 0, s = 0, m = 0;
var timer;
var records = [];
var recordsNum = [];


function startTimer() {
  if(!timer) {
    timer = setInterval(run, 10);
  }
}

function run() {
  stopwatch.textContent = getTimer();
  ms++;
  if(ms == 100) {
    ms = 0;
    s++;
    if(s == 60) {
      s = 0;
      m++;
    }
  }
}

function pause() {
  stopTimer();
}

function stop() {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  stopwatch.textContent = getTimer();
}

function stopTimer() {
  clearInterval(timer);
  timer = false;

}

function getTimer() {
  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
  stop();
  startTimer();
}

// Get the player's record

    function lap() {
        recordsNum.push(parseInt((m < 10 ? "0" + m : m) + (s < 10 ? "0" + s : s) +  (ms < 10 ? "0" + ms : ms)));
        recordsBreaking(recordsNum);
      }

      function recordsBreaking(arr){
        records.push(getTimer());
        var last_element = records[records.length - 1];
        console.log( "your last " + last_element);
        console.log(records);
        var maxTime = records[0];

        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
          if(arr[i] > max){
            max = arr[i];
            maxTime = records[i];
          }
        }
        console.log("your max " + maxTime);

        if (maxTime == last_element){
          document.querySelector('.model-h3').innerHTML = "You hit the record!";
          document.querySelector('.para').innerHTML = "Your new record " + maxTime;
        }
        else {
          document.querySelector('.model-h3').innerHTML = "You Lost!";
          document.querySelector('.para').innerHTML = "Your time " + last_element + ". Your record " + maxTime;
        }
      }


// 123, start!

function start() {
  document.querySelector('.welcoming').style.display = "none";
  document.querySelector('.model-123').style.display = "block";
  stopwatch.style.display = "block";;


  setTimeout(function(){
    document.querySelector('#one').style.display = "block";

  setTimeout(function(){
    document.querySelector('#one').style.display = "none";
    document.querySelector('#two').style.display = "block";

    setTimeout(function(){
      document.querySelector('#two').style.display = "none";
      document.querySelector('#three').style.display = "block";

      setTimeout(function(){
  document.querySelector('#three').style.display = "none";
        document.querySelector('.model-123').style.display = "none";

// playing

        setTimeout(function(){
          theObject.classList.add("ob-animation");
          startTimer();
        },600)

      },500)

    },500)

  },500)

},500)
}

var myCharacter = document.querySelector('.character');
var theObject = document.querySelector('.object');

document.querySelector('.play-ground').onclick = jump;

  function jump() {
  myCharacter.classList.add("animation");
  setTimeout(function(){
    myCharacter.classList.remove("animation");
  },500)
  };


// You lost!

var losing = setInterval(function(){

var characterTop = parseInt(window.getComputedStyle(myCharacter).getPropertyValue("top"));
var objectLeft = parseInt(window.getComputedStyle(theObject).getPropertyValue("left"));


if (objectLeft < 80 && objectLeft > 0 && characterTop >= 170){
document.querySelector('.mask-lost').style.display = "block";
theObject.classList.remove("ob-animation");
stopwatch.style.display = "none";;
pause();
lap();
}

},10);
