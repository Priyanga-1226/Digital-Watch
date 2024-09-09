
let mytime=setInterval(updateTime,1000);


function updateTime(){

    let time = new Date(); 
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

  
    const a = document.getElementById("clock");
    a.innerHTML = hour + " : " + min + " : " + sec;
     
    

}