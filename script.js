
let screen = document.querySelector('#display');
let buttons = document.querySelectorAll('.btn');
for (i of buttons) {
    i.addEventListener('click', function (){
        screen.value += this.getAttribute('data-value');
    })
}

let space = document.querySelector('#clear');
space.addEventListener('click', function(){
    screen.value = '';
} )

let   answer= document.querySelector('#equal');
answer.addEventListener('click', function(){
 screen.value = eval(screen.value);

})