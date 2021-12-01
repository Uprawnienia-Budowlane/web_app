import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
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

const QuestionDataBase = () => {

    const history = useHistory()

    const GoToSettQuestion = () => {
        history.push('/panel-administratora/baza-pytan/dodaj-egzamin-probny')
    }

return (
        <>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Baza pytań</h1>

<div className="main-container_on_panel_site">

<div className="container_for_all_options_base">
<div className="container_for_all_nav_iself">
<button className="nav_base_option active_btn"><a>Tryb nauki</a></button>
<button className="nav_base_option"><a>Tryb egzaminu pisemnego</a></button>
<input type="search" className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-100 p-4 search_input_base"
placeholder="Szukaj strony"/>
<button onClick={GoToSettQuestion} className="nav_base_option add_something_btn_base"><a>Dodaj egzamin próbny</a></button>
<button className="nav_base_option others_base"><a>Baza opracowań</a></button>
</div>
</div>

<div className="database_questions-option-panel">

<div className="question-panel-with-infos">

<p className="text-500 number_question" style={{ alignSelf: 'center' }}>1</p>
<p className="text-500" style={{ alignSelf: 'center' }}>Lorem ipsum</p> 
<div className="button-container-base-option">
<button style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
</div>
</div>

</div>

</div>

</div>
        </>
    )
}

export default QuestionDataBase
