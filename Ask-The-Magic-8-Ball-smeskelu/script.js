 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswer(answerType) {
	// Part 1: Your code here 👇
  // let min = getRandomNumber.value; <-- This is what I have done before heading to study hall.  After heading to study hall, the below are walk through codes that I have done with Dakota and barrent. First I read the instructions before trying to code and heading to studyhall. I got stuck on the instructions and writing the codes and I went to the study hall.
  if(answerType === "positive"){
    let index = getRandomNumber(0, positiveAnswers.length - 1)
    return positiveAnswers[index]
  } else if(answerType === "negative"){
    let index = getRandomNumber(0, negativeAnswers.length - 1)
    return negativeAnswers[index]
  } else if(answerType === "maybe"){
    let index = getRandomNumber(0, maybeAnswers.length - 1)
    return maybeAnswers[index]
  }

}

chooseRandomAnswerTest();

function chooseRandomAnswerType() {
	// Part 2: Your code here 👇
  let randomNumber = getRandomNumber(0, 2)

  if(randomNumber === 0){
    return "positive"
  } else if(randomNumber === 1){
    return "negative"
  } else {
    return "maybe"
  }
  // below of commented codes are the ones that I have tried in the study hall while barrent helped other students. 
  // let index2 = generateRandomNumber(0, positiveAnswers.length - 2)
// if(answerTypeTest === "positive"){
//   let index2 = generateRandomNumber(0, positiveAnswers.length - 2)
//   return positiveAnswers[index2]
// } else if (answerTypeTest === "negative"){
//   let index2 = generateRandomNumber(0, negativeAnswers.length - 2)
//   return negativeAnswers[index2]
// } else if(answerTypeTest === "maybe"){
//   let index2 = generateRandomNumber(0, maybeAnswers.length - 2)
//   return maybeAnswers[index2]
// }
}

 chooseRandomAnswerTypeTest();

function onAnswerRequested() {
  // Part 3: Your code here 👇
	if(getQuestionText() == ""){
    supplyAnswer(NO_QUESTION_WARNING)
  } else {
    let chosenAnswerType = chooseRandomAnswerType()
    let chosenAnswer = chooseRandomAnswer(chosenAnswerType)
    supplyAnswer(chosenAnswer)
  }
}

 onAnswerRequestedTest();