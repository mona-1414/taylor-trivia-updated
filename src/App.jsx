import React, { useState , useEffect} from 'react'
import FlashcardList from './components/FlashcardList'
import './App.css'




function App() {

  const [cards, setCards] = useState(SAMPLE_CARDS);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  


  const handleNextClick = () => {
    //const randomIndex = getRandomIndex(cards.length);
    //setCurrentCardIndex(randomIndex);

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setFeedback('');
      setUserGuess('');
    }

  };

  const handlePreviousClick = () =>{
    //const randomIndex = getRandomIndex(cards.length);
    //setCurrentCardIndex(randomIndex);

    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setFeedback('');
      setUserGuess('');
    }
  };

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };


  const handleGuessSubmit = () => {
    const currentCard = cards[currentCardIndex];
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  };
 

  return (

      <div>
        <h1>Taylor Swift Trivia</h1>

        <h3>How big of a swiftie are you actually? Test your knowledge and find out!</h3>

        <h3>Number of cards: {SAMPLE_CARDS.length}</h3>
        <div className="flashcard-container">
        <div className="card">
          <div className='front' onClick={() => setFeedback('')}>
            {cards[currentCardIndex].question}
          </div>
          <div className='back'>
            {cards[currentCardIndex].answer}
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button onClick={handleGuessSubmit}>Submit</button>
      <div>{feedback}</div>
      <button onClick={handlePreviousClick} disabled={currentCardIndex === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={currentCardIndex === cards.length - 1}>
        Next
      </button>
    </div>
    
      
    
  );
}

const SAMPLE_CARDS =[
  {
    id:1,
    question: "What year was Taylor born?",
    answer:"1989"

  },
  {
    id:2,
    question: "How many GRAMMYs does Taylor have?",
    answer:"12"
  },
  {
    id:3,
    question: "Who is 'Back To December' rumored to be about?",
    answer:"Taylor Lautner"
  },
  {
    id:4,
    question: "Which album did Taylor Swift write by herself, without any co-writers?",
    answer: "Speak Now"
  },
  {
    id:5,
    question:"What is Taylor Swift's favorite number?",
    answer:"13"
  },
  {
    id:6,
    question: "What is Taylor Swift's longest song title?",
    answer:"We Are Never Ever Getting Back Together (Red 2012)"
  },
  {
    id:7,
    question: "What were the listening parties called that Taylor Swift hosted for fans?",
    answer:"Secret Sessions"
  },
  {
    id:8,
    question: "What is the order of Taylor Swift's albums from oldest to most recent?",
    answer:"Debut, Fearless, Speak Now, Red, 1989, reputation, Lover, folklore, Midnights"
  },
  {
    id:9,
    question: "What artist is Taylor Swift named after?",
    answer:"James Taylor"
  },
  {
    id:10,
    question: "What type of farm did Taylor Swift grow up on?",
    answer:"A Christmas tree farm"
  },
  {
    id:11,
    question: "What classic book is referenced in 'This Is Why We Can't Have Nice Things'?",
    answer:"The Great Gatsby by F. Scott Fitzgerald"
  },
  {
    id:12,
    question: "What Taylor Swift song includes the lyric: 'November flush and your flannel cure'?",
    answer:"champagne problems"
  },

]

export default App
