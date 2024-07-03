const myMessage = document.querySelector('.myMessage');
// myMessage.innerText = 'This is a message in the DOM!'
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 )

console.log(myMessage);

const theMessageButton = document.querySelector('.theMessageButton');
// theMessageButton.addEventListener('click', function() {
//     alert("button clicked!")
// });
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const clearMessage = document.querySelector('.clearMessageButton');
const clear = document.querySelector('.clear');
clear.innerText = 'This is a message that will be cleared!'
clearMessage.addEventListener('click', function() {

setTimeout(function(){
    // clearMessageMessage.innerText = 'This is a message in the DOM!'
    clear.remove();
}, 3000 )

});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
    // myMessage.innerText = inputBox.value
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
const addfruitButton = document.querySelector(".addFriuts");
const fruitValue =  document.querySelector(".theFruitInputValue");

addfruitButton.addEventListener('click', function() {

    const li = document.createElement('li');
        li.innerText = fruitValue.value;
        fruitList.appendChild(li);
});
