const add = function(value1, value2) {
    let tempSum = value1 + value2;
    return tempSum;
};

const subtract = function(value1, value2) {
    let tempSub = value1 - value2;
    return tempSub;
};

const sum = function(arrayValue) {
    if(arrayValue.length === 0){
        return 0;
    }
    else{
        let sumArray = arrayValue.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sumArray;
    }
};

const multiply = function(arrayValue) {
    let mulArray = arrayValue.reduce((accumulator, currentValue) => {
        let tempMulVal = accumulator * currentValue;
        return tempMulVal;
    }, 1);
    return mulArray;
};

const power = function(value1, value2) {
    let tempVal = value1;
    for(let i=0; i<value2-1; i++){
        
        tempVal = tempVal*value1;
    }
    return tempVal;
};

const factorial = function(facVal) {
    let tempFac = 1;
    let z = facVal;
    if(facVal === 0 ){
        return 1;
    }else{
        for(let i=facVal; i>1; i--){
            tempFac = tempFac*i;
        }
        return tempFac;
    }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
