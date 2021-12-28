// Don't place an event listener on each individual button. Instead, use addEventListenter and attach a listener to a group of buttons. Use the event object to determine which button was clicked.



const numberNode = document.getElementsByClassName('leftPanel')[0];
console.dir(numberNode);
const input = document.getElementById('input');
console.dir(input);
const operators = document.getElementsByClassName('operators')[0];
console.dir(operators);



numberNode.addEventListener('click', (event) => {
  input.innerHTML += event.target.innerHTML;
  })

  let inputArr = [];
  let operatorsArr = [];
  //for loop over these to operate one on the other in the operators loop dpo a conditional statement for each of the operations-- start with addition -- then the others
  operators.addEventListener('click', (event) => {
   
    inputArr.push(input.innerHTML);
    
    operatorsArr.push(event.target.innerHTML);
    
    })

const equalSign = document.getElementById('result')

equalSign.addEventListener('click', (event) => {
    console.dir(operatorsArr, inputArr);
    for (i =0; i < operatorsArr.length; i++) {
        console.dir("click operator is", operatorsArr[i], inputArr[i], inputArr[i + 1])
    }
})