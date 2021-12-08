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

/* icon's */

import download_line from './Images/download_line.svg'
import eye_icon from './Images/eye_icon.svg'
import pencil_line from './Images/pencil_line.svg'
import upload_line from './Images/upload_line.svg'
import invisible_icon from './Images/invisible_icon.svg'
import bin_icon from './Images/delete-bin.svg' 

/* */

const ActWrittenDataBase = () => {

    const [ExamTrial, setExamTrial] = useState([])

    const db = getFirestore()

    const ExamTrialCollectionRef = collection(db, "egzaminy_probne");

      useEffect(
        () => 
        onSnapshot(collection(db, "egzaminy_probne"), (snapshot) => 
        setExamTrial(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
      )

    const history = useHistory()

    const GoToSettQuestion = () => {
        history.push('/panel-administratora/baza-pytan/dodaj-egzamin-probny')
    }

return (
        <>
<div className="admin_panel_itself analtyic_panel_width_fix">

<h1 className="font-bold text-black text-2xl my-8">Baza aktów prawnych do czytania</h1>

<div className="container_for_all_options_base">
<div className="container_for_all_nav_iself"  style={{ alignSelf: 'flex-end' }}>

<input type="search" style={{ alignSelf: 'flex-end', margin: '10px', width: '325px', height: '51px' }} className="border-blue-500 rounded-2xl border outline-none h-12 w-100 p-4 search_input_base"
placeholder="Szukaj strony"/>
<div className="button-container-base-option" style={{margin: '0px 10px 0px 60px'}}>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={upload_line}></img></button>
</div>
</div>
</div>

<div className="main-container_on_panel_site">

<div className="database_questions-option-panel">
<div style={{ 
display: 'flex', 
alignSelf: 'flex-start',  
justifyContent: 'space-around',
width: '100%'
}}>
<h1 style={{ margin: '0px 0px 20px 30px' }}>Numer</h1>
<h1 style={{ margin: '0px 330px 20px 400px' }}>Nazwa aktu prawnego</h1>
<h1 style={{ margin: '0px 25px 20px' }}>Akcje</h1>
</div>
{ExamTrial.map((examtrial) => ( 
<div className="question-panel-with-infos">
<p className="text-500 number_question" style={{ alignSelf: 'center' }}>{examtrial.currentTrialExamId}</p>
<p className="text-500 name_question" style={{ alignSelf: 'center' }}>{examtrial.tytul_egzaminu_probnego}</p> 
<div className="button-container-base-option" style={{margin: '10px'}}>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={upload_line}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={download_line}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={invisible_icon}></img></button>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={bin_icon}></img></button>
</div>
</div>
))}

</div>

</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
        </>
    )
}

export default ActWrittenDataBase
