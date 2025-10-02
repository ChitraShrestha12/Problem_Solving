function fibonacciRec(n){
    if(n==0||n==1)return n;
    return fibonacciRec(n-1)+fibonacciRec(n-2);
}
console.log(fibonacciRec(5));
