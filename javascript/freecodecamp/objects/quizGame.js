const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital city of Spain?",
    choices: ["Madrid", "Rome", "Berlin"],
    answer: "Madrid"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Mathematics",
    question: "What is 12 × 8?",
    choices: ["86", "96", "108", ],
    answer: "96"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Computer Processing Utility"
    ],
    answer: "Central Processing Unit"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
  }
];

function getRandomQuestion(questions){
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

console.log(getRandomQuestion(questions))