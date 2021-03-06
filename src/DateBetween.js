let DateBetween = function(startDate, endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);


  let between = [];

  days > 0 ? between.push(`<span id="countdown-days">${days} day${days > 1 ? 's' : ''}</span>`) : false;
  hours > 0 ? between.push(`<span id="countdown-hours">${hours} hour${hours > 1 ? 's' : ''}</span>`) : false;
  minutes > 0 ? between.push(`<span id="countdown-minutes">${minutes} minute${minutes > 1 ? 's' : ''}</span>`) : false;
  seconds > 0 ? between.push(`<span id="countdown-seconds">${seconds} second${seconds > 1 ? 's' : ''}</span>`) : false;

  return between.join(' ');
}

module.exports = DateBetween;
