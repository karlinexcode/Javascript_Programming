'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!'
// .value is used to select input element
document.querySelector('.guess').value = 23;
*/
const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; /*the score is declared with let so it can be changed in the code*/
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    }else if(guess > secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😢 You Lost!';
        }
        
    }else if (guess < secretNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😢 You Lost!';
        }

    }
})