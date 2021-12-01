import React, {useState, useEffect, useRef} from 'react'
import firebase from "../../firebase";
import { firestore } from 'firebase-admin'
import { config } from 'dotenv';
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc, getFirestore } from 'firebase/firestore'
import { useHistory } from "react-router";

const LearnExamAddPanel = () => {

    const history = useHistory()

    const [title, setTitle] = useState('')

    const [quizes, setQuizes] = useState([])

    const db = getFirestore()

    const QuizCollectionRef = collection(db, "egzaminy_probne")

    const ExamId = Math.floor(100000 + Math.random() * 9000).toString()

    const createQuiz = async () => {
        await addDoc(QuizCollectionRef, { 
        currentTrialExamId: ExamId, 
        tytul_egzaminu_probnego: title})

    }

    const GoToSettQuestion = () => {
        history.push({
            pathname:'/panel-administratora/baza-pytan/dodaj-pytanie',
            search:`?id-egzaminu=${ExamId}+nazwa-egzaminu-probnego=${title}`,
            state: { detail: 'some_value' },
            currentTrialExamId: ExamId,
            tytul_egzaminu_probnego: title
        })
        
    }

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Dodaj egzamin próbny</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">
<label style={{ alignSelf: 'center', margin: '20px 0px 10px' }}>Nazwa egzaminu próbnego:</label>
<input type='text' onChange={(event) => {setTitle(event.target.value)}} style={{ alignSelf: 'center', margin: '15px', width: '80%' }} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder=""/>

<button onClick={createQuiz} style={{color: '#fff' }} className="add_exam_btn"><a>Zapisz egzamin</a></button>
<button onClick={GoToSettQuestion} style={{color: '#fff' }} className="add_exam_btn"><a>Przejdź do dodawania pytań</a></button>

</div>

</div>
<div className="container_for_add_question_last">

</div>

</div>

</div>
</>
    )
}

export default LearnExamAddPanel