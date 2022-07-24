const useQuestionGen = (difficulty) => {
    
    const randomNumberGen = (upperLimit) => {
        const number = Math.floor(upperLimit * Math.random());
        return number;
    };
    
    const operatorArray = ["+", "-", "x", "/"];
    
    const randomArrayItem = (array) => {
        const arrayLength = array.length;
        const randomItem = Math.floor(arrayLength * Math.random());
        return array[randomItem];
    };

    const operation = randomArrayItem(operatorArray);
    const randomNumber1 = randomNumberGen(difficulty);
    const randomNumber2 = randomNumberGen(difficulty-1)+1;

    const answer = 
        operation === "/"
        ? randomNumber1 % randomNumber2 === 0   // To always generate a question who's answer is an integer.
            ? randomNumber1 > randomNumber2
                ? randomNumber1 / randomNumber2
                : randomNumber2 / randomNumber1
            : randomNumber1 > randomNumber2
                ? (randomNumber1 - (randomNumber1 % randomNumber2)) / randomNumber2
                : (randomNumber2 - (randomNumber2 % randomNumber1)) / randomNumber1

        : operation === "x" 
            ? randomNumber1  * randomNumber2

        : operation === "-"
            ? randomNumber1  - randomNumber2

        : randomNumber1  + randomNumber2

    const problemStatement =
        operation === "/"
        ? randomNumber1 % randomNumber2 === 0
            ? randomNumber1 > randomNumber2
                ? randomNumber1 + " / " + randomNumber2
                : randomNumber2 + " / " + randomNumber1
            : randomNumber1 > randomNumber2
                ? randomNumber1 - (randomNumber1 % randomNumber2) + " / " + randomNumber2
                : randomNumber2 - (randomNumber2 % randomNumber1) + " / " + randomNumber1

        : randomNumber1 + " " + operation + " " + randomNumber2;

    return(
        {answer, problemStatement}
    )
}

export default useQuestionGen