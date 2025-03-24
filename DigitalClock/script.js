const clock = document.querySelector("#clock");
console.log(clock)


// clock.innerHTML = currDate;
setInterval(function(){
  let date = new Date();
  const currDate = date.toLocaleTimeString();
  clock.innerHTML = currDate;
},1000);
