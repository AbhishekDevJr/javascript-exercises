const reverseString = function(testString) {
    let outputString = '';

    for(let i=0; i<testString.length; i++){

        outputString = outputString + testString[(testString.length-1)-i];
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
