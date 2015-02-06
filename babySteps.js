var myTotal = 0;  //Variable to hold your total

for(var i=2, len=process.argv.length; i<len; i++){
    myTotal += Number(process.argv[i]);
}

console.log(myTotal);
