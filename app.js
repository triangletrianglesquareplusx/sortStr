function sortString(inputAsString){
    let myInput = inputAsString;
    let myInputAsArr = myInput.split(' ');
    let shortestStr = myInputAsArr.sort((a,b)=>a.length - b.length);
    return shortestStr[0].length;
    
}

console.log(sortString('i want to travel the world writing code one day'));