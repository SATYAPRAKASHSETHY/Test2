/*const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;

// Start Fullscreen
const goFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Start quiz functionality
  goFullscreen();
  startTimer();
});

// Prevent Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  alert("Quiz Completed!");
  // Collect answers here
  // Optionally send to server or process results
};

*/

/*const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const finalScoreContainer = document.getElementById("final-score");
const scoreElement = document.getElementById("score");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;

// Start Fullscreen
const goFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Start quiz functionality
  goFullscreen();
  startTimer();
});

// Prevent Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score based on selected answers
  const answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
  };

  // Define correct answers
  const correctAnswers = {
    q1: "4", // Correct answer for question 1
    q2: "Paris", // Correct answer for question 2
  };

  // Calculate score
  if (answers.q1 === correctAnswers.q1) score++;
  if (answers.q2 === correctAnswers.q2) score++;

  // Submit the score to the server
  submitQuizAnswers(answers);

  // Show final score
  finishQuiz();
});

// Submit Quiz Answers to the Server (same as before)
const submitQuizAnswers = (answers) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score, // Send the score to the server
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.message);  // Success message from server
  })
  .catch((error) => {
    console.error("Error:", error);
  });
};

// Finish Quiz (Hide content and show score)
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  finalScoreContainer.classList.remove("hidden");
  scoreElement.innerText = `Your Score: ${score} / 2`;  // Show score (out of total questions)
};
*/

/*
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const finalScoreContainer = document.getElementById("final-score");
const scoreElement = document.getElementById("score");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;

// Start Fullscreen
const goFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Start quiz functionality
  goFullscreen();
  startTimer();
});

// Prevent Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score based on selected answers (assuming 20 points total)
  score = 0;
  const answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
  };

  // Define correct answers (with total 20 points)
  const correctAnswers = {
    q1: "4", // Correct answer for question 1 (10 points)
    q2: "Paris", // Correct answer for question 2 (10 points)
  };

  // Calculate score (10 points for each correct answer)
  if (answers.q1 === correctAnswers.q1) score += 10; // 10 points for correct answer
  if (answers.q2 === correctAnswers.q2) score += 10; // 10 points for correct answer

  // Ensure score is capped at 20
  score = Math.min(score, 20);

  // Submit the answers and score to the server
  submitQuizAnswers(answers, score);

  // Show final score
  finishQuiz(score);
});

// Submit Quiz Answers to the Server (including score)
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.message);  // Success message from server
  })
  .catch((error) => {
    console.error("Error:", error);
  });
};

// Finish Quiz (Hide content and show score)
const finishQuiz = (score) => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  finalScoreContainer.classList.remove("hidden");
  scoreElement.innerText = `Your Score: ${score} / 20`;  // Show score (out of 20)
};
*/
/*
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const reportDetails = document.getElementById("report-details");
const closeButton = document.getElementById("close-button");
const downloadButton = document.getElementById("download-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;

// Start Fullscreen
const goFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Prevent Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  goFullscreen();
  startTimer();
});

// Handle Quiz Submission
const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  score = 0;

  const answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    // Add remaining answers here
  };

  const correctAnswers = { q1: "4", q2: "Paris" }; // Add more correct answers

  if (answers.q1 === correctAnswers.q1) score += 1;
  if (answers.q2 === correctAnswers.q2) score += 1;

  finishQuiz();
});

// Finish Quiz and Show Report
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");

  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    score: score,
  };

  reportDetails.innerHTML = `
    <p><strong>Name:</strong> ${userInfo.name}</p>
    <p><strong>Roll Number:</strong> ${userInfo.roll}</p>
    <p><strong>Email:</strong> ${userInfo.email}</p>
    <p><strong>Batch:</strong> ${userInfo.batch}</p>
    <p><strong>Score:</strong> ${userInfo.score} / 20</p>
  `;

  downloadButton.addEventListener("click", () => downloadReport(userInfo));
  closeButton.addEventListener("click", () => window.location.reload());
};

// Download Report as Text File
const downloadReport = (userInfo) => {
  const reportContent = `
    Name: ${userInfo.name}
    Roll Number: ${userInfo.roll}
    Email: ${userInfo.email}
    Batch: ${userInfo.batch}
    Score: ${userInfo.score} / 20
  `;
  const blob = new Blob([reportContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "quiz_report.txt";
  link.click();
};
*/
/*
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const reportContainer = document.getElementById("report-container");
const reportName = document.getElementById("report-name");
const reportRoll = document.getElementById("report-roll");
const reportEmail = document.getElementById("report-email");
const reportBatch = document.getElementById("report-batch");
const reportScore = document.getElementById("report-score");
const timerElement = document.getElementById("timer");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;

// Restrict Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Fullscreen Mode
const goFullscreen = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
};

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  goFullscreen();
  startTimer();
});

// Handle Quiz Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect Answers and Calculate Score
  score = 0;
  const answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
  };

  const correctAnswers = {
    q1: "4",
    q2: "Paris",
  };

  if (answers.q1 === correctAnswers.q1) score += 1;
  if (answers.q2 === correctAnswers.q2) score += 1;

  // Cap Score at 20
  score = Math.min(score, 20);

  // Submit Answers to the Server
  submitQuizAnswers(answers, score);

  // Generate and Show Report
  generateReport();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Generate Report
const generateReport = () => {
  const userName = document.getElementById("name").value;
  const userRoll = document.getElementById("roll").value;
  const userEmail = document.getElementById("email").value;
  const userBatch = document.getElementById("batch").value;

  reportName.innerText = `Name: ${userName}`;
  reportRoll.innerText = `Roll Number: ${userRoll}`;
  reportEmail.innerText = `Email: ${userEmail}`;
  reportBatch.innerText = `Batch: ${userBatch}`;
  reportScore.innerText = `Score: ${score} / 20`;

  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");
};

// Download Report as Image
downloadButton.addEventListener("click", () => {
  html2canvas(document.getElementById("report")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "quiz-report.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

// Close Report
closeButton.addEventListener("click", () => {
  reportContainer.classList.add("hidden");
  window.location.reload();
});

// Finish Quiz on Timeout
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizForm.submit(); // Auto-submit quiz when time runs out
};
*/

