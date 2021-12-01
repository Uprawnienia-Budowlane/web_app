import React, {useState, useEffect, useRef} from 'react'
import firebase from "../../firebase";
import { firestore } from 'firebase-admin'
import { config } from 'dotenv';
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useHistory } from "react-router";

const LearnExamAddPanel = () => {

    const [title, setTitle] = useState('')

    const history = useHistory();

    /*const handleQuizSave = async () => {

    const currentQuizId = Math.floor(100000 + Math.random() * 9000).toString();

    await CreateQuiz(currentQuizId, title)

    history.push("/panel-administratora/baza-pytan/dodaj-pytanie", {
        currentQuizId: currentQuizId,
        currentQuizTitle: title
    });

    setTitle('')

    }*/

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Dodaj egzamin próbny</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">
<label style={{ alignSelf: 'center', margin: '20px 0px 10px' }}>Nazwa egzaminu próbnego:</label>
<input type='text' style={{ alignSelf: 'center', margin: '15px', width: '80%' }} onChangeText={val => setTitle(val)} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder=""/>

<button onClick="" style={{color: '#fff' }} className="add_exam_btn"><a>Zapisz egzamin</a></button>

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