const fibonacci = function(nthTerm) {
    if(nthTerm < 0){
        return 'OOPS';
    }else{
        nthTerm = parseInt(nthTerm);
        let fibonacciArray = [1,1];
        for(let i=2; i<100; i++){
            fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
        }
        //console.table(fibonacciArray);
        return (fibonacciArray[nthTerm-1]);
}   
};
//console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