/*
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;

// Questions with Correct Answers
const questions = [
  // Python OOP
  { question: "What is the correct way to define a constructor in Python?", options: ["__construct__", "__init__", "constructor", "__build__"], correct: "__init__" },
  { question: "What is 'self' in Python?", options: ["A keyword for global variables", "Represents the instance of the class", "A static method", "A private method"], correct: "Represents the instance of the class" },
  { question: "Which Python statement is used to create a class?", options: ["def", "class", "new", "object"], correct: "class" },
  { question: "How can you call a parent class constructor in Python?", options: ["super()", "this()", "base()", "parent()"], correct: "super()" },
  { question: "Which decorator is used to define a static method in Python?", options: ["@classmethod", "@staticmethod", "@abstractmethod", "@property"], correct: "@staticmethod" },

  // General OOP
  { question: "Which of these is not a principle of OOP?", options: ["Encapsulation", "Polymorphism", "Branching", "Inheritance"], correct: "Branching" },
  { question: "What does 'this' keyword represent?", options: ["Current object", "Parent class", "Global object", "Static object"], correct: "Current object" },
  { question: "What is the purpose of encapsulation?", options: ["To hide data", "To inherit properties", "To allow branching", "To perform overriding"], correct: "To hide data" },
  { question: "What is polymorphism in OOP?", options: ["Many forms of an object", "Data hiding", "Object cloning", "Method creation"], correct: "Many forms of an object" },
  { question: "Which feature allows reusing code in OOP?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correct: "Inheritance" },

  // Coding MCQs
  { question: "What is the output of `print(3 ** 2)` in Python?", options: ["6", "9", "8", "None"], correct: "9" },
  { question: "What will `len('Python')` return?", options: ["5", "6", "7", "Error"], correct: "6" },
  { question: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correct: "Tuple" },
  { question: "What is the output of `2 + 3 * 4` in Python?", options: ["20", "14", "24", "None"], correct: "14" },
  { question: "Which keyword is used to define a function in Python?", options: ["func", "define", "def", "function"], correct: "def" },

  // Coding Tricky Questions
  { question: "What is the output of `print(type([]))` in Python?", options: ["'list'", "'tuple'", "'set'", "None"], correct: "'list'" },
  { question: "Which of the following is used to create an object in Python?", options: ["Class name", "Object name", "Instance name", "self"], correct: "Class name" },
  { question: "What will `print(10 // 3)` return?", options: ["3.33", "3", "4", "None"], correct: "3" },
  { question: "What does the `is` keyword compare in Python?", options: ["Values", "Memory locations", "Data types", "Objects"], correct: "Memory locations" },
  { question: "Which is the correct syntax for defining a private variable in Python?", options: ["_variable", "__variable", "private variable", "var"], correct: "__variable" },
];

// Shuffle questions for randomness
const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Fullscreen Mode
const goFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Shuffle and Load Questions
  shuffleQuestions();
  loadQuestions();

  // Start quiz functionality
  startTimer();
});

// Load Questions Dynamically
const loadQuestions = () => {
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ""; // Clear previous content

  questions.forEach((q, index) => {
    const questionHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    quizForm.innerHTML += questionHTML;
  });

  quizForm.innerHTML += '<button type="submit">Finish Quiz</button>';
};

// Prevent Copy-Paste, Right-Click, and Tab Switching
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score
  const answers = {};
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`)?.value;
    answers[`q${index + 1}`] = selectedOption;
    if (selectedOption === q.correct) score++;
  });

  // Submit answers and score to the server
  submitQuizAnswers(answers, score);

  // Show report
  finishQuiz();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");

  // Fill Report Details
  document.getElementById("report-name").innerText = `Name: ${document.getElementById("name").value}`;
  document.getElementById("report-roll").innerText = `Roll Number: ${document.getElementById("roll").value}`;
  document.getElementById("report-email").innerText = `Email: ${document.getElementById("email").value}`;
  document.getElementById("report-batch").innerText = `Batch: ${document.getElementById("batch").value}`;
  document.getElementById("report-score").innerText = `Score: ${score} / ${questions.length}`;

  // Convert Report to Image and Download
  downloadButton.addEventListener("click", () => {
    html2canvas(document.getElementById("report")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QuizReport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // Close Button
  closeButton.addEventListener("click", () => window.location.reload());
};
*/

