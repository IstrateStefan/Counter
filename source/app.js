/*    
let increase = document.querySelector('.increase');
let value = document.getElementById('value')


increase.addEventListener('click', function () {
    value.innerHTML++;
    if (value.innerHTML > 0) {
        value.style.color = 'green';
    } else if (value.innerHTML == 0) {
        value.style.color = 'black'
    }
});

const reset = document.querySelector('.reset');
reset.addEventListener('click', function () {
    value.innerHTML = 0;
    value.style.color = 'black'
});

const decrease = document.querySelector('.decrease');
decrease.addEventListener('click', function () {
    value.innerHTML--;
    if (value.innerHTML < 0) {
        value.style.color = 'red';
    } else if (value.innerHTML == 0) {
        value.style.color = 'black'
    }
});
*/


// set initial count
let count = 0;

// select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function (event) {
        const styles = event.currentTarget.classList
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }
        value.textContent = count;

        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else if (count === 0) {
            value.style.color = '#222';
        }
    });
});