
//------------- left panel (include numbers & clear)
let numbersContainer = document.getElementById(“leftPanel”);
let inputContainer = document.getElementById(“input”);
// console.log(numbersContainer);
let tempArr = [];
numbersContainer.addEventListener(“click”, (event) => {
  if (event.target.innerHTML === “C”) {
    inputContainer.innerHTML = “”;
  } else {
    inputContainer.innerHTML += event.target.innerHTML;
  }
  console.log(inputContainer.innerHTML);
});
//------------- operator panel(includes + ; - ; * ; /)
let operatorsContainer = document.getElementById(“operators”);
let operatorArr = [];
operatorsContainer.addEventListener(“click”, (eventOp) => {
  operatorArr.push(eventOp.target.innerHTML);
  tempArr.push(+inputContainer.innerHTML);
  inputContainer.innerHTML = “”;
  console.log(operatorArr);
  console.log(tempArr);
});
//--------------- result button (Math operation)
let equalContainer = document.getElementById(“result”);
let calcResult = 0;
equalContainer.addEventListener(“click”, (eventEq) => {
  tempArr.push(+inputContainer.innerHTML);
  for (let i = 0; i < operatorArr.length; i++) {
    if (operatorArr[i] === “+”) {
      console.log(“add operator”);
      console.log(tempArr[i]);
      console.log(tempArr[i + 1]);
      calcResult = tempArr[i] + tempArr[i + 1];
    } else if (operatorArr[i] === “-”) {
      calcResult = tempArr[i] - tempArr[i + 1];
    } else if (operatorArr[i] === “*”) {
      calcResult = tempArr[i] * tempArr[i + 1];
    } else if (operatorArr[i] === “/”) {
      calcResult = tempArr[i] / tempArr[i + 1];
    }
  }
  console.log(calcResult);
  inputContainer.innerHTML = calcResult;
});
let clearContainer = document.getElementById(“clear”);
clearContainer.addEventListener(“click”, (eventClear) => {
  tempArr = [];
  operatorArr = [];
  inputContainer.innerHTML = “”;
});


Message Mohamed Darmussa










