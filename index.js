const calculator = document.querySelector(".calculator_frame");
let onScreenValue = '';
let onMemoryValue = '';
let operationType = '';

calculator.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("calculator_col")) {
    const value = target.dataset.type;
    
    if (value === 'number'){
      onScreenValue = onScreenValue + target.innerHTML;
      //alert(onScreenValue);
    } else {
      switch (value){
        case 'erase':{
          eraseFunction();
          break;
        };
        case 'percent':{
          operationType = '%';
          break;
        };
        case 'delete':{
          onScreenValue = onScreenValue.slice(0, onScreenValue.length-1);
          if (onScreenValue === '0'){
            onScreenValue = '';
          }
          break;
        };
        case 'divide':{
          operationType = '/';
          break;
        };
        case 'multiply':{
          operationType = '*';
          break;
        };
        case 'minus':{
          operationType = '-';
          break;
        };
        case 'plus':{
          operationType = '+';
          break;
        };
        case 'dot': {
          if (onScreenValue.indexOf('.') === -1){
            if (onScreenValue ===''){
                onScreenValue = '0';
            }
            onScreenValue = onScreenValue + '.';
          }
          //alert(onScreenValue);
          break;
        };
        case 'history':break;
        case 'equal':{
          operationType = '=';
          break;
        };
      }
    }
    // if (value === "erase"){
    //   eraseFunction();
    // }
    // else if (value === 'percent'){ 
    //   operation = '%';
    //   percentFunction();
    // }
    // else if (value === 'delete'){
    //   onScreenValue = onScreenValue.slice(0, onScreenValue.length-1);
    //   if (onScreenValue === '0'){
    //     onScreenValue = '';
    //   }
    //   //alert(onScreenValue);
    // }
    // else if (value === 'divide'){
    //   operation = '/';
    //   divideFunction();
    // }
    // else if (value === 'multiply'){
    //   operation = '*';
    //   multiplyFunction();
    // }
    // else if (value === 'minus'){
    //   operation = '-';
    //   minusFunction();
    // }
    // else if (value === 'plus'){
    //   operation = '+';
    //   plusFunction();
    // }
    // else if (value === 'dot'){            
    //   if (onScreenValue.indexOf('.') === -1){
    //     if (onScreenValue ===''){
    //       onScreenValue = '0';
    //     }
    //     onScreenValue = onScreenValue + '.';
    //     //alert(onScreenValue);
    //   }      
    // }
    // else if (value === 'equal'){
    //   operation = '=';
    //   equalFunction();
    // }
    
  }
});

function eraseFunction(){
  onMemoryValue = '';
  onScreenValue = '';
  operation = '';
}

function percentFunction(){
  if (onMemoryValue === ''){
    onMemoryValue = onScreenValue;
    onScreenValue = '';
    operation = '%';
  } else {
    
  }
  alert("percent");
}

function divideFunction(){
  if (onMemoryValue === ''){
    onMemoryValue = onScreenValue;
    onScreenValue = '';
  } else {
    let result = Number(onMemoryValue)/Number(onScreenValue);
    onMemoryValue = result.toString;
    document.getElementById("calculator_total").value = result;
  }  
}

function multiplyFunction(){
  if (onMemoryValue === ''){
    onMemoryValue = onScreenValue;
    onScreenValue = '';
  } else {
    let result = Number(onMemoryValue)*Number(onScreenValue);
    onMemoryValue = result.toString;
    alert(result)
  }  
}

function minusFunction(){
  if (onMemoryValue === ''){
    onMemoryValue = onScreenValue;
    onScreenValue = '';
    operation = '-';
  } else {
    let result = Number(onMemoryValue) - Number(onScreenValue);
    onMemoryValue = result.toString;
    onScreenValue = '';    
    alert(result)
  }  
}

function plusFunction(){
  if (onMemoryValue === ''){
    onMemoryValue = onScreenValue;
    onScreenValue = '';
    operation = '+';
  } else {
    let result = Number(onMemoryValue) + Number(onScreenValue);
    onMemoryValue = result.toString;
    onScreenValue = '';
    alert(result)
  } 
}

function equalFunction(){
  let result = Number;
  if (operation === '+'){
    result = Number(onMemoryValue) + Number(onScreenValue);
    onMemoryValue = result.toString;
  } else if (operation === '-'){
    result = Number(onMemoryValue) - Number(onScreenValue);
    onMemoryValue = result.toString;
  } else if (operation === '*'){
    result = Number(onMemoryValue) * Number(onScreenValue);
    onMemoryValue = result.toString;
  } else if (operation === '/'){
    result = Number(onMemoryValue) / Number(onScreenValue);
    onMemoryValue = result.toString;
  }
  alert(Number(result));
}