/* Good
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");


// Questions with Correct Answers
const questions = [
  // Python OOP
  { question: "What is the correct way to define a constructor in Python?", options: ["__construct__", "__init__", "constructor", "__build__"], correct: "__init__" },
  { question: "What is 'self' in Python?", options: ["A keyword for global variables", "Represents the instance of the class", "A static method", "A private method"], correct: "Represents the instance of the class" },
  { question: "Which Python statement is used to create a class?", options: ["def", "class", "new", "object"], correct: "class" },
  { question: "How can you call a parent class constructor in Python?", options: ["super()", "this()", "base()", "parent()"], correct: "super()" },
  { question: "Which decorator is used to define a static method in Python?", options: ["@classmethod", "@staticmethod", "@abstractmethod", "@property"], correct: "@staticmethod" },

  // General OOP
  { question: "Which of these is not a principle of OOP?", options: ["Encapsulation", "Polymorphism", "Branching", "Inheritance"], correct: "Branching" },
  { question: "What does 'this' keyword represent?", options: ["Current object", "Parent class", "Global object", "Static object"], correct: "Current object" },
  { question: "What is the purpose of encapsulation?", options: ["To hide data", "To inherit properties", "To allow branching", "To perform overriding"], correct: "To hide data" },
  { question: "What is polymorphism in OOP?", options: ["Many forms of an object", "Data hiding", "Object cloning", "Method creation"], correct: "Many forms of an object" },
  { question: "Which feature allows reusing code in OOP?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correct: "Inheritance" },

  // Coding MCQs
  { question: "What is the output of `print(3 ** 2)` in Python?", options: ["6", "9", "8", "None"], correct: "9" },
  { question: "What will `len('Python')` return?", options: ["5", "6", "7", "Error"], correct: "6" },
  { question: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correct: "Tuple" },
  { question: "What is the output of `2 + 3 * 4` in Python?", options: ["20", "14", "24", "None"], correct: "14" },
  { question: "Which keyword is used to define a function in Python?", options: ["func", "define", "def", "function"], correct: "def" },

  // Coding Tricky Questions
  { question: "What is the output of `print(type([]))` in Python?", options: ["'list'", "'tuple'", "'set'", "None"], correct: "'list'" },
  { question: "Which of the following is used to create an object in Python?", options: ["Class name", "Object name", "Instance name", "self"], correct: "Class name" },
  { question: "What will `print(10 // 3)` return?", options: ["3.33", "3", "4", "None"], correct: "3" },
  { question: "What does the `is` keyword compare in Python?", options: ["Values", "Memory locations", "Data types", "Objects"], correct: "Memory locations" },
  { question: "Which is the correct syntax for defining a private variable in Python?", options: ["_variable", "__variable", "private variable", "var"], correct: "__variable" },
];

// Shuffle questions for randomness
const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Enforce Fullscreen Mode
const enforceFullscreen = () => {
  const docEl = document.documentElement;
  if (!document.fullscreenElement) {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
    fullscreenEnabled = true;
  }
};

// Monitor Fullscreen Exit
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    // Hide the quiz content if fullscreen is exited
    quizContainer.classList.add("hidden");
    alert("You have exited fullscreen mode. The quiz will only be visible in fullscreen.");
    enforceFullscreen();
  } else {
    // Show the quiz content if fullscreen is re-entered
    quizContainer.classList.remove("hidden");
  }
});

// Prevent Tab Switching
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    tabSwitchCount++;
    alert("Warning: Switching tabs is not allowed during the quiz!");
    if (tabSwitchCount >= 2) {
      alert("You have switched tabs multiple times. Your quiz will now be submitted.");
      finishQuiz();
    }
  }
});

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Shuffle and Load Questions
  shuffleQuestions();
  loadQuestions();

  // Start quiz functionality
  enforceFullscreen();
  startTimer();
});

// Load Questions Dynamically
const loadQuestions = () => {
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ""; // Clear previous content

  questions.forEach((q, index) => {
    const questionHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    quizForm.innerHTML += questionHTML;
  });

  quizForm.innerHTML += '<button type="submit">Finish Quiz</button>';
};

// Prevent Copy-Paste, Right-Click, and Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score
  const answers = {};
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`)?.value;
    answers[`q${index + 1}`] = selectedOption;
    if (selectedOption === q.correct) score++;
  });

  // Submit answers and score to the server
  submitQuizAnswers(answers, score);

  // Show report
  finishQuiz();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");

  // Fill Report Details
  document.getElementById("report-name").innerText = `Name: ${document.getElementById("name").value}`;
  document.getElementById("report-roll").innerText = `Roll Number: ${document.getElementById("roll").value}`;
  document.getElementById("report-email").innerText = `Email: ${document.getElementById("email").value}`;
  document.getElementById("report-batch").innerText = `Batch: ${document.getElementById("batch").value}`;
  document.getElementById("report-score").innerText = `Score: ${score} / ${questions.length}`;

  // Convert Report to Image and Download
  downloadButton.addEventListener("click", () => {
    html2canvas(document.getElementById("report")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QuizReport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // Close Button
  closeButton.addEventListener("click", () => window.location.reload());
};
*/
/* LAST
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");
const fullscreenButton = document.getElementById("fullscreen-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;
let tabSwitchCount = 0; // Tracks tab switches
let fullscreenEnabled = false;

// Questions with Correct Answers
const questions = [
  // Python OOP
  { question: "What is the correct way to define a constructor in Python?", options: ["__construct__", "__init__", "constructor", "__build__"], correct: "__init__" },
  { question: "What is 'self' in Python?", options: ["A keyword for global variables", "Represents the instance of the class", "A static method", "A private method"], correct: "Represents the instance of the class" },
  { question: "Which Python statement is used to create a class?", options: ["def", "class", "new", "object"], correct: "class" },
  { question: "How can you call a parent class constructor in Python?", options: ["super()", "this()", "base()", "parent()"], correct: "super()" },
  { question: "Which decorator is used to define a static method in Python?", options: ["@classmethod", "@staticmethod", "@abstractmethod", "@property"], correct: "@staticmethod" },

  // General OOP
  { question: "Which of these is not a principle of OOP?", options: ["Encapsulation", "Polymorphism", "Branching", "Inheritance"], correct: "Branching" },
  { question: "What does 'this' keyword represent?", options: ["Current object", "Parent class", "Global object", "Static object"], correct: "Current object" },
  { question: "What is the purpose of encapsulation?", options: ["To hide data", "To inherit properties", "To allow branching", "To perform overriding"], correct: "To hide data" },
  { question: "What is polymorphism in OOP?", options: ["Many forms of an object", "Data hiding", "Object cloning", "Method creation"], correct: "Many forms of an object" },
  { question: "Which feature allows reusing code in OOP?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correct: "Inheritance" },

  // Coding MCQs
  { question: "What is the output of `print(3 ** 2)` in Python?", options: ["6", "9", "8", "None"], correct: "9" },
  { question: "What will `len('Python')` return?", options: ["5", "6", "7", "Error"], correct: "6" },
  { question: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correct: "Tuple" },
  { question: "What is the output of `2 + 3 * 4` in Python?", options: ["20", "14", "24", "None"], correct: "14" },
  { question: "Which keyword is used to define a function in Python?", options: ["func", "define", "def", "function"], correct: "def" },

  // Coding Tricky Questions
  { question: "What is the output of `print(type([]))` in Python?", options: ["'list'", "'tuple'", "'set'", "None"], correct: "'list'" },
  { question: "Which of the following is used to create an object in Python?", options: ["Class name", "Object name", "Instance name", "self"], correct: "Class name" },
  { question: "What will `print(10 // 3)` return?", options: ["3.33", "3", "4", "None"], correct: "3" },
  { question: "What does the `is` keyword compare in Python?", options: ["Values", "Memory locations", "Data types", "Objects"], correct: "Memory locations" },
  { question: "Which is the correct syntax for defining a private variable in Python?", options: ["_variable", "__variable", "private variable", "var"], correct: "__variable" },
];

// Shuffle questions for randomness
const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Enforce Fullscreen Mode
const enforceFullscreen = () => {
  const docEl = document.documentElement;
  if (!document.fullscreenElement) {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
    fullscreenEnabled = true;
  }
};

// Show the fullscreen button if fullscreen is exited
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    quizContainer.classList.add("hidden");
    fullscreenButton.classList.remove("hidden");
    alert("You have exited fullscreen mode. Please re-enter fullscreen to continue the quiz.");
  } else {
    quizContainer.classList.remove("hidden");
    fullscreenButton.classList.add("hidden");
  }
});

// Fullscreen Button Click Event
fullscreenButton.addEventListener("click", () => {
  enforceFullscreen();
});


// Prevent Tab Switching
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    tabSwitchCount++;
    alert("Warning: Switching tabs is not allowed during the quiz!");
    if (tabSwitchCount >= 2) {
      alert("You have switched tabs multiple times. Your quiz will now be submitted.");
      finishQuiz();
      fullscreenButton.classList.add("hidden"); // Hide fullscreen button after 2 tab switches

    }
  }
});

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Shuffle and Load Questions
  shuffleQuestions();
  loadQuestions();

  // Start quiz functionality
  startTimer();
  enforceFullscreen();
  
});

// Load Questions Dynamically
const loadQuestions = () => {
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ""; // Clear previous content

  questions.forEach((q, index) => {
    const questionHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    quizForm.innerHTML += questionHTML;
  });

  quizForm.innerHTML += '<button type="submit">Finish Quiz</button>';
};

// Prevent Copy-Paste, Right-Click, and Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");

  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score
  const answers = {};
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`)?.value;
    answers[`q${index + 1}`] = selectedOption;
    if (selectedOption === q.correct) score++;
  });

  // Submit answers and score to the server
  submitQuizAnswers(answers, score);

  // Show report
  finishQuiz();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");
  fullscreenButton.classList.add("hidden"); // Hide the fullscreen button
  


  // Fill Report Details
  document.getElementById("report-name").innerText = `Name: ${document.getElementById("name").value}`;
  document.getElementById("report-roll").innerText = `Roll Number: ${document.getElementById("roll").value}`;
  document.getElementById("report-email").innerText = `Email: ${document.getElementById("email").value}`;
  document.getElementById("report-batch").innerText = `Batch: ${document.getElementById("batch").value}`;
  document.getElementById("report-score").innerText = `Score: ${score} / ${questions.length}`;

  // Convert Report to Image and Download
  downloadButton.addEventListener("click", () => {
    
    html2canvas(document.getElementById("report")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QuizReport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // Close Button
  //closeButton.addEventListener("click", () => window.location.reload());
  // Close Button
  closeButton.addEventListener("click", () => {
    // Clear the flag on quiz completion
    localStorage.removeItem('quizStarted');
    window.location.reload();
    fullscreenButton.classList.add("hidden"); // Hide fullscreen button after 2 tab switches

  });
};
*/

