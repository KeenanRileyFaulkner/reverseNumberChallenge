const printDigits = num => {
    let answer = 0;
    let smallestDigit;
    while(num > 0) {
        smallestDigit = num % 10;
        answer = (answer * 10) + smallestDigit;
        num = Math.floor(num / 10);
        console.log(smallestDigit);
    }
    console.log("----------");
    return answer;
}

printDigits(5);
printDigits(413);
printDigits(999);
printDigits(414);
printDigits(10242);