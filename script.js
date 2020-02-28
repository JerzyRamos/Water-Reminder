var count = getCookie("count");
if (count =="") {
  count = 0;
}
var total;
var freqVal = getCookie("freq");
  if (freqVal == "") {
    total = 18;
  }
  else {
    total = 18/freqVal;
  }

function clearCookies() {
  setCookie("count",0,1);
  location.reload();
}

function start() {

  getTime();
  getDate();
  changeDefaultSetting();
  changeProgress();
  showBubble();
  var width = Math.round(count/total*100);
  document.getElementById('progress').style.width = width +"%";
  document.getElementById('progress-text').innerHTML = count+"/"+total;
  
}

function getTime() {
  var today = new Date();


  document.getElementById('clock').innerHTML =
  today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


  //return day + ' ' + months[index] + ' ' + year;

  var t = setTimeout(getTime, 59000);
}

function getDate() {
  var months = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var today = new Date();
  var day = today.getDate();
  var index = today.getMonth();
  document.getElementById('date').innerHTML = months[index] + ' ' + day;
}

function showBubble() {
  var bubble = document.getElementById("bubble");
  
  setTimeout(function(){
     bubble.style.opacity=1;
    }, 2000);

    setTimeout(function(){
      bubble.style.opacity=0;
     }, 5000);
}


function water() {
  if (count<total) {
    count++;
  }
  var width = Math.round(count/total*100);
  if (width < 0) {
    width = 0;
  }
  if (width > 100) {
    width = 100;
  }

  document.getElementById('progress').style.width = width +"%";
  document.getElementById('progress-text').innerHTML = count+"/"+total;

  setCookie("count",count,1);

}




function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function openSetting() {
  // document.getElementById("mySidebar").style.width = "400px";
  // document.getElementById("main").style.marginLeft = "400px";
  document.getElementById("mySidebar").style.transition = "0.3s";
  document.getElementById("mySidebar").style.transform = "translateX(0px)";
}


function closeSetting() {
  document.getElementById("mySidebar").style.transform = "translateX(420px)";
}

function saveSetting() {
  var goal = document.getElementById("goal");
  var goalVal = goal.options[goal.selectedIndex].value;
  setCookie("goal",goalVal,2);
  var freq = document.getElementById("frequency");
  var freqVal = freq.options[freq.selectedIndex].value;
  setCookie("freq",freqVal,2);
  changeProgress();
  closeSetting();
  //changeDefaultSetting();
}

function changeDefaultSetting() {
  var goalVal = getCookie("goal");
  var goal = document.getElementById("goal");

  for(var i, j = 0; i = goal.options[j]; j++) {
    if(i.value == goalVal) {
      goal.selectedIndex = j;
        break;
    }
  }
  var freqVal = getCookie("freq");
  var freq = document.getElementById("frequency");

  for(var i, j = 0; i = freq.options[j]; j++) {
    if(i.value == freqVal) {
      freq.selectedIndex = j;
        break;
    }
  }
}

function changeProgress() {
  var oldTotal = total;
  var freqVal = getCookie("freq");
  if (freqVal == "") {
    total = 18;
  }
  else {
    total = 18/freqVal;
  }
  count = Math.round(total / oldTotal *count);
  var width = Math.round(count/total*100);
  document.getElementById('progress').style.width = width +"%";
  document.getElementById('progress-text').innerHTML = count+"/"+total;

  setCookie("count",count,1);
  
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("history").setAttribute("max", today);


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) )* 10;
}

function getData(){

  document.getElementById("history_data").innerHTML = "Completed  " + "<span  style='color: #66382E; font-size:25px;'>"+ getRandomInt(11)+"%</span>" + "  of your goal";
}