/*  okkkkk
const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");
const fullscreenButton = document.getElementById("fullscreen-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;
let tabSwitchCount = 0; // Tracks tab switches



// Questions with Correct Answers
const questions = [
  // Python OOP
  { question: "What is the correct way to define a constructor in Python?", options: ["__construct__", "__init__", "constructor", "__build__"], correct: "__init__" },
  { question: "What is 'self' in Python?", options: ["A keyword for global variables", "Represents the instance of the class", "A static method", "A private method"], correct: "Represents the instance of the class" },
  { question: "Which Python statement is used to create a class?", options: ["def", "class", "new", "object"], correct: "class" },
  { question: "How can you call a parent class constructor in Python?", options: ["super()", "this()", "base()", "parent()"], correct: "super()" },
  { question: "Which decorator is used to define a static method in Python?", options: ["@classmethod", "@staticmethod", "@abstractmethod", "@property"], correct: "@staticmethod" },

  // General OOP
  { question: "Which of these is not a principle of OOP?", options: ["Encapsulation", "Polymorphism", "Branching", "Inheritance"], correct: "Branching" },
  { question: "What does 'this' keyword represent?", options: ["Current object", "Parent class", "Global object", "Static object"], correct: "Current object" },
  { question: "What is the purpose of encapsulation?", options: ["To hide data", "To inherit properties", "To allow branching", "To perform overriding"], correct: "To hide data" },
  { question: "What is polymorphism in OOP?", options: ["Many forms of an object", "Data hiding", "Object cloning", "Method creation"], correct: "Many forms of an object" },
  { question: "Which feature allows reusing code in OOP?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correct: "Inheritance" },

  // Coding MCQs
  { question: "What is the output of `print(3 ** 2)` in Python?", options: ["6", "9", "8", "None"], correct: "9" },
  { question: "What will `len('Python')` return?", options: ["5", "6", "7", "Error"], correct: "6" },
  { question: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correct: "Tuple" },
  { question: "What is the output of `2 + 3 * 4` in Python?", options: ["20", "14", "24", "None"], correct: "14" },
  { question: "Which keyword is used to define a function in Python?", options: ["func", "define", "def", "function"], correct: "def" },

  // Coding Tricky Questions
  { question: "What is the output of `print(type([]))` in Python?", options: ["'list'", "'tuple'", "'set'", "None"], correct: "'list'" },
  { question: "Which of the following is used to create an object in Python?", options: ["Class name", "Object name", "Instance name", "self"], correct: "Class name" },
  { question: "What will `print(10 // 3)` return?", options: ["3.33", "3", "4", "None"], correct: "3" },
  { question: "What does the `is` keyword compare in Python?", options: ["Values", "Memory locations", "Data types", "Objects"], correct: "Memory locations" },
  { question: "Which is the correct syntax for defining a private variable in Python?", options: ["_variable", "__variable", "private variable", "var"], correct: "__variable" },
];
// Shuffle questions for randomness
const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Enforce Fullscreen Mode
const enforceFullscreen = () => {
  const docEl = document.documentElement;
  if (!document.fullscreenElement) {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
  }
};

// Show the fullscreen button if fullscreen is exited
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) { // Check if fullscreen mode was exited
    if (tabSwitchCount >= 2) {
      finishQuiz();
      fullscreenButton.classList.add("hidden"); // Hide fullscreen button if user switched tabs twice
    } else {
      quizContainer.classList.add("hidden");
      fullscreenButton.classList.remove("hidden");
      alert("You have exited fullscreen mode. Please re-enter fullscreen to continue the quiz.");
    }
  } else {
    quizContainer.classList.remove("hidden");
    fullscreenButton.classList.add("hidden"); // Hide fullscreen button when in fullscreen mode
  }
});

// Fullscreen Button Click Event
fullscreenButton.addEventListener("click", () => {
  enforceFullscreen();
});

// Prevent Tab Switching
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    tabSwitchCount++;
    alert("Warning: Switching tabs is not allowed during the quiz!");
    if (tabSwitchCount >= 1) {
      alert("You have switched tabs multiple times. Your quiz will now be submitted.");
      finishQuiz();
      fullscreenButton.classList.add("hidden"); // Hide fullscreen button after 2 tab switches
    }
  }
});

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Shuffle and Load Questions
  shuffleQuestions();
  loadQuestions();

  // Start quiz functionality
  startTimer();
  enforceFullscreen();
});

// Load Questions Dynamically
const loadQuestions = () => {
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ""; // Clear previous content

  questions.forEach((q, index) => {
    const questionHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    quizForm.innerHTML += questionHTML;
  });

  quizForm.innerHTML += '<button type="submit">Finish Quiz</button>';
};

// Prevent Copy-Paste, Right-Click, and Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score
  const answers = {};
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`)?.value;
    answers[`q${index + 1}`] = selectedOption;
    if (selectedOption === q.correct) score++;
  });

  // Submit answers and score to the server
  submitQuizAnswers(answers, score);

  // Show report
  finishQuiz();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userInfo = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
    answers: answers,
    score: score,
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");
  fullscreenButton.classList.add("hidden"); // Hide the fullscreen button

  // Fill Report Details
  document.getElementById("report-name").innerText = `Name: ${document.getElementById("name").value}`;
  document.getElementById("report-roll").innerText = `Roll Number: ${document.getElementById("roll").value}`;
  document.getElementById("report-email").innerText = `Email: ${document.getElementById("email").value}`;
  document.getElementById("report-batch").innerText = `Batch: ${document.getElementById("batch").value}`;
  document.getElementById("report-score").innerText = `Score: ${score} / ${questions.length}`;

  // Convert Report to Image and Download
  downloadButton.addEventListener("click", () => {
    html2canvas(document.getElementById("report")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QuizReport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // Close Button
  closeButton.addEventListener("click", () => {
    // Clear the flag on quiz completion
    localStorage.removeItem('quizStarted');
    window.location.reload();
  });

};
*/


