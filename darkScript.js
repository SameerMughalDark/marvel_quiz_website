const quiz = [
    {
        'uniqueId': 'quiz1',
        'question': 'Who was Villian in Avengers 2nd Part ?',
        'a': 'Thanos',
        'b': 'Kang',
        'c': 'Loki',
        'd': 'Ultron',
        'answer': 'd'
    },
    {
        'uniqueId': 'quiz2',
        'question': 'Who broke Thors Hammer?',
        'a': 'Odin',
        'b': 'Thanos',
        'c': 'Hela',
        'd': 'Dr.Strange',
        'answer': 'c'
    },
    {
        'uniqueId': 'quiz3',
        'question': 'In which Year S.H.I.E.L.D found the Captian Steve Rogers?',
        'a': '2012',
        'b': '2011',
        'c': '1940',
        'd': '1947',
        'answer': 'b'
    },
    {
        'uniqueId': 'quiz4',
        'question': 'Who was said that \'I am inevitable\' ?',
        'a': 'Ultron',
        'b': 'Kang',
        'c': 'Iron-Man',
        'd': 'Thanos',
        'answer': 'd'
    },
    {
        'uniqueId': 'quiz5',
        'question': 'Who was bargained with Dormaamo? ',
        'a': 'Thanos',
        'b': 'Eternals',
        'c': 'Dr.Strange',
        'd': 'Wanda Maximof',
        'answer': 'c'
    },
    {
        'uniqueId': 'quiz6',
        'question': 'How Many Infinity Stones was needed in Gaunlet to Vanished all the world ? ',
        'a': '6',
        'b': '7',
        'c': '5',
        'd': '8',
        'answer': 'a'
    },
    {
        'uniqueId': 'quiz7',
        'question': 'Who killed Tony Stark Parents?',
        'a': 'Captian America',
        'b': 'SHIELD',
        'c': 'Winter Soldier',
        'd': 'Thanos',
        'answer': 'c'
    },
    {
        'uniqueId': 'quiz8',
        'question': 'What (MCU) people called the incident of Thanos in which  he vanished half population?',
        'a': 'Clap',
        'b': 'Blip',
        'c': 'Click',
        'd': 'Tint',
        'answer': 'b'
    },
    {
        'uniqueId': 'quiz9',
        'question': 'What is name of  Iron Man First AI Computer?',
        'a': 'Friday',
        'b': 'Happy',
        'c': 'Nandy',
        'd': 'Jarvis',
        'answer': 'd'
    },
    {
        'uniqueId': 'quiz10',
        'question': 'Dr Stephen Stranges accident happend in______Car',
        'a': 'Bughati',
        'b': 'American Muscle',
        'c': 'Ferrari',
        'd': 'Lamborghini',
        'answer': 'd'
    },
];

let rightAnswerCounting = 0;
let wrongAnswerCounting = 0;
let quizIndex = 0;
let totalQuestions = quiz.length;
let userAnswer;
let quezBox = document.getElementById('questioninBox');
let quizOptions = document.querySelectorAll('.options');
// Array.from(quizOptions).forEach((mcqsOptions)=>{console.log(mcqsOptions);})




// creating a function that load our Questions from Object 
const loadQuestion = () => {
   
    //  if our questions is end please show us our result
     if (quizIndex === totalQuestions) {
        // grabbing the parent div to remove all the questions at the end and showing result to user
       let parentDiv=document.getElementById('parentDiv');
       parentDiv.innerHTML=`<h3 align='center'>Congratulations! You Completed the Darks Marvel-Quiz</h3> <p>Your Number of Right Answer is: ${rightAnswerCounting}</p> <p>Number of wrong answer are ${wrongAnswerCounting}</p>`;
       
    }
    else {
    const questions = quiz[quizIndex];
    quezBox.innerText = `Q#${quizIndex + 1}:- ${questions.question}`;
    // Now i am grabbing the element which is  next to the querySelectorAll whoose class is options like our all labels
    // console.log(quizOptions[0].nextElementSibling.innerText);

    quizOptions[0].nextElementSibling.innerText = `${questions.a}`;
    quizOptions[1].nextElementSibling.innerText = `${questions.b}`;
    quizOptions[2].nextElementSibling.innerText = `${questions.c}`;
    quizOptions[3].nextElementSibling.innerText = `${questions.d}`;
    }
}

// creating function to check answer is right or not
const checkAnswers = () => {
    // Now  I am grabbing all mcqs inputs again with loop and check that user checked our radio button or not
    quizOptions.forEach((input) => {
        if (input.checked) {
          userAnswer= input.value;
        }
      

    })
}

//creating function for submit button to check user answers matches with our answers and also to move on next question and increment marks
const submitBtnLogic = () => {
         
        checkAnswers();
    let quizAnswer=quiz[quizIndex].answer;
    
    if (userAnswer === quizAnswer) {
        rightAnswerCounting++;
       
    }
    else {
        wrongAnswerCounting++;
       
    }
    //    for next question we just increment our quiz index means our object index 
    quizIndex++;
    loadQuestion();
    resetMyInputs();
    return;
}



// creating fucntion to reset my radio button inputs whenver we reached on next question
const resetMyInputs = () => {
    quizOptions.forEach((input) => {
        input.checked = false;

    })
}




let sbtn = document.getElementById('submitBtn');
sbtn.addEventListener('click', submitBtnLogic);
loadQuestion();
const onLoadTesting=()=>{
    bgSoundTurnOn=true;

}

