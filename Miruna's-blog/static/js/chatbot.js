let questions = [
    {
        question: "Do you feel happy? ",
        options: {
            a: "Yes ",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    {
        question: "Are you a morning person or a night owl? ",
        options: {
            a: "Morning person ",
            b: "Night Owl"
        },
        correctAnswer: "a",
        correctResponse: "Rise and shine! Mornings are also when I'm most productive and energized",
        incorrectResponse: "Nighttime is when I come alive! I get my best work done when the world is quiet"
    },
    {
        question: "Do you enjoy listening to music? ",
        options: {
            a: "Yes ",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Me too! It makes me 10x more productive!",
        incorrectResponse: "Wrong answer you monster >:("
    },
    {
        question: "Do you prefer Android or iOS for your smartphone? ",
        options: {
            a: "Android all the way ",
            b: "Nah, I prefer iOS"
        },
        correctAnswer: "a",
        correctResponse: "Android user here! I love the freedom it offers",
        incorrectResponse: "I'm not an iOS user but I do understand the sleekness of it"
    },
    {
        question: "Would you recommend this website to others? ",
        options: {
            a: "Absolutely! ",
            b: "Unfortunately no"
        },
        correctAnswer: "a",
        correctResponse: "Thank you for supporting the website!",
        incorrectResponse: "I am sorry to hear that!"
    }
];

let currentQuestionIndex = 0;
let questionsAnswered = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

function displayQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}.${currentQuestion.options[key]}`).join('');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Question:</strong> ${currentQuestion.question}${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

function scrollChatContainerToBottom(){
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event){
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>User:</strong>${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong>`;
    if (userResponse === currentQuestion.correctAnswer){
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = '' ;
    displayQuestion();

    scrollChatContainerToBottom();
});