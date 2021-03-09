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
let intId = null;
refs.stopBtn.disabled = true;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBtnStatus = (add, remove) => {
  refs.startBtn.disabled = add;
  refs.stopBtn.disabled = remove;
}

const onStartBtnCLick = () => { 
  intId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = `${colors[randomColor]}`
  }, 1000);
  changeBtnStatus(true, false)
  
}
const onStopBtnCLick = () => { 
  clearInterval(intId);
changeBtnStatus(false, true)  
}

refs.startBtn.addEventListener('click', onStartBtnCLick)
refs.stopBtn.addEventListener('click', onStopBtnCLick)
    
  