const form = document.getElementById("form");
const registrationForm = document.getElementById("registration-form");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("timer");
const reportContainer = document.getElementById("report-container");
const downloadButton = document.getElementById("download-button");
const closeButton = document.getElementById("close-button");
const fullscreenButton = document.getElementById("fullscreen-button");

let timeLeft = 20 * 60; // 20 minutes in seconds
let timerInterval;
let score = 0;
let tabSwitchCount = 0; // Tracks tab switches
let autoSubmitted = false; // Tracks if the quiz was auto-submitted

// Questions with Correct Answers
// Questions with Correct Answers
const questions = [
  // Python OOP
  { question: "What is the correct way to define a constructor in Python?", options: ["__construct__", "__init__", "constructor", "__build__"], correct: "__init__" },
  { question: "What is 'self' in Python?", options: ["A keyword for global variables", "Represents the instance of the class", "A static method", "A private method"], correct: "Represents the instance of the class" },
  { question: "Which Python statement is used to create a class?", options: ["def", "class", "new", "object"], correct: "class" },
  { question: "How can you call a parent class constructor in Python?", options: ["super()", "this()", "base()", "parent()"], correct: "super()" },
  { question: "Which decorator is used to define a static method in Python?", options: ["@classmethod", "@staticmethod", "@abstractmethod", "@property"], correct: "@staticmethod" },

  // General OOP
  { question: "Which of these is not a principle of OOP?", options: ["Encapsulation", "Polymorphism", "Branching", "Inheritance"], correct: "Branching" },
  { question: "What does 'this' keyword represent?", options: ["Current object", "Parent class", "Global object", "Static object"], correct: "Current object" },
  { question: "What is the purpose of encapsulation?", options: ["To hide data", "To inherit properties", "To allow branching", "To perform overriding"], correct: "To hide data" },
  { question: "What is polymorphism in OOP?", options: ["Many forms of an object", "Data hiding", "Object cloning", "Method creation"], correct: "Many forms of an object" },
  { question: "Which feature allows reusing code in OOP?", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correct: "Inheritance" },

  // Coding MCQs
  { question: "What is the output of `print(3 ** 2)` in Python?", options: ["6", "9", "8", "None"], correct: "9" },
  { question: "What will `len('Python')` return?", options: ["5", "6", "7", "Error"], correct: "6" },
  { question: "Which data type is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correct: "Tuple" },
  { question: "What is the output of `2 + 3 * 4` in Python?", options: ["20", "14", "24", "None"], correct: "14" },
  { question: "Which keyword is used to define a function in Python?", options: ["func", "define", "def", "function"], correct: "def" },

  // Coding Tricky Questions
  { question: "What is the output of `print(type([]))` in Python?", options: ["'list'", "'tuple'", "'set'", "None"], correct: "'list'" },
  { question: "Which of the following is used to create an object in Python?", options: ["Class name", "Object name", "Instance name", "self"], correct: "Class name" },
  { question: "What will `print(10 // 3)` return?", options: ["3.33", "3", "4", "None"], correct: "3" },
  { question: "What does the `is` keyword compare in Python?", options: ["Values", "Memory locations", "Data types", "Objects"], correct: "Memory locations" },
  { question: "Which is the correct syntax for defining a private variable in Python?", options: ["_variable", "__variable", "private variable", "var"], correct: "__variable" },
];

// Shuffle questions for randomness
const shuffleQuestions = () => {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
};

// Start Timer
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoSubmitted = true; // Mark as auto-submitted
      finishQuiz();
    }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.innerText = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
  }, 1000);
};

