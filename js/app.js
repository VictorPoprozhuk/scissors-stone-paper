const userScore = document.querySelector('.header__score__user');
const compScore = document.querySelector('.header__score__comp');
const winOrLose = document.querySelector('.text');
const userChoise = document.querySelectorAll('.choise');
const newGame = document.querySelector('.btn__new-game');
const compChoisePic = document.querySelector('.comp-choise');

const arrCompChoise = ['s', 'c', 'p'];

const arrPictures = [
   './img/stone.png',
   './img/scissors.png',
   './img/paper.png',
];
userScore.textContent = 0;
compScore.textContent = 0;

userChoise.forEach((item) => {
   item.addEventListener('click', () => {
      setTimeout(() => {
         const userMotion = item.dataset.choise;
         const compMotion = compChoise();
         winOrLose.textContent = '';
         const variant = userMotion + compMotion;

         switch (variant) {
            case 'ss':
            case 'cc':
            case 'pp':
               winOrLose.textContent = 'Draw';
               compChoisePic.style.background = 'yellow';
               break;

            case 'ps':
            case 'cp':
            case 'sc':
               userScore.textContent++;
               winOrLose.textContent = 'Win';
               compChoisePic.style.background = 'green';

               break;
            case 'sp':
            case 'cs':
            case 'pc':
               compScore.textContent++;
               winOrLose.textContent = 'Lose';
               compChoisePic.style.background = 'red';
               break;
         }

         setTimeout(() => {
            winOrLose.textContent = 'Your move';
            compChoisePic.src = './img/choise2.png';
            compChoisePic.style.background = 'none';
         }, 500);
      }, 500);
   });
});

function compChoise() {
   const random = Math.floor(Math.random() * 3);
   compChoisePic.src = arrPictures[random];
   compChoisePic.style.background = 'none';
   return arrCompChoise[random];
}

newGame.addEventListener('click', () => {
   compScore.textContent = 0;
   userScore.textContent = 0;
});

// let ms = prompt();
// function delay(ms) {
//    return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(ms).then(() => alert(`выполнилось через ${ms / 1000} секунды`));

function dontGiveMeFive(num1, num2) {
   let arr = [];
   for (let i = num1; i < num2; i++) {
      if (i === 5) {
      } else arr.push(i);
   }
   return console.log(arr);
}
dontGiveMeFive(4, 55);
