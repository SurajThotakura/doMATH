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

const randomQuestionGen = (difficulty) => {
    const operation = randomArrayItem(operatorArray);
    const randomNumber1 = randomNumberGen(difficulty);
    const randomNumber2 = randomNumberGen(difficulty-11)+1;

    const answer = 
        operation === "/"
        ? randomNumber1 % randomNumber2 === 0
            ? randomNumber1 > randomNumber2
                ? randomNumber1 / randomNumber2
                : randomNumber2 / randomNumber1
            : randomNumber1 > randomNumber2
                ? (randomNumber1 - (randomNumber1 % randomNumber2)) / randomNumber2
                : (randomNumber2 - (randomNumber2 % randomNumber1)) / randomNumber1

        : operation === "*" 
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

const useQuestionGen = (difficulty) => {
    const questionArray = [...new Array(120)].map(x=>randomQuestionGen(difficulty));
    return { questionArray }
}

export default useQuestionGen