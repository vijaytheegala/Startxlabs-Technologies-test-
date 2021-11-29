let totalSeconds = 546; //enter the number of seconds
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
console.log(hours + ":" + minutes + ":" + seconds);