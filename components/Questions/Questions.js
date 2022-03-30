import { Router, useRouter } from 'next/router';
import React, {useState} from 'react';
import styles from './Questions.module.scss'

const Questions =()=>{
    const questions =[
        {questionText: '¿Quién es el fundador de Ferrari?',
        answerOptions:[
            {answerText: 'Penzo Anselmo Giuseppe Donato Ferrari,',isCorrect:false},
            {answerText: 'Enzo Giovanni Giuseppe Donato Ferrari',isCorrect:false},
            {answerText: 'Enzo Anselmo Giuseppe Maria Ferrari',isCorrect:true},
            {answerText: 'Enzo Anselmo Piero Maria Ferrari',isCorrect:false},
        ],
        imageQuestion:'/question1.jpg'
        },
        {questionText: '¿En que otra escuderia trabajo el fundador de Ferrari?',
        answerOptions:[
            {answerText: 'Williams',isCorrect:false},
            {answerText: 'Alfa Romeo',isCorrect:true},
            {answerText: 'Haas',isCorrect:false},
            {answerText: 'Alfa Tauri',isCorrect:false},
        ],
        imageQuestion:'/question2.jpg'
        },
        {questionText: '¿Donde se fabrican actualmente los Ferrari?',
        answerOptions:[
            {answerText: 'Roma',isCorrect:false},
            {answerText: 'Verona',isCorrect:false},
            {answerText: 'Marinella',isCorrect:false},
            {answerText: 'Maranello',isCorrect:true},
        ],
        imageQuestion:'/question3.jpg'
        },
        {questionText: '¿Que significa Testarossa famoso modelo de Ferrari?',
        answerOptions:[
            {answerText: 'Cabeza roja',isCorrect:true},
            {answerText: 'El más potente',isCorrect:false},
            {answerText: 'Grandeza',isCorrect:false},
            {answerText: 'El más rapido',isCorrect:false},
        ],
        imageQuestion:'/question4.jpg'
        },
        {questionText: 'Ultimo Ferrari de la "vieja escuela"',
        answerOptions:[
            {answerText: 'Ferrari F60',isCorrect:false},
            {answerText: 'Ferrari Enzo',isCorrect:false},
            {answerText: 'Ferrari F40',isCorrect:true},
            {answerText: 'Ferrari 296 GTB',isCorrect:false},
        ],
        imageQuestion:'/question5.jpg'
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore]= useState(false);
    const [score, setScore] = useState(0);
    const router = useRouter();
    const handleAnswerOptionClick=(isCorrect)=>{
        if(isCorrect){
            setScore(score +1);
        }

        const nextQuestion= currentQuestion+1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true)
        }
    }
    return(
        <>
        {
            showScore ? (
                <div>
                    {
                        score >= 3 &&
                        <div className={styles.congrats_container}>
                            <h1 className={styles.greating_title}>¡FELICIDADES!</h1>
                            <p className={styles.present_title}>¡Te has ganado un premio extraordinario!</p>
                            <p className={styles.discover_title}><strong>Toca</strong> en el icono para descubrir tu premio.</p>
                            <div className={styles.present_img_container}>
                                <img className={styles.present_img} src='/present.gif' onClick={()=> router.push('/present')}/>
                            </div>
                        </div>
                    }
                    {
                        score < 3 &&
                        <div className={styles.container_buu}>
                            <p className={styles.buu}>¡BUUU!</p>
                            <div className={styles.wrong_gif_container}>
                                <img className={styles.wrong_gif} src='/wrong.gif'/>
                            </div>
                            <p className={styles.buu_2}>¡NO CONSEGUISTE EL PUNTAJE REQUERIDO PARA EL PREMIO!</p>
                            <div className={styles.button_container}>
                                <button className={styles.button_answer} onClick={()=>router.reload()}>INTENTAR DE NUEVO</button>
                            </div>
                        </div>
                    }
                </div>
            ) : (
                <div className={styles.questions_container}>
                    <div className={styles.question_title_score}>
                        <span className={styles.question}>PREGUNTA <strong>{currentQuestion + 1}</strong></span>
                    </div>
                    <div className={styles.question_title}>
                        {questions[currentQuestion].questionText}
                    </div>
                    <div className={styles.img_question_container}>
                        <img src={questions[currentQuestion].imageQuestion} className={styles.img_question}/>
                    </div>
                    <div>
                        {questions[currentQuestion].answerOptions.map((answerOption,key)=>(
                            <div className={styles.button_container} key={key}>
                                <button onClick={()=> handleAnswerOptionClick(answerOption.isCorrect)} className={styles.button_answer}>{answerOption.answerText}</button>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Questions;