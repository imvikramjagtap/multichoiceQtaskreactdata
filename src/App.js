import "./App.css";

import React, { useState } from "react";

function App() {
  const data = [
    {
      category: "Entertainment  Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the name of the hero in the 80s animated video game  Dragon s Lair  ",
      correct_answer: "Dirk the Daring",
      incorrect_answers: ["Arthur", "Sir Toby Belch", "Guy of Gisbourne"],
    },
    {
      category: "Animals",
      type: "multiple",
      difficulty: "easy",
      question: "What is the scientific name for modern day humans ",
      correct_answer: "Homo Sapiens",
      incorrect_answers: [
        "Homo Ergaster",
        "Homo Erectus",
        "Homo Neanderthalensis",
      ],
    },
    {
      category: "Entertainment  Books",
      type: "multiple",
      difficulty: "hard",
      question: "What is Ron Weasley s middle name ",
      correct_answer: "Bilius",
      incorrect_answers: ["Arthur", "John", "Dominic"],
    },
    {
      category: "Entertainment  Comics",
      type: "multiple",
      difficulty: "easy",
      question: "Who is the creator of the comic series  The Walking Dead  ",
      correct_answer: "Robert Kirkman",
      incorrect_answers: [
        "Stan Lee",
        "Malcolm Wheeler-Nicholson",
        "Robert Crumb",
      ],
    },
    {
      category: "Entertainment  Board Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "At the start of a standard game of the Monopoly  if you throw a double six  which square would you land on ",
      correct_answer: "Electric Company",
      incorrect_answers: ["Water Works", "Chance", "Community Chest"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of Jamaica ",
      correct_answer: "Kingston",
      incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "When did Jamaica recieve its independence from England  ",
      correct_answer: "1962",
      incorrect_answers: ["1492", "1963", "1987"],
    },
    {
      category: "Animals",
      type: "boolean",
      difficulty: "easy",
      question: "Kangaroos keep food in their pouches next to their children.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "In 2013 how much money was lost by Nigerian scams ",
      correct_answer: "12.7 Billion",
      incorrect_answers: ["95 Million", "956 Million", "2.7 Billion"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question:
        "How old was Lyndon B. Johnson when he assumed the role of President of the United States ",
      correct_answer: "55",
      incorrect_answers: ["50", "60", "54"],
    },
    {
      category: "Entertainment  Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "In World of Warcraft lore  who organized the creation of the Paladins ",
      correct_answer: "Alonsus Faol",
      incorrect_answers: [
        "Uther the Lightbringer",
        "Alexandros Mograine",
        "Sargeras  The Daemon Lord",
      ],
    },
    {
      category: "Entertainment  Video Games",
      type: "boolean",
      difficulty: "medium",
      question: "In the game  Subnautica   a  Cave Crawler  will attack you.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment  Japanese Anime Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the device that allows for infinite energy in the anime  Dimension W  ",
      correct_answer: "Coils",
      incorrect_answers: ["Wires", "Collectors", "Tesla"],
    },
    {
      category: "Entertainment  Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of Cream the Rabbit s mom in the  Sonic the Hedgehog  series ",
      correct_answer: "Vanilla",
      incorrect_answers: ["Peach", "Strawberry", "Mint"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question:
        "These two countries held a commonwealth from the 16th to 18th century.",
      correct_answer: "Poland and Lithuania",
      incorrect_answers: [
        "Hutu and Rwanda",
        "North Korea and South Korea",
        "Bangladesh and Bhutan",
      ],
    },
    {
      category: "Entertainment  Television",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these voices wasn t a choice for the House AI in  The Simpsons Treehouse of Horror  short  House of Whacks ",
      correct_answer: "George Clooney",
      incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"],
    },
    {
      category: "Entertainment  Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "From which album is the Gorillaz song   On Melancholy Hill  featured in ",
      correct_answer: "Plastic Beach",
      incorrect_answers: ["Demon Days", "Humanz", "The Fall"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "Scotland voted to become an independent country during the referendum from September 2014.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Entertainment  Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "In Left 4 Dead  which campaign has the protagonists going through a subway in order to reach a hospital for evacuation ",
      correct_answer: "No Mercy",
      incorrect_answers: ["Subway Sprint", "Hospital Havoc", "Blood Harvest"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the last colony the UK ceded marking the end of the British Empire ",
      correct_answer: "Hong Kong",
      incorrect_answers: ["India", "Australia", "Ireland"],
    },
  ];

  // const hardQ = data.filter((har)=>{
  //   return har.difficulty === "hard"
  // });

  // const mediumQ = data.filter((med)=>{
  //   return med.difficulty === "medium"
  // })

  // const easyQ = data.filter((eas)=>{
  //   return eas.difficulty === "easy"
  // })

  //Functions

  const [qNum, setQnum]= useState(1)
  const displayQ = data[qNum - 1];
  const [progressBar, setProgressBar] = useState(5);
  const [ansResultRight, setAnsResultRight] = useState(false);
  const [ansResultWrong, setAnsResultWrong] = useState(false);
  const [displayNextQ, setDisplayNextQ] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false)

  const submitHandler =(e)=>{
    e.preventDefault();
    if(qNum === 20){
      setQnum(1)
      setProgressBar(5)
      setShowResult(true);
    }else{
      setQnum(qNum + 1);
      setProgressBar(progressBar+100/data.length);
      setAnsResultRight(false);
      setAnsResultWrong(false);
      setDisplayNextQ(false);
    }
    
  }

  const CorrectAnswerHandler =(e)=> {
    e.preventDefault();
    setAnsResultWrong(false)
    setAnsResultRight(true)
    setDisplayNextQ(true)
    setScore(score+1)
  }

  const wrongAnswerHandler =(e) =>{
    e.preventDefault();
    setAnsResultRight(false)
    setAnsResultWrong(true);
    setDisplayNextQ(true)
  }

  const restartHandler =(e)=>{
    e.preventDefault();
    setQnum(1)
    setProgressBar(5)
    setScore(0)
    setShowResult(false)
    setAnsResultRight(false);
    setAnsResultWrong(false)
  }

  return (
    <div className="App">
      <div className="container p-2 p-md-3">
        <div className="border m-ms-5 p-3 text-start">
        {showResult ? null :  <div>
        <div className="progress">
          <div  className="progress-bar" role="progressbar" style={{width: `${progressBar}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
          <h2 className="text-start mt-2 ">Question {qNum} of {data.length}</h2>
          <p className="text-start mb-0">Category: {displayQ.category}</p>
          <p className="mt-0 p-0">{displayQ.difficulty === "easy" ? <span> ★ ☆ ☆</span> : null || displayQ.difficulty === "medium" ? <span> ★  ★ ☆</span> : <span> ★  ★  ★ </span>}</p>
          <h4 className="p-2">{displayQ.question}</h4>
          <div className="text-center">
            <div className="d-flex justify-content-around flex-wrap p-2 mt-2">
              <button className="btn btn-outline-dark m-2 w-100 px-5" onClick={CorrectAnswerHandler}>{displayQ.correct_answer}</button>
              {displayQ.incorrect_answers.map((ica) => (
                  <button key={ica.index} className="btn btn-outline-dark  m-2 px-5 w-100" onClick={wrongAnswerHandler}>{ica}</button>
              ))}
            </div>
          </div>
          <div className="text-center p-2">
            {ansResultRight && <h5 className="text-success">Correct!</h5>}
            {ansResultWrong && <h5 className="text-danger">Sorry please try again</h5>}
           {displayNextQ && <button className="text-center mt-3 btn btn-outline-warning" onClick={submitHandler}>Next Question</button>}
          </div>
          </div>}
          {showResult && <div className="text-center p-5">
            <h5>Your Score: {100/data.length * score}%</h5>
            <h5 className="text-center">Correct Answers: {score} / {data.length}</h5>
            <h5>Wrong Answers: {data.length - score} / {data.length}</h5>
            <button className="btn btn-outline-primary mt-2" onClick={restartHandler}>Restart</button>
          </div>}
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
