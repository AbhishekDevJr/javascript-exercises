const repeatString = function(testString, testNum) {

    let outputString = '';
    if(testNum < 0){
        return 'ERROR';
    }
    else{    
    for(let i=0; i<testNum; i++){
        outputString = outputString + testString;
    }
    return outputString;
}
};

// Do not edit below this line
module.exports = repeatString;
