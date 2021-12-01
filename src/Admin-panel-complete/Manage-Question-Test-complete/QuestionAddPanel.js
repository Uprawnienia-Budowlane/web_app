import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom'
import firebase from "../../firebase";
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const QuestionAddPanel = ({ push, route }) => {

    const history = useHistory()

    const location = useLocation()

    /*const [currentTrialExamId, setCurrentTrialExamId] = useState(route.params.currentTrialExamId);
    const [title, setTitle] = useState(route.params.title);*/
    
      const [question, setQuestion] = useState('');
      const [imageUri, setImageUri] = useState('');
    
      const [correctAnswer, setCorrectAnswer] = useState('');
      const [optionTwo, setOptionTwo] = useState('');
      const [optionThree, setOptionThree] = useState('');
      const [optionFour, setOptionFour] = useState('');
    
      const handleQuestionSave = async () => {}

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Dodaj pytanie</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">

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