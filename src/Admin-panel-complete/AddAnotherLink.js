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
import firebase from "../firebase";
import { useAuth } from '../context/AuthContext'
import {ArrowXIcon} from '../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const AddAnotherLink = ({ push, route }) => {

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
<div className="admin_panel_itself ">
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8">Dodaj link do menu</h1>
<div className="container-for_subwigets">

<div className="container_for_add_license_panel" style={{ margin: '0 0px' }}>
<div className="add_something_panel_itself_first">
<label>Specjalność</label>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}}/><label>Konstrukcyjno-budowlana</label>
</div>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}} className="normal-checkbox"/><label style={{ margin: '0px -10px'}}>Bez specjalności</label>
</div>
<a className="text-500" style={{ textDecoration: 'underline', color: 'gray', fontSize: '12px', alignSelf: 'flex-start', margin: ' 0 20px' }}>Dodaj nową specjalność</a>
<label style={{ margin: '0px 20px', fontSize: '12px' }}>Nazwa kategorii</label>
<input type="search" style={{ height: '32px', width: '359px', alignSelf: 'flex-start', borderRadius:'8px' }} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200"/>
<label style={{ margin: '0px 20px', fontSize: '12px' }}>Kategoria nadrzędna</label>

<select style={{ margin: '0px 20px', height: '32px', width: '359px', alignSelf: 'flex-start', borderRadius: '8px' }} className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200">
  <option>Chrząsz brzmi w trzcinie</option>
  <option>test</option>
  <option>test</option>
</select>

<button className="add_act_question_btn" style={{ margin: '0px 20px', alignSelf: 'flex-start', width: '126px' }}><a>Dodaj kategorię</a></button>
</div>

<div className="add_something_panel_itself_second" style={{ height: '120px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Widoczność postu</h1>
</div>
<div style={{ display: 'flex', flexDirection: 'column' }}>

<select style={{height: '32px', width: '359px', margin: '0 10px', alignSelf: 'center', borderRadius: '8px' }} className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200">
  <option>Publiczna</option>
  <option>test</option>
  <option>test</option>
</select>

</div>
</div>
</div>

</div>

<div className="container_for_options_addSomehing">
<div className="add_something_panel_itself_last" style={{ height: '311px' }}>

<div className="d-flex m-5" style={{ alignSelf: 'center' }}>
<label>Nazwa linku:</label>
<input type="text"
style={{ margin: '0px 15px', height: '32px', width: '866px', borderRadius: '8px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>
</div>

<div className="d-flex m-5" style={{ alignSelf: 'center' }}>
<label>Ikona linku:</label>
<input type="text"
style={{ margin: '0px 15px', height: '32px', width: '866px', borderRadius: '8px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>
</div>

<div className="d-flex m-5" style={{ alignSelf: 'center' }}>
<label>Link url:</label>
<input type="text"
style={{ margin: '0px 15px', height: '32px', width: '866px', borderRadius: '8px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>
</div>

<div className="d-flex m-5" style={{ alignSelf: 'center' }}>
<label>Pozycja:</label>
<select style={{height: '32px', width: '359px', margin: '0 10px', alignSelf: 'center', borderRadius: '8px' }} className="border border-blue-500 text-blue-500 p-1.5 hover:bg-blue-50 transition-colors duration-200">
  <option>Publiczna</option>
  <option>test</option>
  <option>test</option>
</select>
</div>


</div>
</div>
</div>
<div className="d-flex justify-center m-2" style={{alignSelf: 'center', marginTop: '-110px' }}>
<button className="Add_quest_btn save"><a>Zapisz wpis</a></button>
<button className="Add_quest_btn save_copy"><a>Zapisz jako szkic</a></button>
</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</div>
        </>
    )
}

export default AddAnotherLink