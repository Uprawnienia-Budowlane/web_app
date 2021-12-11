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
import {ArrowXIcon} from '../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

const SiteArticleManagment = ({ push, route }) => {

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
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8" style={{ marginLeft: '15px' }}>Dodaj wpis</h1>
<div className="container-for_subwigets">

<div className="container_for_add_license_panel" style={{ margin: '0' }}>
<div className="add_something_panel_itself_first">
<label>Kategorie wpisu</label>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}}/><label>Dupa maryni</label>
</div>
<div className="container_for_checkboxes_and_label">
<input type="checkbox" style={{
  appearance: 'none',
  height: '21px',
  width: '22px',
  borderRadius: '0px',
  background: '#fff',
  border: '2px solid #3B82F6'
}} className="normal-checkbox"/><label style={{ margin: '0px -10px'}}>Bez kategorii</label>
</div>
<a className="text-500" style={{ textDecoration: 'underline', color: 'gray', fontSize: '12px', alignSelf: 'flex-start', margin: ' 0 20px' }}>Dodaj nową kategorie</a>
<label style={{ margin: '0px 20px', fontSize: '12px' }}>Nazwa kategorii</label>
<input type="search" style={{ height: '32px', width: '359px', alignSelf: 'flex-start', borderRadius:'8px' }} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200"/>
<label style={{ margin: '0px 20px', fontSize: '12px' }}>Kategoria nadrzędna</label>
<input type="search" style={{ height: '32px', width: '359px', alignSelf: 'flex-start', borderRadius:'8px' }} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200"/>
<button className="add_act_question_btn"><a>Dodaj kategorię</a></button>
</div>

<div className="add_something_panel_itself_second">
<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>

<div style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 0px 10px' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 30px' }}>Tagi</h1>
</div>


<div style={{ display: 'flex', flexDirection: 'column' }}>
<h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: '0 30px 10px' }}>Dodaj nowy tag:</h2>

<div className="tag_area">

  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>
  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>
  <div className="one_tag">
    <p>Dupa jasia</p>
    <div className="close_icon_tag"></div>
  </div>

</div>
</div>
</div>
</div>

<div className="add_something_panel_itself_second">
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<h1 className="font-bold text-black text-xl" style={{ margin: '0px 20px' }}>Obrazek wyróżniający</h1>
<span className="text-red" style={{ margin: '3.5px 20px', alignSelf: 'flex-end', color: 'red' }}>usuń</span>
</div>

<img style={{alignSelf: 'center', height: '140px', width: '367px', margin: '0px 0px 10px 0px' }} src=''></img>

</div>
</div>

<div className="container_for_options_addSomehing">
<div className="add_something_panel_itself_last" style={{ height: '750px' }}>

<label style={{ margin: '15px 15px 5px', alignSelf: 'flex-start' }}>Tytuł wpisu</label>
<input type="search"
style={{ margin: '0px 15px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>
  
<label style={{ margin: '15px 15px 5px', alignSelf: 'flex-start' }}>Meta dane wpisu:</label>
<input type="search"
style={{ margin: '0px 15px' }}
className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'/>
</div>
</div>
</div>
<div className="d-flex justify-center m-2" style={{ marginTop: '-110px' }}>
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

export default SiteArticleManagment