// Enforce Fullscreen Mode
const enforceFullscreen = () => {
  const docEl = document.documentElement;
  if (!document.fullscreenElement) {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    }
  }
};

// Handle Fullscreen Changes
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    if (tabSwitchCount >= 2) {
      autoSubmitted = true; // Mark as auto-submitted
      finishQuiz();
    } else {
      quizContainer.classList.add("hidden");
      fullscreenButton.classList.remove("hidden");
      alert("You have exited fullscreen mode. Please re-enter fullscreen to continue the quiz.");
    }
  } else {
    quizContainer.classList.remove("hidden");
    fullscreenButton.classList.add("hidden");
  }
});

// Fullscreen Button Click Event
fullscreenButton.addEventListener("click", () => {
  enforceFullscreen();
});

// Handle Tab Switching
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    tabSwitchCount++;
    alert("Warning: Switching tabs is not allowed during the quiz!");
    if (tabSwitchCount >= 1) {
      autoSubmitted = true; // Mark as auto-submitted
      // Submit user details and score to the server, even for auto-submissions
      submitQuizAnswers(answers, score);
      finishQuiz();
    }
  }
});

// Prevent Copy-Paste, Right-Click, and Keyboard Shortcuts
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.key === "Tab") {
    e.preventDefault();
    alert("Copy-paste and tab switching are disabled during the quiz!");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Handle Registration Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Save user details in localStorage
  const userDetails = {
    name: document.getElementById("name").value,
    roll: document.getElementById("roll").value,
    email: document.getElementById("email").value,
    batch: document.getElementById("batch").value,
  };
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  localStorage.setItem("quizStarted", "true"); // Flag quiz as started

  // Hide the registration form and show the quiz container
  registrationForm.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  // Shuffle and Load Questions
  shuffleQuestions();
  loadQuestions();

  // Start quiz functionality
  startTimer();
  enforceFullscreen();
});

