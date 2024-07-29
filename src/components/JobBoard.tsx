import React, { useState } from 'react'
import { quizQuestions } from '../utils/constant'
import QuestionContainer from './QuestionContainer';


const JobBoard:React.FC = () => {

    // const [currentQuetion,setCurrentQuestion]=useState(quizQuestions[0]);
    const [currentIndex,setCurrentIndex]=useState(0);
    const [answers,setAnswers]=useState<any>([]);

    const handleNextQuestion=()=>{

        if((currentIndex+1)>=quizQuestions.length){
            return
            
        }
        else{
            setCurrentIndex(currentIndex+1)
        }
    }

    const handleAnswer=(currentAns:any)=>{
        const updated=[...answers]

        updated[currentIndex]=currentAns
        setAnswers(updated)

    }
    console.log(answers)


  return (
    <>

    <QuestionContainer handleAnswer={handleAnswer} {...quizQuestions[currentIndex]}/>

    <h6>{(currentIndex+1) }of {quizQuestions.length}</h6>

    <button onClick={handleNextQuestion} className='btn'>Next</button>
      
    </>
  )
}

export default JobBoard
