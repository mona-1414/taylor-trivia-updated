import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({flashcards, currentCardIndex}) => {

    const currentFlashcard = flashcards[currentCardIndex];
    return (
        <div className='card-grid'>
            <Flashcard flashcard={currentFlashcard}/>
        </div>
    );
};

export default FlashcardList;