// Load Questions Dynamically
const loadQuestions = () => {
  const quizForm = document.getElementById("quiz-form");
  quizForm.innerHTML = ""; // Clear previous content

  questions.forEach((q, index) => {
    const questionHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
        )
        .join("")}
    `;
    quizForm.innerHTML += questionHTML;
  });

  quizForm.innerHTML += '<button type="submit">Finish Quiz</button>';
};

// Handle Quiz Form Submission
const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Calculate score
  const answers = {};
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`)?.value;
    answers[`q${index + 1}`] = selectedOption;
    if (selectedOption === q.correct) score++;
  });

  // Submit answers and score to the server
  submitQuizAnswers(answers, score);

  // Show report
  finishQuiz();
});

// Submit Quiz Answers to the Server
const submitQuizAnswers = (answers, score) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (!userDetails) {
    console.error("User details not found in localStorage.");
    return;
  }

  const userInfo = {
    ...userDetails,
    answers: answers,
    score: score,
    status: autoSubmitted ? "Auto-submitted" : "Manually submitted",
  };

  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.message))
    .catch((error) => console.error("Error:", error));
};

// Finish Quiz
const finishQuiz = () => {
  clearInterval(timerInterval);
  quizContainer.classList.add("hidden");
  reportContainer.classList.remove("hidden");
  fullscreenButton.classList.add("hidden");

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (!userDetails) {
    console.error("User details not found in localStorage.");
    return;
  }
  
  document.getElementById("report-name").innerText = `Name: ${userDetails.name}`;
  document.getElementById("report-roll").innerText = `Roll Number: ${userDetails.roll}`;
  document.getElementById("report-email").innerText = `Email: ${userDetails.email}`;
  document.getElementById("report-batch").innerText = `Batch: ${userDetails.batch}`;
  document.getElementById("report-score").innerText = autoSubmitted
    ? `Score: Auto-submitted (${score} / ${questions.length})`
    : `Score: ${score} / ${questions.length}`;

  downloadButton.addEventListener("click", () => {
    html2canvas(document.getElementById("report")).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QuizReport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  closeButton.addEventListener("click", () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("quizStarted");
    window.location.reload();
  });
};


