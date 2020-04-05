function setTime() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = currentTime.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(() => {
  setTime()
}, 1000);