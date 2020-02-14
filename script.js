var count = 0;
var total = 10;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function water() {
console.log("hello");
  count++;
  var width = Math.round(count/total*100);
  if (width < 0) {
    width = 0;
  }
  if (width > 100) {
    width = 100;
  }
  var progress = document.getElementById('progress');

   progress.style.width = width +"%";

}

function openSetting() {
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeSetting() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
