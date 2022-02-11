console.log("this is my app for alarm")
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

var audio = document.getElementById('myAudio');
function ringBell(){
  audio.play();
}
function setAlarm(e){
   e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
   console.log(`setting alarm for ${alarmDate}......`);
   now = new Date();
let timeToAlarm = alarmDate - now ;
   console.log(timeToAlarm);

   if(timeToAlarm >= 0){
       setTimeout(() =>{
         ringBell();
       },timeToAlarm);
   }

}










