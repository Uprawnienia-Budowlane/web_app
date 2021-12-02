import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'
import { onSnapshot, 
    getFirestore, 
    collection, 
    CollectionReference,
    addDoc,
    getDoc, 
    getDocs, 
    deleteDoc,
    query, 
    doc,
    DocumentReference } from "@firebase/firestore";
import firebase from "../../firebase";
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const QuestionAddPanel = ({ push, route }) => {

    const db = getFirestore()

    const history = useHistory()

    const QuizCollectionRef = collection(db, "egzaminy_probne")

    const location = useLocation()
    
      const [question, setQuestion] = useState('');
      const [imageUri, setImageUri] = useState('');
    
      const [correctAnswer, setCorrectAnswer] = useState('');
      const [optionTwo, setOptionTwo] = useState('');
      const [optionThree, setOptionThree] = useState('');
      const [optionFour, setOptionFour] = useState('');

      let currentQuestionId = Math.floor(
        100000 + Math.random() * 9000,
      ).toString();
    
      const createQuestion = (currentTrialExamId, tytul_egzaminu_probnego) => {
      }

      const handleQuestionSave = async () => {
        if (
          question == '' ||
          correctAnswer == '' ||
          optionTwo == '' ||
          optionThree == '' ||
          optionFour == ''
        ) {
          return;
        }
    }

    const GoToBaseExamPanel = () => {

    history.push('/panel-administratora/baza-pytan')

    }

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Dodaj pytanie</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">
<h1 style={{ margin: '10px 0px 10px 10px' }}>Tytuł pytania</h1>
<input type='text' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<h1 style={{ margin: '10px' }}>Odpowiedzi</h1>
<input type='text'  onChangeText={val => setCorrectAnswer(val)} value={correctAnswer} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' value={optionTwo} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionTwo(val)} value={optionTwo} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionThree(val)}value={optionThree} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<input type='text' onChangeText={val => setOptionFour(val)} value={optionFour} className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{ margin: '10px 25px 10px 25px' }} placeholder=""/>
<button type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '30%'}}><a style={{alignSelf: 'center'}}>Dodaj odpowiedź</a></button>
<button onClick={GoToBaseExamPanel} type='button' className="border-blue-500 rounded-2xl border outline-none h-12 p-4" style={{display: 'flex', alignSelf: 'center', justifyContent: 'center', margin: '10px', width: '20%'}}><a style={{alignSelf: 'center'}}>Zakończ tworzenie egzaminu</a></button>
</div>

</div>
<div className="container_for_add_question_last">

</div>

</div>

</div>
        </>
    )
}

export default QuestionAddPanel