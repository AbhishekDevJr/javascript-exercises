const palindromes = function (stringParam) {
    let realString = stringParam.replace(/\s/g,'');
    realString = realString.replace(/!/g, '');
    //realString = realString.replace(/./g, '');
    realString = realString.replaceAll('.', '');
    realString = realString.replaceAll(',', '');
    realString = realString.toLowerCase();
    console.log(realString);
    let n = realString.length;
    let checkVar = false;
    if(realString.length % 2 === 0){
        for(let i=0; i<realString.length; i++){
            if(realString[i] === realString[n-i-1]){
                checkVar = true;
            }else{
                checkVar = false;
                break;
            }
        }
        return checkVar;
    }else{
        for(let i=0; i<n; i++){
            if(realString[i] === realString[n-i-1]){
                checkVar = true;
            }else{
                checkVar = false;
                break;
            }
        }
        return checkVar;
    }
};

// let checkCall = palindromes('hey .  , , T,!!h!ere');
// console.log(checkCall);


// Do not edit below this line
module.exports = palindromes;
