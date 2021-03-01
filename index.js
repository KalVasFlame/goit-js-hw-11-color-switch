const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}
let intervalId = null;
refs.stopBtn.disabled = true;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onStartBtnClick = () => { 
  intervalId = setInterval(function() {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = `${colors[randomIndex]}`;
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
}

const onStopBtnCLick = () => { 
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnCLick)
    
  
