const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multi = document.getElementById('multi');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const doublez = document.getElementById('doublez');
const zero = document.getElementById('zero');
const displays = document.getElementById('input')
const allClear = document.getElementById('allClear');
const deletes = document.getElementById('delete');
const dot = document.getElementById('dot');
const division = document.getElementById('division');




//7
seven.addEventListener('click', ()=>{
    displays.value += '7';
});


//8
eight.addEventListener('click', ()=>{
    displays.value += '8';
});


//9
nine.addEventListener('click', ()=>{
    displays.value += '9';
});


//*
multi.addEventListener('click', ()=>{
    displays.value += '*';
});


//4
four.addEventListener('click', ()=>{
    displays.value += '4';
});


//5
five.addEventListener('click', ()=>{
    displays.value += '5';
});


//6
six.addEventListener('click', ()=>{
    displays.value += '6';
});

//-

minus.addEventListener('click', ()=>{
    displays.value += '-';
});


//1
one.addEventListener('click', ()=>{
    displays.value += '1';
});

//2

two.addEventListener('click', ()=>{
    displays.value += '2';
});

//3

three.addEventListener('click', ()=>{
    displays.value += '3';
});


//+
add.addEventListener('click', ()=>{
    displays.value += '+';
});

//00

doublez.addEventListener('click', ()=>{
    displays.value += '00';
});

//0
zero.addEventListener('click', ()=>{
    displays.value += '0';
});




allClear.addEventListener('click', ()=>{
    displays.value = '';
});



dot.addEventListener('click', ()=>{
    displays.value += '.';
});


deletes.addEventListener('click', ()=>{
    displays.value = displays.value.toString().slice(0, -1);
});


division.addEventListener('click', ()=>{
    displays.value += '/';
});


