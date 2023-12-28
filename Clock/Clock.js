const hours=document.querySelector(".hours")
const minutes=document.querySelector(".minutes")
const seconds=document.querySelector(".seconds")

setInterval(() => {
    var date= new Date();
    const newHours=date.getHours();
    const newMinutes=date.getMinutes();
    const newSeconds=date.getSeconds();

    hours.innerHTML=`${newHours -12 }:`;
    minutes.innerHTML=`${newMinutes}:`;
    seconds.innerHTML=`${newSeconds}`;
},1000);