var count = getCookie("count");
if (count =="") {
  count = 0;
}
var total = 10;

function clearCookies() {
  setCookie("count",0,1);
  location.reload();
}

function start() {
  getTime();
  getDate();
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
  document.getElementById("mySidebar").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeSetting() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

